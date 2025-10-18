import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: ["(11) 99999-9999", "(11) 3333-3333"],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@maxxservicos.com.br"],
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["São Paulo, SP", "Brasil"],
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg opacity-90">
              Estamos prontos para atender você. Entre em contato através de qualquer um dos nossos canais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-hover transition-smooth border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border bg-card shadow-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-[#25D366] p-4 rounded-full w-fit mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-3">
                  Fale Conosco pelo WhatsApp
                </h2>
                <p className="text-muted-foreground mb-6">
                  Atendimento rápido e direto. Tire suas dúvidas ou solicite um orçamento agora mesmo!
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366]"
                >
                  <a
                    href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Nossa Localização
              </h2>
              <p className="text-muted-foreground">
                Atendemos toda a região metropolitana de São Paulo
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-hover h-[400px] bg-muted">
              <iframe
                title="Mapa de localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0429634294!2d-46.87544584374999!3d-23.681444899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Solicite um orçamento gratuito e sem compromisso para seu projeto.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/orcamento">Solicitar Orçamento Gratuito</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
