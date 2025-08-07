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
          
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gold mb-6 leading-tight">
          AL TERNOS
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-4 font-light">Aluguel de Ternos</p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Elegância italiana, corte perfeito e atendimento personalizado para momentos especiais inesquecíveis
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gold" size="xl" className="min-w-[200px]">
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </Button>
          <Button variant="gold-outline" size="xl" className="min-w-[200px]">
            <Calendar className="w-5 h-5" />
            Agendar Visita
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