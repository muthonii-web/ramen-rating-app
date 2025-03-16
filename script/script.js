document.addEventListener("DOMContentLoaded", main);

const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Shoytsu",
    image: "./Images/Shoyu.jpeg",
    rating: 5,
    comment: "Delicious",
  },
  {
    id: 2,
    name: "Kojiro Ramen",
    restaurant: "Kojo",
    image: "./Images/Kojiro.jpeg",
    rating: 4,
    comment: "Very Flavorful",
  },
  {
    id: 3,
    name: "Naruto Ramen",
    restaurant: "Naruto",
    image: "./Images/Naruto.jpeg",
    rating: 7,
    comment: "Well Cooked!",
  },
  {
    id: 4,
    name: "Nirvana Ramen",
    restaurant: "Nirvanaa",
    image: "./Images/Nirvana.jpeg",
    rating: 3,
    comment: "Too Watery!",
  },
  {
    id: 5,
    name: "Gyukotsu Ramen",
    restaurant: "GyukotSaaa",
    image: "./Images/Gyukotsu.jpeg",
    rating: 5,
    comment: "Tasty!",
  },
];

function displayRamens() {
  const ramenMenuDiv = document.getElementById("ramen-menu");
  ramenMenuDiv.innerHTML = "";

  // Display first ramen by default
  if (ramens.length > 0) {
    const firstRamen = ramens[0];
    document.getElementById("ramen-image").src = firstRamen.image;
    document.getElementById("ramen-name").textContent = firstRamen.name;
    document.getElementById("ramen-restaurant").textContent =
      firstRamen.restaurant;
    document.getElementById(
      "ramen-rating"
    ).textContent = `Rating: ${firstRamen.rating}`;
    document.getElementById(
      "ramen-comment"
    ).textContent = `Comment: ${firstRamen.comment}`;
  }

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id;
    img.addEventListener("click", handleClick);
    ramenMenuDiv.appendChild(img);
  });
}
function handleClick(ramen) {
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById("ramen-rating").textContent = ramen.rating;
  document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
  const ramenForm = document.getElementById("new-ramen-form");

  ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      id: ramens.length + 1,
      name: document.getElementById("name").value,
      restaurant: document.getElementById("restaurant").value,
      image: document.getElementById("image").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value,
    };

    ramens.push(newRamen);

    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener("click", () => handleClick(newRamen));
    document.getElementById("ramen-menu").appendChild(img);

    handleClick(newRamen);

    ramenForm.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}
