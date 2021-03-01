import $ from "jquery";
import "./app3.css";

$(".app3 .square").on("click", (e) => {
  $(e.currentTarget).toggleClass("active");
});
