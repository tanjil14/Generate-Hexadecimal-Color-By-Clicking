/*
* Project Requirements:

* -Change the background color by generating random hex color by clicking a button
* Also display the hex color code
* Add copy button
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
  const changeBtn = document.getElementById("change-btn");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const hexBg = generateHEXColor();
    root.style.backgroundColor = hexBg;
    output.value = hexBg;
  });
  copyBtn.addEventListener("click", function () {
    alert("Color code is copied")
    navigator.clipboard.writeText(output.value);
  });
}

function generateHEXColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
