import { Target, Eye, Award, Users, Shield, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-maxx.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Priorizamos a segurança em todos os nossos serviços, seguindo rigorosamente as normas técnicas.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Utilizamos materiais de primeira linha e mão de obra qualificada em todos os projetos.",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Comprometidos com prazos, orçamentos e a satisfação total dos nossos clientes.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre atualizados com as mais modernas tecnologias e técnicas do mercado.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Maxx Serviços Elétricos
            </h1>
            <p className="text-lg opacity-90">
              Há mais de 15 anos oferecendo soluções completas em serviços elétricos e de climatização com excelência e profissionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Maxx Serviços Elétricos e de Climatização nasceu da união de profissionais experientes e apaixonados por oferecer soluções elétricas e de climatização de qualidade superior.
                </p>
                <p>
                  Com mais de 15 anos de atuação no mercado, conquistamos a confiança de centenas de clientes residenciais e comerciais em toda a região. Nossa equipe é formada por técnicos certificados e constantemente treinados nas mais recentes tecnologias e normas de segurança.
                </p>
                <p>
                  Hoje, somos referência em instalações elétricas, manutenção, climatização e automação, sempre priorizando a segurança, eficiência e satisfação dos nossos clientes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Equipe Maxx"
                className="rounded-lg shadow-hover w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-hover max-w-[200px]">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Proporcionar soluções elétricas e de climatização de excelência, com segurança, eficiência e compromisso, superando as expectativas dos nossos clientes e contribuindo para ambientes mais confortáveis e seguros.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="bg-gradient-accent p-3 rounded-lg w-fit mb-4">
                  <Eye className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a empresa líder em serviços elétricos e de climatização na região, pela qualidade técnica, inovação e atendimento diferenciado, sempre em sintonia com as mais modernas tecnologias do mercado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com clientes e parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-hover transition-smooth border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
