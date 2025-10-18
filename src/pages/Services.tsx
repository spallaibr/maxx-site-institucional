import { Link } from "react-router-dom";
import { Zap, Wrench, Wind, Cpu, Lightbulb, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Realizamos projetos completos de instalação elétrica para residências, comércios e indústrias.",
      features: [
        "Projeto elétrico completo",
        "Instalação de quadros de distribuição",
        "Passagem de fiação e eletrodutos",
        "Instalação de tomadas e interruptores",
        "Adequação às normas da ABNT",
        "Certificação e laudo técnico",
      ],
    },
    {
      icon: Wrench,
      title: "Manutenção Elétrica",
      description: "Serviços de manutenção preventiva e corretiva para garantir o funcionamento seguro e eficiente.",
      features: [
        "Manutenção preventiva periódica",
        "Correção de problemas elétricos",
        "Troca de disjuntores e dispositivos",
        "Identificação de curtos-circuitos",
        "Atendimento de emergência 24h",
        "Relatórios técnicos detalhados",
      ],
    },
    {
      icon: Wind,
      title: "Climatização",
      description: "Instalação, limpeza e manutenção de sistemas de ar-condicionado e climatização.",
      features: [
        "Instalação de ar-condicionado split",
        "Instalação de sistemas VRF",
        "Limpeza e higienização",
        "Recarga de gás refrigerante",
        "Manutenção preventiva",
        "Assistência técnica especializada",
      ],
    },
    {
      icon: Cpu,
      title: "Automação Residencial e Comercial",
      description: "Soluções inteligentes para maior conforto, segurança e economia de energia.",
      features: [
        "Automação de iluminação",
        "Controle de temperatura",
        "Sistemas de segurança",
        "Integração com assistentes de voz",
        "Controle via aplicativo",
        "Programação de cenários",
      ],
    },
    {
      icon: Lightbulb,
      title: "Eficiência Energética",
      description: "Análise e implementação de soluções para redução do consumo de energia.",
      features: [
        "Auditoria energética",
        "Adequação de carga elétrica",
        "Instalação de LED",
        "Correção de fator de potência",
        "Sistemas de energia solar",
        "Relatório de economia",
      ],
    },
    {
      icon: Shield,
      title: "Laudos e Certificações",
      description: "Emissão de laudos técnicos e certificações para conformidade com normas.",
      features: [
        "Laudo de instalações elétricas",
        "SPDA (para-raios)",
        "Termografia",
        "ART (Anotação de Responsabilidade Técnica)",
        "Laudos para seguradoras",
        "Relatórios fotográficos",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-lg opacity-90">
              Soluções completas em serviços elétricos e de climatização para atender todas as suas necessidades com segurança e eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-smooth border-border bg-card">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Entre em Contato e Descubra Como Podemos Ajudar seu Projeto
            </h2>
            <p className="text-muted-foreground mb-8">
              Nossa equipe está pronta para oferecer a melhor solução para suas necessidades em serviços elétricos e de climatização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/orcamento">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
