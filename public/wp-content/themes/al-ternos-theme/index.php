<?php
/**
 * AL Ternos – Tema básico de landing page
 * Estrutura única em index.php para fácil edição.
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?php bloginfo('name'); ?> – Aluguel de Ternos Slim Fit</title>
    <meta name="description" content="AL Ternos: aluguel de ternos slim fit com corte italiano, atendimento personalizado e retirada imediata. Mais de 3000 eventos realizados." />
    <link rel="canonical" href="<?php echo esc_url( home_url('/') ); ?>" />

    <meta property="og:title" content="AL Ternos – Aluguel de Ternos Slim Fit" />
    <meta property="og:description" content="Corte italiano, atendimento personalizado e retirada imediata. 3000+ eventos realizados." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo esc_url( home_url('/') ); ?>" />
    <meta property="og:image" content="<?php echo esc_url( get_template_directory_uri() . '/images/og-image.jpg' ); ?>" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AL Ternos – Aluguel de Ternos Slim Fit" />
    <meta name="twitter:description" content="Corte italiano, atendimento personalizado e retirada imediata." />
    <meta name="twitter:image" content="<?php echo esc_url( get_template_directory_uri() . '/images/og-image.jpg' ); ?>" />

    <link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>" />
    <?php wp_head(); ?>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "AL Ternos",
      "image": "<?php echo esc_url( get_template_directory_uri() . '/images/og-image.jpg' ); ?>",
      "description": "Aluguel de ternos slim fit com corte italiano, atendimento personalizado e retirada imediata.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Exemplo, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "00000-000",
        "addressCountry": "BR"
      },
      "telephone": "+55 11 99999-9999",
      "url": "<?php echo esc_url( home_url('/') ); ?>"
    }
    </script>
  </head>
  <body <?php body_class('page-home'); ?>>
    <?php wp_body_open(); ?>

    <main id="inicio" class="site-main">
      <!-- Hero -->
      <section class="hero">
        <div class="hero__overlay"></div>
        <div class="container hero__content" role="region" aria-label="Introdução">
          <p class="eyebrow">Elegância e sofisticação</p>
          <img
            src="/lovable-uploads/4980b7d6-1f29-4a6b-a3fa-87d9029e7774.png"
            alt="Textura dourada elegante – destaque AL Ternos"
            width="160"
            height="160"
            loading="eager"
            fetchpriority="high"
            class="hero__badge"
          />
          <h1 class="hero__title">Aluguel de Ternos Slim Fit</h1>
          <p class="hero__subtitle">Corte italiano, atendimento personalizado e <strong>modelos para retirada imediata</strong>.</p>
          <div class="hero__cta">
            <a class="btn btn-gold" href="https://wa.me/5511999999999" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">Falar no WhatsApp</a>
            <a class="btn btn-outline" href="#colecao">Ver Coleção</a>
          </div>
          <div class="hero__trust">
            <div class="trust__item">
              <div class="trust__value">3000+</div>
              <div class="trust__label">Eventos Realizados</div>
            </div>
            <div class="trust__item">
              <div class="trust__value">Slim Fit</div>
              <div class="trust__label">Corte Italiano</div>
            </div>
            <div class="trust__item">
              <div class="trust__value">★★★★★</div>
              <div class="trust__label">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Diferenciais / Serviços -->
      <section id="servicos" class="section">
        <div class="container">
          <header class="section__header">
            <h2 class="section__title">Nossos Diferenciais</h2>
            <p class="section__subtitle">Qualidade premium e experiência impecável para seu evento</p>
          </header>
          <div class="cards">
            <article class="card">
              <h3 class="card__title">Corte Italiano</h3>
              <p class="card__text">Modelagem moderna com caimento perfeito para valorizar seu estilo.</p>
            </article>
            <article class="card">
              <h3 class="card__title">Retirada Imediata</h3>
              <p class="card__text">Amplo estoque com tamanhos e modelos para <strong>retirada imediata</strong>.</p>
            </article>
            <article class="card">
              <h3 class="card__title">Atendimento Personalizado</h3>
              <p class="card__text">Acompanhamento completo para escolher o terno ideal.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Coleção -->
      <section id="colecao" class="section section--alt">
        <div class="container">
          <header class="section__header">
            <h2 class="section__title">Nossa Coleção</h2>
            <p class="section__subtitle">Ternos slim fit selecionados para destacar sua elegância</p>
          </header>

          <figure class="feature">
            <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/suits-collection.jpg' ); ?>" alt="Coleção de ternos slim fit da AL Ternos" />
            <figcaption class="feature__caption">
              <h3>Qualidade que Fala por Si</h3>
              <p>Cada detalhe pensado para sua experiência única.</p>
              <a class="btn btn-gold" href="#modelos">Ver Todos os Modelos</a>
            </figcaption>
          </figure>

          <div id="modelos" class="grid-3">
            <article class="product">
              <div class="product__media">
                <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/suits-catalog-1.jpg' ); ?>" alt="Terno Clássico Preto slim fit" />
              </div>
              <div class="product__body">
                <h3 class="product__title">Terno Clássico Preto</h3>
                <p class="product__desc">Elegância atemporal para cerimônias e eventos especiais.</p>
                <div class="product__price">A partir de $199</div>
                <ul class="product__features">
                  <li>Corte Slim Fit</li>
                  <li>Tecido Premium</li>
                  <li>Gravata + Camisa Social Inclusas</li>
                </ul>
                <a class="btn btn-outline btn-block" href="https://wa.me/5511999999999" target="_blank" rel="noopener">Consultar Disponibilidade</a>
              </div>
            </article>

            <article class="product">
              <div class="product__media">
                <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/suits-catalog-2.jpg' ); ?>" alt="Terno Azul Marinho com corte italiano" />
              </div>
              <div class="product__body">
                <h3 class="product__title">Terno Azul Marinho</h3>
                <p class="product__desc">Sofisticação e versatilidade para qualquer ocasião.</p>
                <div class="product__price">A partir de $199</div>
                <ul class="product__features">
                  <li>Corte Italiano</li>
                  <li>Tecido Importado</li>
                  <li>Gravata + Camisa Social Inclusas</li>
                </ul>
                <a class="btn btn-outline btn-block" href="https://wa.me/5511999999999" target="_blank" rel="noopener">Consultar Disponibilidade</a>
              </div>
            </article>

            <article class="product">
              <div class="product__media">
                <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/suits-catalog-3.jpg' ); ?>" alt="Terno Cinza Charcoal moderno" />
              </div>
              <div class="product__body">
                <h3 class="product__title">Terno Cinza Charcoal</h3>
                <p class="product__desc">Modernidade e elegância em um único modelo.</p>
                <div class="product__price">A partir de $199</div>
                <ul class="product__features">
                  <li>Design Moderno</li>
                  <li>Ajuste Perfeito</li>
                  <li>Gravata + Camisa Social Inclusas</li>
                </ul>
                <a class="btn btn-outline btn-block" href="https://wa.me/5511999999999" target="_blank" rel="noopener">Consultar Disponibilidade</a>
              </div>
            </article>
          </div>

          <!-- Instagram -->
          <aside class="instagram">
            <h3 class="instagram__title">Siga nosso Instagram</h3>
            <p class="instagram__subtitle">Novidades, looks e bastidores</p>
            <div class="instagram__grid">
              <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/instagram-1.jpg' ); ?>" alt="Post do Instagram 1 – AL Ternos" />
              <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/instagram-2.jpg' ); ?>" alt="Post do Instagram 2 – AL Ternos" />
              <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/instagram-3.jpg' ); ?>" alt="Post do Instagram 3 – AL Ternos" />
              <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri() . '/images/instagram-4.jpg' ); ?>" alt="Post do Instagram 4 – AL Ternos" />
            </div>
            <a class="btn btn-outline" href="https://instagram.com/alternosoficial" target="_blank" rel="noopener" aria-label="Visitar Instagram da AL Ternos">@alternosoficial</a>
          </aside>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="section">
        <div class="container">
          <header class="section__header">
            <h2 class="section__title">Dúvidas Frequentes</h2>
            <p class="section__subtitle">Tudo que você precisa saber sobre nossos serviços</p>
          </header>

          <div class="faq">
            <details class="faq__item">
              <summary class="faq__q">Como funciona o aluguel de ternos?</summary>
              <div class="faq__a">Agende uma visita, experimente os modelos, escolha seu terno e defina as datas de retirada e devolução. Damos suporte para garantir o ajuste perfeito.</div>
            </details>
            <details class="faq__item">
              <summary class="faq__q">Qual é o prazo mínimo e máximo de aluguel?</summary>
              <div class="faq__a">Mínimo de 1 dia e máximo de 7 dias. Para necessidades específicas, negociamos prazos diferenciados.</div>
            </details>
            <details class="faq__item">
              <summary class="faq__q">O que está incluso no aluguel?</summary>
              <div class="faq__a">O aluguel inclui o terno completo (paletó/blazer e calça), <strong>camisa social</strong> e <strong>gravata</strong> (ou gravata borboleta). <strong>Não trabalhamos com sapatos</strong>.</div>
            </details>
            <details class="faq__item">
              <summary class="faq__q">Vocês fazem ajustes no terno?</summary>
              <div class="faq__a">Sim! Fazemos ajustes para garantir o caimento perfeito. Ajustes básicos estão inclusos no valor do aluguel.</div>
            </details>
            <details class="faq__item">
              <summary class="faq__q">E se o terno não servir bem?</summary>
              <div class="faq__a">Temos prova prévia obrigatória e realizamos os ajustes necessários. Se não ficar adequado, trocamos por outro modelo sem custo adicional.</div>
            </details>
          </div>

          <div class="cta cta--center">
            <h3>Ainda tem dúvidas?</h3>
            <p>Nossa equipe ajuda você a escolher o terno perfeito.</p>
            <a class="btn btn-gold" href="https://wa.me/5511999999999" target="_blank" rel="noopener">Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      <!-- Localização -->
      <section id="contato" class="section section--alt">
        <div class="container">
          <header class="section__header">
            <h2 class="section__title">Nossa Localização</h2>
            <p class="section__subtitle">Visite-nos e experimente nossos ternos</p>
          </header>

          <div class="location">
            <div class="location__map">
              <iframe title="Mapa da AL Ternos" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0000000000005!2d-46.65100000000001!3d-23.599000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSeu%20Endere%C3%A7o!5e0!3m2!1spt-BR!2sBR!4v0000000000000" allowfullscreen></iframe>
            </div>
            <div class="location__info">
              <div class="info__block">
                <h3>Endereço</h3>
                <p>Rua Exemplo, 123 – São Paulo/SP</p>
              </div>
              <div class="info__block">
                <h3>Horário</h3>
                <p>Seg a Sex: 10h às 19h • Sáb: 9h às 14h</p>
              </div>
              <div class="info__block">
                <h3>Contato</h3>
                <p>Tel/WhatsApp: (11) 9 9999-9999</p>
                <div class="btn-row">
                  <a class="btn btn-gold" href="https://wa.me/5511999999999" target="_blank" rel="noopener">Agendar Visita</a>
                  <a class="btn btn-outline" href="https://maps.google.com" target="_blank" rel="noopener">Ver no Google Maps</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer__grid">
        <div class="footer__col">
          <h3 class="footer__brand">AL Ternos</h3>
          <p>Elegância e sofisticação para seu evento. Especialistas em aluguel de ternos slim fit.</p>
          <div class="social">
            <a href="https://instagram.com/alternosoficial" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#colecao">Coleção</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Serviços</h4>
          <ul>
            <li>Aluguel de Ternos Slim Fit</li>
            <li>Atendimento Personalizado</li>
            <li>Ajustes e Provas</li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contato</h4>
          <ul>
            <li>(11) 9 9999-9999</li>
            <li>Rua Exemplo, 123 – São Paulo/SP</li>
            <li>Seg a Sex 10h–19h • Sáb 9h–14h</li>
          </ul>
          <a class="btn btn-gold btn-block" href="https://wa.me/5511999999999" target="_blank" rel="noopener">Falar no WhatsApp</a>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container footer__bottom__inner">
          <small>© <?php echo date('Y'); ?> AL Ternos. Todos os direitos reservados.</small>
          <nav class="footer__legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </nav>
        </div>
      </div>
    </footer>

    <script src="<?php echo esc_url( get_template_directory_uri() . '/js/main.js' ); ?>" defer></script>
    <?php wp_footer(); ?>
  </body>
</html>
