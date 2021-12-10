export default function carousel() {
  let carouselImgContainer = document.getElementById(
    "carousel-image-container"
  );
  let carouselBtn = document.querySelectorAll(".carousel-btn");
  let firstCarouselBtn = document.getElementById("first-img-btn");
  let secondCarouselBtn = document.getElementById("second-img-btn");
  let thirdCarouselBtn = document.getElementById("third-img-btn");

  carouselBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.id == "first-img-btn") {
        firstCarouselBtn.classList.add("active-carousel");
        secondCarouselBtn.classList.remove("active-carousel");
        thirdCarouselBtn.classList.remove("active-carousel");
        carouselImgContainer.innerHTML =
          "<img src='../images/carousel-img-1.jpeg'>";
      } else if (e.target.id == "second-img-btn") {
        secondCarouselBtn.classList.add("active-carousel");
        firstCarouselBtn.classList.remove("active-carousel");
        thirdCarouselBtn.classList.remove("active-carousel");
        carouselImgContainer.innerHTML =
          "<img src='../images/carousel-img-2.jpeg'>";
      } else if (e.target.id == "third-img-btn") {
        thirdCarouselBtn.classList.add("active-carousel");
        firstCarouselBtn.classList.remove("active-carousel");
        secondCarouselBtn.classList.remove("active-carousel");
        carouselImgContainer.innerHTML =
          "<img src='../images/carousel-img-3.jpeg'>";
      }
    });
  });
}
