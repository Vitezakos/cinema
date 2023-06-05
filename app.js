const filterBtn = document.querySelector(".filter-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

filterBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

const card = [
  {
    id: 1,
    img: "./punisher.jpg",
    score: 8.5,
    title: "The Punisher",
    desc: "TV Series 2017-2019 53m",
  },
  {
    id: 1,
    img: "./punisher.jpg",
    score: 8.5,
    title: "The Punisher",
    desc: "TV Series 2017-2019 53m",
  },
];

const movieCards = document.querySelector(".movie-cards");

window.addEventListener("DOMContentLoaded", function () {
  displayCardItems(card);
});

function displayCardItems(cardItems) {
  let displayCards = cardItems.map(function (item) {
    return `<div class="card">
    <img src="${item.img}" alt="movie picture" class="picture" />
    <div class="card-info">
      <header class="card-header">
        <h3>${item.score}</h3>
        <h3>${item.title}</h3>
      </header>
      <p>${item.desc}</p>
      <button class="btn watchlist">
        <i class="fas fa-plus"></i>
        Watchlist
      </button>
      <div class="details">
        <p class="desc">
          After his revenge on those who murdered his family, aimless
          Marine veteran Frank Castle finds a new meaning in life as a
          vigilante known as "The Punisher".
        </p>
        <button class="btn watchlist">
          <i class="fas fa-plus"></i>
          Watchlist
        </button>
      </div>
    </div>
  </div>`;
  });
  displayCards = displayCards.join("");
  movieCards.innerHTML = displayCards;
}
