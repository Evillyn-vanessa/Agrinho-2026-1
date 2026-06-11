// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
                e.preventDefault();
                      const target = document.querySelector(href);
                            if (target) target.scrollIntoView({ behavior: 'smooth' });
                                }
                                  });
                                  });

                                  // Anima as barras dos gráficos quando aparecem na tela
                                  const barras = document.querySelectorAll('.barra');
                                  barras.forEach(b => {
                                    b.dataset.largura = b.style.width;
                                      b.style.width = '0';
                                        b.style.transition = 'width 1.2s ease';
                                        });

                                        const observer = new IntersectionObserver((entries) => {
                                          entries.forEach(entry => {
                                              if (entry.isIntersecting) {
                                                    entry.target.style.width = entry.target.dataset.largura;
                                                          observer.unobserve(entry.target);
                                                              }
                                                                });
                                                                }, { threshold: 0.3 });

                                                                barras.forEach(b => observer.observe(b));
                                                                