const seeMoreBut = document.querySelector(".see-more-link");

seeMoreBut.addEventListener("click", function (e) {
  console.log(e.target);
  location.href = "profile.html";
});
