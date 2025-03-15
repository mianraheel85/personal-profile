// About description
const aboutDescription = document.querySelector("#aboutDescription");

// Button
const aboutSeeMore = document.querySelector("#aboutSeeMore");

// Slice the about description
const sliceAboutDescription =
  aboutDescription.textContent.trim().slice(0, 20) + "...";

aboutDescription.textContent = sliceAboutDescription;

aboutSeeMore.addEventListener("click", () => {});
