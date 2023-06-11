let cardList = [
  {
    id: 1,
    img: "./punisher.jpg",
    score: 8.5,
    title: "The Punisher",
    desc: "TV Series 2017-2019",
    category: "series",
    top: false,
    isFavourite: false,
  },
  {
    id: 2,
    img: "./theboys.jpg",
    score: 8.7,
    title: "The Boys",
    desc: "TV Series 2019-Ongoing",
    category: "series",
    top: true,
    isFavourite: false,
  },
  {
    id: 3,
    img: "./thegentlemen.jpg",
    score: 7.8,
    title: "The Gentlemen",
    desc: "Movie 2019",
    category: "movie",
    top: true,
    isFavourite: false,
  },
  {
    id: 4,
    img: "./clerks.jpg",
    score: 7.7,
    title: "Clerks",
    desc: "Movie 1994",
    category: "movie",
    top: true,
    isFavourite: false,
  },
  {
    id: 5,
    img: "./clonewars.jpg",
    score: 8.4,
    title: "The Clone Wars",
    desc: "Animated TV Series 2008-2020",
    category: "animation",
    top: false,
    isFavourite: false,
  },
  {
    id: 6,
    img: "./superbad.jpg",
    score: 7.7,
    title: "Superbad",
    desc: "Movie 2007",
    category: "movie",
    top: false,
    isFavourite: false,
  },
  {
    id: 7,
    img: "./archer.jpg",
    score: 8.6,
    title: "Archer",
    desc: "Animated TV Series 2009-Ongoing",
    category: "animation",
    top: true,
    isFavourite: false,
  },
  {
    id: 8,
    img: "./tpb.jpg",
    score: 8.6,
    title: "Trailer Park Boys",
    desc: "TV Series 2001-2018",
    category: "series",
    top: true,
    isFavourite: false,
  },
  {
    id: 9,
    img: "./bojack.jpg",
    score: 8.8,
    title: "BoJack Horseman",
    desc: "Animated TV Series 2014-2020",
    category: "animation",
    top: false,
    isFavourite: false,
  },
];

const movieCards = document.querySelector(".movie-cards");

window.addEventListener("DOMContentLoaded", function () {
  displayCardItems(cardList);
  filterCardButtons(cardList);
  topPicks(cardList);
  toFavourite();
  itemToLocalStorage(cardList);
  hiddenToFavourite();
});

function itemToLocalStorage() {
  localStorage.setItem("items", JSON.stringify(cardList));
}

function hiddenToFavourite() {
  let btns = document.querySelectorAll(".hidden-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", hiddenFav);
  });
}

function hiddenFav() {
  const cardId = parseInt(this.parentElement.parentElement.parentElement.id);
  const cardElement = this.parentElement.parentElement;
  let myNewStoreAsString = localStorage.getItem("items");
  let newArray = JSON.parse(myNewStoreAsString);
  newArray.forEach((card) => {
    if (card.id === cardId) {
      if (card.isFavourite === false) {
        card.isFavourite = true;
        cardElement.querySelector(
          ".watchlist"
        ).innerHTML = `<i class="fas fa-minus"></i>
      Unfavour`;
        cardElement.querySelector(
          ".hidden-btn"
        ).innerHTML = `<i class="fas fa-minus"></i>
      Unfavour`;
      } else {
        card.isFavourite = false;
        cardElement.querySelector(
          ".hidden-btn"
        ).innerHTML = `<i class="fas fa-plus"></i>
        Watchlist`;
        cardElement.querySelector(
          ".watchlist"
        ).innerHTML = `<i class="fas fa-plus"></i>
        Watchlist`;
      }
    }
  });
  localStorage.setItem("items", JSON.stringify(newArray));
}

function toFavourite() {
  let btns = document.querySelectorAll(".watchlist");
  btns.forEach((btn) => {
    btn.addEventListener("click", fav);
  });
}

function fav() {
  const cardId = parseInt(this.parentElement.parentElement.id);
  const cardElement = this.parentElement.parentElement;
  let myNewStoreAsString = localStorage.getItem("items");
  let newArray = JSON.parse(myNewStoreAsString);
  newArray.forEach((card) => {
    if (card.id === cardId) {
      if (card.isFavourite === false) {
        card.isFavourite = true;
        cardElement.querySelector(
          ".watchlist"
        ).innerHTML = `<i class="fas fa-minus"></i>
      Unfavour`;
      } else {
        card.isFavourite = false;
        cardElement.querySelector(
          ".watchlist"
        ).innerHTML = `<i class="fas fa-plus"></i>
        Watchlist`;
      }
    }
  });
  localStorage.setItem("items", JSON.stringify(newArray));
}

function displayCardItems(cardItems) {
  let displayCards = cardItems.map(function (item) {
    return `<div class="card" id=${item.id}>
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
        <button class="hidden-btn">
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
const cardContainer = document.querySelector(".movie-cards");
const searchfield = document.querySelector(".top-search");

filterBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
  filterBtn.classList.add("hide-btn");
  cardContainer.classList.add("sidebar-open");
  searchfield.classList.add("sidebar-open");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  filterBtn.classList.remove("hide-btn");
  cardContainer.classList.remove("sidebar-open");
  searchfield.classList.remove("sidebar-open");
});

// Sidebar filter buttons

function filterCardButtons() {
  const sideBtns = document.querySelectorAll(".side-btn");
  sideBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const category = event.currentTarget.dataset.id;
      let myNewStoreAsString = localStorage.getItem("items");
      let newArray = JSON.parse(myNewStoreAsString);
      const cardCategory = newArray.filter(function (cardItem) {
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
      let myNewStoreAsString = localStorage.getItem("items");
      let newArray = JSON.parse(myNewStoreAsString);
      const cardTop = newArray.filter(function (cardItem) {
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
  let myNewStoreAsString = localStorage.getItem("items");
  let newArray = JSON.parse(myNewStoreAsString);
  const cardTitle = newArray.filter(function (cardItem) {
    if (cardItem.title.toLowerCase().includes(input)) {
      return cardItem;
    }
  });
  displayCardItems(cardTitle);
}

function watchList() {
  let myNewStoreAsString = localStorage.getItem("items");
  let newArray = JSON.parse(myNewStoreAsString);
  newArray.filter(function (item) {
    if (item.isFavourite === false) {
      let cardElement = document.getElementById(item.id);
      cardElement.classList.add("hide-card");
    }
  });
}
