const div1 = document.getElementById("id_div1");
const span1 = document.getElementById("span_div1");
const Theheight1 = window.getComputedStyle(div1).height;
div1.style.height = "40px";

const div2 = document.getElementById("id_div2");
const span2 = document.getElementById("span_div2");
const Theheight2 = window.getComputedStyle(div2).height;
div2.style.height = "40px";

const div3 = document.getElementById("id_div3");
const span3 = document.getElementById("span_div3");
const Theheight3 = window.getComputedStyle(div3).height;
div3.style.height = "40px";

function openListLinks(div, sspan, Theheight) {
  const spanOfH = window.getComputedStyle(sspan).display;
  const TheDiv = window.getComputedStyle(div).height;

  if (spanOfH == "block") {
    if (TheDiv == "40px") {
      div.style.height = Theheight;
    } else {
      div.style.height = "40px";
    }
  }
}
