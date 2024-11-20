var card = document.querySelectorAll(".card");
var textDisplay = document.querySelectorAll(".desText");
card.forEach((item) => {
  var img = item.querySelector("img");
  var heading = item.querySelector(".desBox");
  img.addEventListener("mouseenter", () => {
    heading.style.opacity = "1";
    img.style.transform = "scale(1.5)";
  });
  img.addEventListener("mouseleave", () => {
    heading.style.opacity = "0";
    img.style.transform = "none";
  });
});

var addReviewBtn = document.getElementById("addReviewBtn");
var addReviewBox = document.querySelector(".addReviewBoxContainer");
addReviewBtn.addEventListener("click", () => {
  addReviewBox.style.display = "block";
});

let reviewList = [
  {
    name: "Harry Walkson",
    product: "Iphone 13",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur ducimus hic sint illo cumque quod odioomnis, accusantium laudantium.",
    rating: 7,
  },
  {
    name: "James",
    product: "Macbook m2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur ducimus hic sint illo cumque quod odioomnis, accusantium laudantium.",
    rating: 8,
  },
  {
    name: "Kate Mary",
    product: "Ipad",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur ducimus hic sint illo cumque quod odioomnis, accusantium laudantium.",
    rating: 10,
  },
];

const reviewContainer = document.querySelector(".reviewBox");
function renderDetails() {
  reviewList.map((item) => {
    const card = document.createElement("section");
    card.className = "review flex-box appearAnimation";
    card.innerHTML = `<span><span class="bold">Name:</span> ${item.name}</span><span><span class="bold">Product:</span> ${item.product}</span><p><span class="bold">Review:</span> ${item.review}</p><span><span class="bold">Rating:</span> ${item.rating}/10</span>`;
    reviewContainer.appendChild(card);
  });
}

var submitReviewForm = document.querySelector(".addReviewBox");
submitReviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get("name");
  const product = data.get("product");
  const review = document.querySelector("textarea").value;
  const rating = data.get("rating");
  reviewContainer.innerHTML = "";

  reviewList.push({ name, product, review, rating });
  renderDetails();
  addReviewBox.style.display = "none";
});

renderDetails();

const mainContentRightContainer = document.querySelector(
  ".mainContentRightContainer"
);
const mainContentLeftContainer = document.querySelector(
  ".mainContentLeftContainer"
);
const navbar = document.querySelector(".navbar");
window.onload = () => {
  navbar.style.opacity = "1";
  mainContentRightContainer.style.left = "0px";
  mainContentLeftContainer.style.right = "0px";
  mainContentRightContainer.style.opacity = "1";
  mainContentLeftContainer.style.opacity = "1";
};
