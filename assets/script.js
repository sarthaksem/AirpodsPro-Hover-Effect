const productContent = document.querySelector(".product-content");
const productContentTmg = document.querySelector(".product-content img");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const threeDot = document.querySelector(".threeDot");
const productDetails = document.querySelector(".product-details");

productContent.addEventListener("mouseover", () => {
  productContentTmg.classList.add("active");
  text1.classList.add("active");
  text2.classList.add("active");
  button1.classList.add("active");
  button2.classList.add("active");
  threeDot.classList.add("active");
});

productContent.addEventListener("mouseout", () => {
  productContentTmg.classList.remove("active");
  text1.classList.remove("active");
  text2.classList.remove("active");
  button1.classList.remove("active");
  button2.classList.remove("active");
  threeDot.classList.remove("active");
});

threeDot.addEventListener("mouseover", () => {
  productDetails.classList.add("active");
});
threeDot.addEventListener("mouseout", () => {
  productDetails.classList.remove("active");
});
