import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-elegant border-t border-black-medium">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/dfa79e39-5dda-496a-8d1c-0df0239df077.png" 
              alt="AL Ternos" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Excelência em aluguel de ternos slim fit com atendimento personalizado e qualidade italiana.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold-dark hover:bg-gold/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold-dark hover:bg-gold/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-gold transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#colecao" className="text-muted-foreground hover:text-gold transition-colors">
                  Coleção
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Aluguel de Ternos</li>
              <li className="text-muted-foreground">Ajustes Personalizados</li>
              <li className="text-muted-foreground">Consultoria de Estilo</li>
              <li className="text-muted-foreground">Acessórios Complementares</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-muted-foreground">(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-muted-foreground">Rua da Elegância, 123 - Centro/SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-muted-foreground">Seg-Sex: 9h-18h | Sáb: 9h-15h</span>
              </div>
            </div>
            
            <Button variant="whatsapp" className="w-full mt-6">
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black-medium mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AL Ternos. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-gold text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-gold text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;