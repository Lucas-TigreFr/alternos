import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Venha nos visitar e conheça pessoalmente nossa coleção de ternos e atendimento especializado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <div className="bg-black-medium rounded-2xl h-96 flex items-center justify-center border border-black-medium">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa interativo será carregado aqui
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Integração com Google Maps
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card border-black-medium">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua da Elegância, 123<br />
                      Centro - São Paulo/SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-black-medium">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Horário de Funcionamento</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda à Sexta: 9h às 18h</p>
                      <p>Sábados: 9h às 15h</p>
                      <p>Domingos: Sob agendamento</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-black-medium">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Contato</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Telefone: (11) 9 9999-9999</p>
                      <p>WhatsApp: (11) 9 9999-9999</p>
                      <p>Email: contato@altnos.com.br</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button variant="gold" size="lg" className="w-full">
                <Calendar className="w-5 h-5" />
                Agendar Visita Presencial
              </Button>
              <Button variant="gold-outline" size="lg" className="w-full">
                <MapPin className="w-5 h-5" />
                Ver no Google Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-card border border-black-medium rounded-xl p-6">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">Fácil Acesso</h3>
              <p className="text-sm text-muted-foreground">
                Localização central com estacionamento próprio e acesso por transporte público
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-card border border-black-medium rounded-xl p-6">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">Horários Flexíveis</h3>
              <p className="text-sm text-muted-foreground">
                Atendimento aos domingos sob agendamento para sua conveniência
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-card border border-black-medium rounded-xl p-6">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">Suporte Total</h3>
              <p className="text-sm text-muted-foreground">
                Equipe especializada pronta para atender e esclarecer suas dúvidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;