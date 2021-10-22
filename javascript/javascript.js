function openMenu() {
  document.querySelector("nav").style.visibility = "visible";
  document.querySelector("#navigation__background").style.transform =
    "scale(90)";
  document.querySelector("#navigation__background").style.zIndex = "1";
  document.querySelector("#navigation__background").style.visibility =
    "visible";
}
function closeMenu() {
  document.querySelector("nav").style.visibility = "hidden";
  document.querySelector("#navigation__background").style.transform =
    "scale(0)";
  document.querySelector("#navigation__background").style.zIndex = "0";
  document.querySelector("#navigation__background").style.visibility = "hidden";
}
