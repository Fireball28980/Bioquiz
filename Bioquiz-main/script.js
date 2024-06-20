// Funktion zum Mischen eines Arrays
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentFrageIndex = -1;

function renderFrage() {
  currentFrageIndex = Math.floor(Math.random() * Fragen.length);
  const Frage = Fragen[currentFrageIndex];

  const FragenDiv = document.createElement("div");
  FragenDiv.classList.add("Fragen");

  const FragenTitel = document.createElement("div");
  FragenTitel.classList.add("FragenTitel");
  FragenTitel.appendChild(document.createTextNode(Frage.Frage));

  const AntwortenDiv = document.createElement("div");
  AntwortenDiv.classList.add("Antworten");

  // Mische die Antworten
  shuffle(Frage.Antwort);

  Frage.Antwort.forEach((Antwort) => {
    const AntwortButton = document.createElement("button");
    AntwortButton.textContent = Antwort.Text;
    AntwortButton.classList.add("Antwort");
    AntwortButton.setAttribute("data-correct", Antwort.correct);
    AntwortButton.onclick = function () {
      validate(this);
    };
    AntwortenDiv.appendChild(AntwortButton);
  });

  document.getElementById("displayQuiz").innerHTML = "";

  FragenDiv.appendChild(FragenTitel);
  FragenDiv.appendChild(AntwortenDiv);
  document.getElementById("displayQuiz").appendChild(FragenDiv);
}

function validate(clickedButton) {
  const isCorrect = clickedButton.getAttribute("data-correct") === "true";

  if (isCorrect) {
    clickedButton.classList.add("correct");
    // Nach einer kurzen Verzögerung zur nächsten Frage springen
    setTimeout(renderFrage, 1000); // 1 Sekunde Verzögerung
  } else {
    clickedButton.classList.add("incorrect");
  }
}

function showSolution() {
  const AntwortButtons = document.querySelectorAll(".Antwort");
  AntwortButtons.forEach((button) => {
    if (button.getAttribute("data-correct") === "true") {
      button.classList.add("correct");
    }
  });
}

// Initialer Aufruf der renderFrage Funktion
renderFrage();
