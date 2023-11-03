const randomText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Nullam sodales gravida eros non vehicula",
  "In ut risus eu orci facilisis tempus",
];

function updateCarousel() {
  const carousel = document.getElementById("carousel");
  const randomChange = Math.floor(Math.random() * randomText.length);
  carousel.innerText = randomText[randomChange];
}

setInterval(updateCarousel, 2000);
