const ratings = document.querySelectorAll(".rating");
const window1 = document.querySelector(".content-container1");
const window2 = document.querySelector(".content-container2");
const cardRating = document.querySelector(".cardRate");
let value = 0;


function submit() {
    window1.classList.add("skip");
    window2.classList.add("active");
    cardRating.textContent = "     " + value + "    ";
}

const ratingClick = (e) => {
    ratings.forEach((button) => {
      button.classList.remove('rating-click');
    });
    if (e.target.classList.contains('rating')) {
      e.target.classList.add('rating-click');
    } else {
      e.target.parentElement.classList.add('rating-click');
    }
    value = e.target.textContent;
    console.log(value);
  };

ratings.forEach((button) => {
    button.addEventListener("click", ratingClick);
});