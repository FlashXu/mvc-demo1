import $ from "jquery";
import "./app1.css";

const calculator = {
  element: undefined,
  currentNum: undefined,
  init: () => {
    let n = parseInt(localStorage.getItem("number")) || 100;
    calculator.element = $(".app1 > span").text(n);
    calculator.currentNum = n;
    calculator.bindEvents();
  },
  events: {
    event0: "add",
    event1: "reduce",
    event2: "multiply",
    event3: "divide",
  },
  bindEvents: () => {
    $(".app1 .buttons").on("click", "button", (e) => {
      calculator.currentNum = calculator[
        calculator.events["event" + $(e.currentTarget).index()]
      ]();
      calculator.element.text(calculator.currentNum);
      localStorage.setItem("number", calculator.currentNum);
    });
  },
  add: () => calculator.currentNum + 1,
  reduce: () => calculator.currentNum - 1,
  multiply: () => calculator.currentNum * 2,
  divide: () => calculator.currentNum / 2,
};
calculator.init();
