import { Link } from "react-router-dom";
import { Zap, Wrench, Wind, Cpu, ArrowRight, CheckCircle, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-electrical.jpg";

const Home = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Projetos completos de instalação elétrica residencial, comercial e industrial com segurança e eficiência.",
    },
    {
      icon: Wrench,
      title: "Manutenção",
      description: "Manutenção preventiva e corretiva de sistemas elétricos, garantindo o funcionamento contínuo e seguro.",
    },
    {
      icon: Wind,
      title: "Climatização",
      description: "Instalação, limpeza e manutenção de ar-condicionado e sistemas de climatização com qualidade comprovada.",
    },
    {
      icon: Cpu,
      title: "Automação",
      description: "Soluções em automação residencial e comercial para maior conforto, segurança e eficiência energética.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário de Comércio",
      content: "Serviço excelente! A equipe da Maxx foi super profissional e resolveu todos os problemas elétricos da minha loja rapidamente.",
    },
    {
      name: "Marina Santos",
      role: "Moradora Residencial",
      content: "Recomendo demais! Instalaram o ar-condicionado em casa com muita eficiência e deixaram tudo limpo e organizado.",
    },
    {
      name: "Roberto Oliveira",
      role: "Gerente Comercial",
      content: "Parceiros confiáveis para nossa empresa. Sempre atendem com agilidade e qualidade impecável nos serviços.",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: CheckCircle, value: "1000+", label: "Projetos Concluídos" },
    { icon: Award, value: "15+", label: "Anos de Experiência" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Serviços Elétricos Profissionais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Soluções Elétricas e de Climatização<br />com Segurança e Eficiência
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Atendemos residências, comércios e empresas com qualidade e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button asChild variant="accent" size="xl">
              <Link to="/orcamento">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em serviços elétricos e de climatização para atender todas as suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos nossos clientes é a nossa maior conquista.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar seu Projeto?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar com soluções elétricas e de climatização para sua residência ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl">
              <Link to="/orcamento">
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
