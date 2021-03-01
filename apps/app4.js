import $ from "jquery";
import "./app4.css";

$(".app4 .circle")
  .on("mouseenter", (e) => {
    $(e.currentTarget).addClass("active");
  })
  .on("mouseleave", (e) => {
    $(e.currentTarget).removeClass("active");
  });
