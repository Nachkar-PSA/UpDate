const links = document.querySelectorAll(".discover__link");
const cards = document.querySelectorAll(".discover__cards");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active");
    });

    const cardDc = link.dataset.dl;
    if (!cardDc) return;

    cards.forEach((card) => {
      card.classList.remove("active");
    });

    cards.forEach((card) => {
      const dc = card.dataset.dc;
      if (dc === cardDc) {
        card.classList.add("active");
      }
    });

    link.classList.add("active");
  });
});

const button = document.querySelector(".offer__button");

button.addEventListener("click", () => {
  window.location.href = "courses.html";
});
