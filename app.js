//! get element reference
const wordNumbers = document.getElementById("wordsLength");
const paraNumbers = document.getElementById("parasLength");
const btn = document.getElementById("generateBTN");
const output = document.getElementById("output");

//!get texts
const regex = /([^A-Za-z\s])/g;
const text = textBox.replace(regex, "").toLowerCase();
const array = text.split(" ");
//console.log(array);

btn.addEventListener("click", () => {
  arr.sort((a, b) => 0.5 - Math.random());
  console.log(arr);
});

const generateParas = () => {};
