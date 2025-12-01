// ---------- CARROSSEL ----------
function iniciarCarrossel(carrosselSelector, prevSelector, nextSelector) {
  const carrossel = document.querySelector(carrosselSelector);
  const prev = document.querySelector(prevSelector);
  const next = document.querySelector(nextSelector);
  const slideWidth = 350;
  if (!carrossel || !prev || !next) return;

  function scrollToPosition(position) {
    carrossel.scrollTo({
      left: position,
      behavior: 'smooth'
    });
  }

  next.addEventListener('click', () => {
    const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
    const newScroll = carrossel.scrollLeft + slideWidth;

    if (carrossel.scrollLeft >= maxScroll - 5) {
      scrollToPosition(0);
    } else {
      scrollToPosition(Math.min(newScroll, maxScroll));
    }
  });

  prev.addEventListener('click', () => {
    const newScroll = carrossel.scrollLeft - slideWidth;

    if (carrossel.scrollLeft <= 0) {
      const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
      scrollToPosition(maxScroll);
    } else {
      scrollToPosition(Math.max(newScroll, 0));
    }
  });
}
iniciarCarrossel('.carrossel', '.prev', '.next');
iniciarCarrossel('#carrossel2', '#prev2', '#next2');
iniciarCarrossel('#carrossel3', '#prev3', '#next3');
iniciarCarrossel('#carrossel4', '#prev4', '#next4');
iniciarCarrossel('#carrossel5', '#prev5', '#next5');


// ------ PLANOS FILTRADOS (planos de fundo) -----
function btncell() {
  document.querySelectorAll('.pc').forEach(e => e.classList.add("esconder"));
  document.querySelectorAll('.cel').forEach(e => e.classList.remove("esconder"));
}

function btnpcs() {
  document.querySelectorAll('.cel').forEach(e => e.classList.add("esconder"));
  document.querySelectorAll('.pc').forEach(e => e.classList.remove("esconder"));
}

function btntodos() {
  document.querySelectorAll('.pc, .cel').forEach(e => e.classList.remove("esconder"));
}

