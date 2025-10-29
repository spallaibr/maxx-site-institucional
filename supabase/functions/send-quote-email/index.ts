import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, service, message }: QuoteRequest = await req.json();

    console.log("Processing quote request from:", email);

    // Traduzir o tipo de serviço para português
    const serviceMap: { [key: string]: string } = {
      instalacao: "Instalações Elétricas",
      manutencao: "Manutenção Elétrica",
      climatizacao: "Climatização",
      automacao: "Automação",
      eficiencia: "Eficiência Energética",
      laudo: "Laudos e Certificações",
      outro: "Outro",
    };

    const serviceName = serviceMap[service] || service;

    // Enviar e-mail para a empresa
    const emailResponse = await resend.emails.send({
      from: "Maxx Orçamentos <onboarding@resend.dev>",
      to: ["contato@maxx.com.br"],
      subject: `Novo Orçamento - ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Novo Pedido de Orçamento</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dados do Cliente</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Serviço:</strong> ${serviceName}</p>
          </div>
          
          ${message ? `
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #1e3a8a; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Mensagem</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Este e-mail foi enviado automaticamente pelo formulário de orçamento do site.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      message: "Orçamento enviado com sucesso!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Erro ao enviar orçamento. Tente novamente.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
