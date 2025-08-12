import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Star } from "lucide-react";
import heroImage from "@/assets/suits-hero.jpg";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Elegantes ternos AL Ternos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <img
            src="/lovable-uploads/4980b7d6-1f29-4a6b-a3fa-87d9029e7774.png"
            alt="Detalhe dourado AL Ternos – textura metálica"
            width={256}
            height={256}
            loading="eager"
            fetchPriority="high"
            className="mx-auto w-28 md:w-40 h-auto rounded"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gold mb-6 leading-tight">
          AL TERNOS
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-4 font-light">Aluguel de Ternos</p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Elegância italiana, corte perfeito e atendimento personalizado para momentos especiais inesquecíveis
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="gold" size="xl" className="min-w-[200px]">
            <a href="https://wa.me/5585981966777?text=Olá%2C+gostaria+de+saber+mais+sobre+os+ternos" target="Whats" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">3000+</div>
            <div className="text-sm text-muted-foreground">Eventos Realizados</div>
          </div>
          <div className="text-center mx-0">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
