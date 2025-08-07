import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Eye } from "lucide-react";
import collectionImage from "@/assets/suits-collection.jpg";
import catalog1 from "@/assets/suits-catalog-1.jpg";
import catalog2 from "@/assets/suits-catalog-2.jpg";
import catalog3 from "@/assets/suits-catalog-3.jpg";
import instagram1 from "@/assets/instagram-1.jpg";
import instagram2 from "@/assets/instagram-2.jpg";
import instagram3 from "@/assets/instagram-3.jpg";
import instagram4 from "@/assets/instagram-4.jpg";

const Collection = () => {
  const suits = [
    {
      name: "Terno Clássico Preto",
      description: "Elegância atemporal para cerimônias e eventos especiais",
      price: "A partir de $199",
      features: ["Corte Slim Fit", "Tecido Premium", "Gravata + Camisa Social Inclusas"],
      image: catalog1
    },
    {
      name: "Terno Azul Marinho",
      description: "Sofisticação e versatilidade para qualquer ocasião",
      price: "A partir de $199",
      features: ["Corte Italiano", "Tecido Importado", "Gravata + Camisa Social Inclusas"],
      image: catalog2
    },
    {
      name: "Terno Cinza Charcoal",
      description: "Modernidade e elegância em um único modelo",
      price: "A partir de $199",
      features: ["Design Moderno", "Ajuste Perfeito", "Gravata + Camisa Social Inclusas"],
      image: catalog3
    }
  ];

  const instagramImages = [instagram1, instagram2, instagram3, instagram4];

  return (
    <section id="colecao" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Nossa Coleção
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa seleção exclusiva de ternos slim fit, cada um pensado para destacar sua elegância
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 relative rounded-2xl overflow-hidden">
          <img 
            src={collectionImage} 
            alt="Coleção AL Ternos" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Qualidade que Fala por Si
              </h3>
              <p className="text-lg md:text-xl mb-6">
                Cada detalhe pensado para sua experiência única
              </p>
              <Button variant="gold" size="lg">
                <Eye className="w-5 h-5" />
                Ver Todos os Modelos
              </Button>
            </div>
          </div>
        </div>

        {/* Suits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {suits.map((suit, index) => (
            <Card key={index} className="bg-card border-black-medium hover:border-gold transition-all duration-300 hover:shadow-gold overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={suit.image} 
                  alt={suit.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gold mb-2">
                  {suit.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {suit.description}
                </p>
                <div className="text-lg font-bold text-gold mb-4">
                  {suit.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {suit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="gold-outline" className="w-full">
                  <MessageCircle className="w-4 h-4" />
                  Consultar Disponibilidade
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Integration Placeholder */}
        <div className="bg-gradient-to-r from-gold/5 to-gold-dark/5 rounded-2xl p-8 border border-gold/20 text-center">
          <h3 className="text-2xl font-bold text-gold mb-4">
            Siga nosso Instagram
          </h3>
          <p className="text-muted-foreground mb-6">
            Acompanhe nossas novidades, looks inspiradores e eventos realizados
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {instagramImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button variant="gold-outline">
            @alternosoficial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collection;