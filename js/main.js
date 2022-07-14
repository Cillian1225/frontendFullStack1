const backToTop = document.getElementById("backtotop");

function checkScroll() {
  //스크롤 체크하기
  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function moveBackToTop() {
  //부드럽게 페이지 최상단으로 이동
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);
