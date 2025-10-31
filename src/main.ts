// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let count = 0;

// Button contents: id, label, action
const BUTTONS = [
  { id: "increment", label: "Click Me!", action: () => count++ },
  { id: "decrement", label: "Decrement", action: () => count-- },
  { id: "reset", label: "Reset", action: () => count = 0 },
];

//header and counter elements
const counter = "counter";
const header = "CMPM 121 Project";

function setup() {
  // HTML structure
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${counter}">0</span></p>
    ${
    BUTTONS.map((buttons) =>
      `<button id = "${buttons.id}">${buttons.label}"</button>`
    ).join("")
  }
  `;

  // Grabs counter element
  const updateCounter = document.getElementById(counter)!;

  // When button is clicekd, checks which button and does its action using the id and action.\
  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target) {
      return;
    }

    const button = BUTTONS.find((buttons) => buttons.id === target.id);
    if (!button) {
      return;
    }

    button.action();
    updateCounter.textContent = String(count);
    document.title = `Clicked ${count}`;
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
