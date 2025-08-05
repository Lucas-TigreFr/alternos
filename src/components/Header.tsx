import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black-elegant/95 backdrop-blur-md border-b border-black-medium">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/dfa79e39-5dda-496a-8d1c-0df0239df077.png" 
            alt="AL Ternos" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gold hover:text-gold-dark transition-colors font-medium">
            Início
          </a>
          <a href="#servicos" className="text-gold hover:text-gold-dark transition-colors font-medium">
            Serviços
          </a>
          <a href="#colecao" className="text-gold hover:text-gold-dark transition-colors font-medium">
            Coleção
          </a>
          <a href="#contato" className="text-gold hover:text-gold-dark transition-colors font-medium">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="gold-outline" size="sm" className="hidden sm:flex">
            <Phone className="w-4 h-4" />
            (11) 9 9999-9999
          </Button>
          <Button variant="whatsapp" size="sm">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;