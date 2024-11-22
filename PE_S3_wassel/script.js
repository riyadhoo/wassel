
let login=document.getElementById("login").addEventListener("click",function () {
  document.querySelector(".popup").style.display="flex";

})
let close=document.getElementById("form-close").addEventListener("click",function () {
  document.querySelector(".popup").style.display="none";

})
let signup=document.getElementById("signup").addEventListener("click",function () {
  document.querySelector(".popup2").style.display="flex";

})
let close2=document.getElementById("form-close2").addEventListener("click",function () {
  document.querySelector(".popup2").style.display="none";

})
let already=document.getElementById("already").addEventListener("click",function () {
  document.querySelector(".popup2").style.display="none";
  document.querySelector(".popup").style.display="flex";

})



let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

