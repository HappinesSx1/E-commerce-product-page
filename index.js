const optionsImage = document.querySelectorAll(".option-image");
const bigImage = document.querySelector(".big-image-big");

optionsImage.forEach((image, index) => {
  //   let imagesChoose = [
  //     "./images/image-product-1.jpg",
  //     "./images/image-product-2.jpg",
  //     "./images/image-product-3.jpg",
  //     "./images/image-product-4.jpg",
  //   ];
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionsImage.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    let imageSrc = e.target.src;

    bigImage.src = imageSrc;
  });
});
