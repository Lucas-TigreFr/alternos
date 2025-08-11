import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const FAQ = () => {
  const faqs = [{
    question: "Como funciona o aluguel de ternos?",
    answer: "É muito simples! Você agenda uma visita, experimenta os modelos disponíveis, escolhe o terno ideal e define as datas de retirada e devolução. Oferecemos todo o suporte para garantir o ajuste perfeito."
  }, {
    question: "Qual é o prazo mínimo e máximo de aluguel?",
    answer: "O prazo mínimo é de 1 dia e o máximo é de 7 dias. Para eventos especiais ou necessidades específicas, podemos negociar prazos diferenciados."
  }, {
    question: "O que está incluso no aluguel?",
    answer: "O aluguel inclui o terno completo (paletó/blazer e calça), camisa social e gravata (ou gravata borboleta). Não trabalhamos com sapatos."
  }, {
    question: "Vocês fazem ajustes no terno?",
    answer: "Sim! Temos um serviço de ajustes para garantir o caimento perfeito. Os ajustes básicos estão inclusos no valor do aluguel."
  }, {
    question: "E se o terno não servir bem?",
    answer: "Oferecemos prova prévia obrigatória e ajustes necessários. Se ainda assim não ficar adequado, fazemos a troca por outro modelo sem custo adicional."
  }, {
    question: "Qual forma de pagamento vocês aceitam?",
    answer: "Aceitamos dinheiro, cartão de débito, crédito (até 3x sem juros), PIX e transferência bancária. Também oferecemos planos especiais para eventos grandes."
  }, {
    question: "Preciso deixar alguma garantia?",
    answer: "Solicitamos um documento de identidade original como garantia, que é devolvido no momento da devolução do terno em perfeitas condições."
  }, {
    question: "E se eu danificar o terno?",
    answer: "Pequenos desgastes naturais são normais. Para danos maiores, temos uma política justa de ressarcimento baseada no tipo e extensão do dano."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços de aluguel de ternos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-black-medium rounded-lg px-6 data-[state=open]:border-gold transition-colors">
                <AccordionTrigger className="text-left text-gold hover:text-gold-dark font-semibold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e ajudar você a escolher o terno perfeito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ghost" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                <a href="https://wa.me/5585981966777?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas." target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
                  Falar no WhatsApp
                </a>
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;