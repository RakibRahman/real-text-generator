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
  const getInfo = array.sort((a, b) => 0.5 - Math.random());
  const paraLength = Number(paraNumbers.value);
  const wordsLength = Number(wordNumbers.value);

  for (let i = 0; i < paraLength; i++) {
    generateParas(wordsLength);
  }
});

const generateParas = (num) => {
  const p = document.createElement("p");
  let temp = "";
  let randomWords = Math.floor(Math.random() * 10) + 2;

  for (let i = 0; i < randomWords; i++) {
    let words = array[Math.floor(Math.random() * array.length)];
    temp += ` ${words}`;
  }
  temp = temp.trim().toLowerCase();
  p.textContent = temp;
  p.style.margin = "10px 0px";
  output.append(p);
};
