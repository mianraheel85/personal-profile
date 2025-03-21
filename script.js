// About description
const aboutDescription = document.querySelector("#aboutDescription");

const fullDescription = aboutDescription.textContent;

// Button
const aboutSeeMore = document.querySelector("#aboutSeeMore");

// Slice the about description
const slicedAboutDescription =
  aboutDescription.textContent.trim().slice(0, 40) + "...";

aboutDescription.textContent = slicedAboutDescription;

aboutSeeMore.addEventListener("click", () => {
  if (aboutSeeMore.textContent === "See more") {
    aboutDescription.textContent = fullDescription;
    aboutSeeMore.textContent = "See Less";
  } else {
    aboutDescription.textContent = slicedAboutDescription;
    aboutSeeMore.textContent = "See more";
  }
});
