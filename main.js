/*
* Project Requirements:

* -Change the background color by generating random hex color by clicking a button
* Also display the hex color code
*/

// Steps

//Step 1 - Create onload handler

//Step 2 - random color generator function

//Step 3 - collect all necessary references

//Step 4 - handle the click

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    const rgbBg = generateRGBColor();
    root.style.backgroundColor = rgbBg;
    output.value = rgbBg;
  });
}

function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
