"use strict";
const button = document.querySelector(".enter");
const input = document.querySelector(".input");
const ul = document.getElementsByTagName("ul")[0];
const del = document.querySelector(".delete-button");

///////////////////////////////////////////////

const createListEl = function () {
  const li = document.createElement("li");
  const del = document.createElement("button");
  del.className = "delete-button";
  del.addEventListener("click", function () {
    del.remove();
    li.remove();
  });
  li.addEventListener("click", () => (li.className = "done"));
  del.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(del);
  ul.appendChild(li);
  input.value = "";
};
const addElClick = function () {
  if (input.value.length > 0) {
    createListEl();
  }
};

const addElEnter = function (e) {
  if (input.value.length > 0 && e.keyCode === 13) {
    createListEl();
  }
};

////////////////////////////////////////

button.addEventListener("click", addElClick);
input.addEventListener("keypress", addElEnter);

////////Background Generator ///////
const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const degree = document.getElementById("degree");

const bgGenerator = function () {
  document.body.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value})`;
};
bgGenerator();

degree.addEventListener("input", bgGenerator);
color1.addEventListener("input", bgGenerator);
color2.addEventListener("input", bgGenerator);
