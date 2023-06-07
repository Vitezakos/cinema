const cardList = [
  {
    id: 1,
    img: "./punisher.jpg",
    score: 8.5,
    title: "The Punisher",
    desc: "TV Series 2017-2019",
    category: "series",
    top: false,
  },
  {
    id: 2,
    img: "./theboys.jpg",
    score: 8.7,
    title: "The Boys",
    desc: "TV Series 2019-Ongoing",
    category: "series",
    top: true,
  },
  {
    id: 3,
    img: "./thegentlemen.jpg",
    score: 7.8,
    title: "The Gentlemen",
    desc: "Movie 2019",
    category: "movie",
    top: true,
  },
  {
    id: 4,
    img: "./clerks.jpg",
    score: 7.7,
    title: "Clerks",
    desc: "Movie 1994",
    category: "movie",
    top: true,
  },
  {
    id: 5,
    img: "./clonewars.jpg",
    score: 8.4,
    title: "The Clone Wars",
    desc: "Animated TV Series 2008-2020",
    category: "animation",
    top: false,
  },
  {
    id: 6,
    img: "./superbad.jpg",
    score: 7.7,
    title: "Superbad",
    desc: "Movie 2007",
    category: "movie",
    top: false,
  },
  {
    id: 7,
    img: "./archer.jpg",
    score: 8.6,
    title: "Archer",
    desc: "Animated TV Series 2009-Ongoing",
    category: "animation",
    top: true,
  },
  {
    id: 8,
    img: "./tpb.jpg",
    score: 8.6,
    title: "Trailer Park Boys",
    desc: "TV Series 2001-2018",
    category: "series",
    top: true,
  },
  {
    id: 9,
    img: "./bojack.jpg",
    score: 8.8,
    title: "BoJack Horseman",
    desc: "Animated TV Series 2014-2020",
    category: "animation",
    top: false,
  },
];

const movieCards = document.querySelector(".movie-cards");

window.addEventListener("DOMContentLoaded", function () {
  displayCardItems(cardList);
  filterCardButtons(cardList);
  topPicks(cardList);
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
        <button class="watchlist">
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

// Opens filter sidebar

const filterBtn = document.querySelector(".filter-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

filterBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Sidebar filter buttons

function filterCardButtons() {
  const sideBtns = document.querySelectorAll(".side-btn");
  sideBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const category = event.currentTarget.dataset.id;
      const cardCategory = cardList.filter(function (cardItem) {
        if (cardItem.category === category) {
          return cardItem;
        }
      });
      displayCardItems(cardCategory);
    });
  });
}

function topPicks() {
  const sideBtns = document.querySelectorAll(".top-picks");
  sideBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const cardTop = cardList.filter(function (cardItem) {
        if (cardItem.top === true) {
          return cardItem;
        }
      });
      displayCardItems(cardTop);
    });
  });
}

function searchBar() {
  let input = document.getElementsByClassName("input-field")[0].value;
  console.log(input);
  const cardTitle = cardList.filter(function (cardItem) {
    if (cardItem.title.toLowerCase().includes(input)) {
      return cardItem;
    }
  });
  displayCardItems(cardTitle);
}

// const watchBtn = querySelector(".watchlist");
// watchBtn.addEventListener("click", function () {
//   card.classList.add("yeppers");
// });
