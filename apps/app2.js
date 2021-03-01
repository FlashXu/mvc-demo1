import $ from "jquery";
import "./app2.css";

let $button = $(".app2 .buttons");
$button.on("click", "button", (e) => {
  $(".app2 .content .content" + ($(e.currentTarget).index() + 1))
    .addClass("active")
    .siblings()
    .removeClass("active");
});
