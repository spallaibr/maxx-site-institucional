import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-quote-email', {
        body: formData
      });

      if (error) throw error;

      toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
      
      // Limpar formulário
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar orçamento:", error);
      toast.error("Erro ao enviar orçamento. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para:\n\nNome: ${formData.name}\nServiço: ${formData.service}\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solicite um Orçamento
            </h1>
            <p className="text-lg opacity-90">
              Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar a melhor solução para seu projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border bg-card shadow-hover">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-input"
                      required
                    />
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-input"
                      required
                    />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-input"
                      required
                    />
                  </div>

                  {/* Tipo de Serviço */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Tipo de Serviço *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="border-input">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instalacao">Instalações Elétricas</SelectItem>
                        <SelectItem value="manutencao">Manutenção Elétrica</SelectItem>
                        <SelectItem value="climatizacao">Climatização</SelectItem>
                        <SelectItem value="automacao">Automação</SelectItem>
                        <SelectItem value="eficiencia">Eficiência Energética</SelectItem>
                        <SelectItem value="laudo">Laudos e Certificações</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (Opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto ou necessidade..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] border-input resize-none"
                    />
                  </div>

                  {/* Botões */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting}>
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Enviando..." : "Solicitar Orçamento Agora"}
                    </Button>
                    <Button type="button" onClick={handleWhatsApp} variant="outline" size="lg" className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366]">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Enviar via WhatsApp
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2">Resposta Rápida</h3>
                  <p className="text-sm text-muted-foreground">
                    Retornamos seu contato em até 24 horas úteis com um orçamento personalizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2">Orçamento Gratuito</h3>
                  <p className="text-sm text-muted-foreground">
                    Todas as nossas propostas são gratuitas e sem compromisso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
