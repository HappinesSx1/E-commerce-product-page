const optionsImage = document.querySelectorAll(".option-image");
const bigImage = document.querySelector(".principal-image");
const modal = document.getElementById("simpleModal");
const closeBtn = document.querySelector(".closeBtn");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
const modalImage = document.getElementById("modal-image");
const panier = document.querySelector(".panier");
const panierModal = document.querySelector(".panier-modal");
const modalPan = document.getElementById("modalpan");
let amountValue = 0;
let amountValue2 = 3;
let imagesChoose = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

optionsImage.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.classList.add("active");

    optionsImage.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    bigImage.src = imagesChoose[index];
  });
});

// Listen ouverture
bigImage.addEventListener("click", openModal);
// Listen fermeture
closeBtn.addEventListener("click", closeModal);
//Listen background fermeture
window.addEventListener("click", clickOutside);

rightBtn.addEventListener("click", rightModal);

leftBtn.addEventListener("click", leftModal);

function openModal() {
  modal.style.display = "flex";
  modalImage.src = bigImage.src;
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    console.log(e.target);
    console.log(modal);
  }
}

function rightModal() {
  amountValue++;
  if (amountValue < 4) {
    modalImage.src = imagesChoose[amountValue];
  } else {
    modalImage.src = imagesChoose[0];
    amountValue = 0;
  }
}

function leftModal() {
  amountValue2--;
  if (amountValue2 > -1) {
    modalImage.src = imagesChoose[amountValue2];
  } else {
    modalImage.src = imagesChoose[3];
    amountValue2 = 3;
  }
}

panier.addEventListener("click", openPanierModal);

window.addEventListener("click", clickOutsideModal);

function openPanierModal() {
  modalPan.style.display = "block";
}

function clickOutsideModal(e) {
  if (e.target == modalPan) {
    modalPan.style.display = "none";
  }
}
