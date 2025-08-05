import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Users, Clock, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-gold" />,
      title: "Corte Italiano",
      description: "Ternos com corte slim fit italiano, garantindo elegância e sofisticação para seu evento especial."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Atendimento Personalizado",
      description: "Consultoria especializada para escolher o terno perfeito de acordo com seu biotipo e ocasião."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "Pronta Entrega",
      description: "Amplo estoque disponível com diferentes tamanhos e modelos para entrega imediata."
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Qualidade Premium",
      description: "Tecidos nobres e acabamento impecável, garantindo conforto e elegância em cada peça."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos tradição italiana com inovação brasileira para oferecer a melhor experiência em aluguel de ternos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-black-medium hover:border-gold transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
              Experimente a Diferença AL Ternos
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Venha conhecer nossa loja e experimente nossos ternos. Atendimento especializado e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Agendar Visitação
              </a>
              <a 
                href="#colecao"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black-elegant transition-colors"
              >
                Ver Coleção
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;