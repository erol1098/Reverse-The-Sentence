"use strict";
const word = document.querySelector("#word");
const warn = document.querySelector(".main__entry-warning");
const inputSection = document.querySelector(".main__input");
const inputWord = document.querySelector(".main__input--input");
const answerSection = document.querySelector(".main__answer");
const reversed = document.querySelector(".main__answer--reversed");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let input = word.value.replace(/[.?!]/g, "").trim();
  console.log(input);
  input = input.split(" ");
  inputSection.classList.add("hidden");
  answerSection.classList.add("hidden");
  if (word.value && input.length > 1) {
    let output = [];
    for (let i = input.length - 1; i >= 0; i--) {
      output.push(input[i]);
    }
    inputSection.classList.remove("hidden");
    answerSection.classList.remove("hidden");
    inputWord.textContent = input.join(" ");
    reversed.textContent = output.join(" ");
    word.value = "";
  } else if (!word.value.trim()) {
    warn.textContent = "🛑Nothing entered!🛑";
    warn.classList.remove("hidden");
  } else if (input.length === 1) {
    warn.textContent = "🛑Please enter more than one word!🛑";
    warn.classList.remove("hidden");
  }
});

word.addEventListener("focus", (e) => {
  inputSection.classList.add("hidden");
  answerSection.classList.add("hidden");
  warn.classList.add("hidden");
  word.value = "";
});
