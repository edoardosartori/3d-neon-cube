const themes = [
  {
    name: "Green",
    cube: "#00ec00",
    glow: "#00ff00",
  },
  {
    name: "Blue",
    cube: "#008cff",
    glow: "#00aaff",
  },
  {
    name: "Purple",
    cube: "#b000ff",
    glow: "#d000ff",
  },
  {
    name: "Orange",
    cube: "#ff7a00",
    glow: "#ff9500",
  },
  {
    name: "Red",
    cube: "#ff1a1a",
    glow: "#ff0000",
  },
  {
    name: "Pink",
    cube: "#ff1493",
    glow: "#ff00aa",
  },
  {
    name: "Cyan",
    cube: "#00e5ff",
    glow: "#00ffff",
  },
  {
    name: "Yellow",
    cube: "#ffd000",
    glow: "#ffff00",
  },
  {
    name: "Lime",
    cube: "#aaff00",
    glow: "#ccff00",
  },
  {
    name: "Magenta",
    cube: "#e000ff",
    glow: "#ff00ff",
  },
  {
    name: "Teal",
    cube: "#00c9a7",
    glow: "#00ffd0",
  },
  {
    name: "Ice",
    cube: "#7dd3fc",
    glow: "#b8f3ff",
  },
  {
    name: "Gold",
    cube: "#d4a017",
    glow: "#ffd700",
  },
  {
    name: "Coral",
    cube: "#ff5c5c",
    glow: "#ff7f50",
  },
];

const root = document.documentElement;
const themeButton = document.querySelector("#themeButton");

let currentTheme = 0;

function applyTheme() {
  const theme = themes[currentTheme];

  root.style.setProperty("--cube-color", theme.cube);
  root.style.setProperty("--glow-color", theme.glow);

  themeButton.textContent = `Color: ${theme.name}`;
  themeButton.setAttribute(
    "aria-label",
    `Color: ${theme.name}. click to switch`,
  );
}

themeButton.addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  applyTheme();
});

applyTheme();
