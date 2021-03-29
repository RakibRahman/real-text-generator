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
  array.sort((a, b) => 0.5 - Math.random());
  const paraLength = Number(paraNumbers.value);
  const wordsLength = Number(wordNumbers.value);

  for (let i = 0; i < paraLength; i++) {
    generateParas(wordsLength);
  }
});

const generateParas = (num) => {
  const p = document.createElement("p");

  p.textContent = generateSentence("", num);
  p.style.margin = "10px 0px";
  output.append(p);
};

const generateSentence = (temp, num) => {
  let totalWords = num > 10 ? 10 : num;
  let randomWords = Math.floor(Math.random() * totalWords) + 2;
  let holder = "";
  for (let i = 0; i < randomWords; i++) {
    if (num > 0) {
      let words = array[Math.floor(Math.random() * array.length)];
      holder += ` ${words}`;
    }
    num--;
  }
  if (holder.length > 0) {
    temp += capWords(holder.trim().toLowerCase());
  }

  if (num < 0) {
    return temp;
  } else {
    return generateSentence(temp, num);
  }
};

const capWords = (str) => {
  let firstLetter = str.charAt(0).toUpperCase();
  let sentence = firstLetter + str.slice(1) + ". ";
  return sentence;
  // console.log(sentence, str);
};
