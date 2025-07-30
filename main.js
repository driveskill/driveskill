const mainText = "Baljyot Singh";
const subText = "Web Designer & Thumbnail Artist";
let i = 0, j = 0;
const speed = 100;

function typeMain() {
  if (i < mainText.length) {
    document.getElementById("typed-text").innerHTML += mainText.charAt(i);
    i++;
    setTimeout(typeMain, speed);
  } else {
    setTimeout(typeSub, 500);
  }
}

function typeSub() {
  if (j < subText.length) {
    document.getElementById("typed-subtext").innerHTML += subText.charAt(j);
    j++;
    setTimeout(typeSub, speed);
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

window.onload = typeMain;

// Background Color Picker
const bgColorPicker = document.getElementById("bgColorPicker");
if (bgColorPicker) {
  bgColorPicker.addEventListener("input", (e) => {
    document.body.style.background = e.target.value;
    localStorage.setItem("customBgColor", e.target.value); // save to localStorage
  });

