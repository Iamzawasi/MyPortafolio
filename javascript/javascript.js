function openMenu() {
  document.querySelector("nav").style.visibility = "visible";
  document.querySelector("#navigation__background").style.transform =
    "scale(90)";
  document.querySelector("#navigation__background").style.zIndex = "150";
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
//$message = setTimeout(mymessage, 5000);
sty = document.getElementById("PopupNew").style;
sty.display = "none";
// function mymessage() {
//   sty = document.getElementById("PopupNew").style;
//   sty.display = "none";
// }

// IntervalForTimeOutVar = setInterval(CheckTimeOutVar, 31000);
// function CheckTimeOutVar() {
//   TimeOutVar ? (TimeOutVar = false) : 0; ///Zia: if TimeOutVar is true then change its value to false
//   console.log(TimeOutVar);
// }
// addEventListener("click", updateTimeOut); /// Zia: if Someone Click on any part of the Page it will Update TimeOutVar from false to True
// function updateTimeOut() {
//   TimeOutVar = true;
//   console.log(TimeOutVar);
//   clearInterval(IntervalForTimeOutVar);
//   IntervalForTimeOutVar = setInterval(CheckTimeOutVar, 31000);
// }
// var x = parseInt(parsdocument.getElementById("nothing"));
// if (typeof (x != "undefined")) {
//   console.log("its working" + document.getElementById("nothing").length);
// }
function bgcolChange() {
  inpRight = document.getElementById("color-right").value;
  inpLeft = document.getElementById("color-left").value;
  if (inpLeft != "" && inpLeft != "") {
    ToRightDecimal =
      parseInt(inpRight.slice(1, 3), 16) +
      ", " +
      parseInt(inpRight.slice(3, 5), 16) +
      ", " +
      parseInt(inpRight.slice(5, 7), 16) +
      ", ";
    ToleftDecimal =
      parseInt(inpLeft.slice(1, 3), 16) +
      ", " +
      parseInt(inpLeft.slice(3, 5), 16) +
      ", " +
      parseInt(inpLeft.slice(5, 7), 16) +
      ", ";
    console.log(ToleftDecimal);

    document.getElementById(
      "section-left"
    ).style.backgroundImage = `linear-gradient( to right bottom, rgba(${ToRightDecimal} 0.993), 
      rgba(${ToleftDecimal} 0.8)`;
  }
}
