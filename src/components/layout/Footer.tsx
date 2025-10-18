import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">Maxx</span>
                <span className="text-xs text-muted-foreground">Serviços Elétricos</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Soluções elétricas e de climatização com segurança e eficiência para residências e empresas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-smooth">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/orcamento" className="text-muted-foreground hover:text-primary transition-smooth">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Instalações Elétricas</li>
              <li>Manutenção Elétrica</li>
              <li>Climatização</li>
              <li>Automação Residencial</li>
              <li>Eficiência Energética</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p>contato@maxxservicos.com.br</p>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p>São Paulo, SP</p>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p>Seg-Sex: 8h às 18h<br />Sáb: 8h às 12h</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Maxx Serviços Elétricos e de Climatização. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
