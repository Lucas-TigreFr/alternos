// Main JS para o tema AL Ternos
// - Rolagem suave para âncoras
// - Pequenas melhorias de UX

(function(){
  function smoothScroll(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const href = a.getAttribute('href');
    if(href.length <= 1) return;
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  document.addEventListener('click', smoothScroll);

  // Marcar cliques no WhatsApp
  const whats = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
  whats.forEach((w)=>{
    w.addEventListener('click', ()=>{
      try { sessionStorage.setItem('clicked_whatsapp', '1'); } catch(err){}
    });
  });
})();
