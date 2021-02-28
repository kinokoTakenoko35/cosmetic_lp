//Selectors
const nav = document.querySelector(".nav_Menu");

//burger

//レスポンシブのCSSを付与する
function hanberger() {
  var x = document.getElementById("navMenu");
  if (x.className === "navMenu") {
    x.className += "responsive";
  } else {
    x.className = "navMenu";
  }
}
