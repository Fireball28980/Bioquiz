const Fragen = [
  {
    id: 1,
    Frage: "Wann entstand der moderne Mensch?",
    Antwort: [
      { id: "a", Text: "7 Millionen Jahren", correct: false },
      { id: "b", Text: "3 Millionen Jahren", correct: false },
      { id: "c", Text: "200.000 Jahren", correct: true },
      { id: "d", Text: "Kreidezeit", correct: false },
    ],
  },
  {
    id: 2,
    Frage: "Welche Anpassung des Menschen gehört nicht zu den wichtigsten...?",
    Antwort: [
      { id: "a", Text: "Radfahren", correct: true },
      { id: "b", Text: "Aufrechte Gang", correct: false },
      { id: "c", Text: "Sprache und Kultur", correct: false },
      { id: "d", Text: "Verkleinerung des Gesichtsschädels", correct: false },
    ],
  },
  {
    id: 3,
    Frage: "Vor wieviel Jahren began die Entwicklung des Menschen?",
    Antwort: [
      { id: "a", Text: "vor 7 Millionen Jahren", correct: true },
      { id: "b", Text: "vor 380.000 Jahren", correct: false },
      { id: "c", Text: "Kreiezeit", correct: false },
      { id: "d", Text: "Quarterzeit", correct: false },
    ],
  },
  {
    id: 4,
    Frage: "Warum ist der Aufrechte Gang so wichtig ...?",
    Antwort: [
      { id: "a", Text: "um Auto fahren zu können", correct: false },
      { id: "b", Text: "Um Handzeichen zu geben", correct: false },
      { id: "c", Text: "Feide und Nahung besser zu erkennen", correct: true },
      {
        id: "d",
        Text: "Um sich die Hände nicht schnutzig zu machen",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    Frage: "Wann war die Kambrium Zeit?",
    Antwort: [
      { id: "a", Text: "300 Millionen Jahre", correct: false },
      { id: "b", Text: "450 Millionen Jahre", correct: false },
      { id: "c", Text: "600 Millionen Jahre", correct: true },
      { id: "d", Text: "65 Millionen", correct: false },
    ],
  },
  {
    id: 6,
    Frage: "Wann war die Ordovizium Zeit?",
    Antwort: [
      { id: "a", Text: "300 Millionen Jahre", correct: false },
      { id: "b", Text: "450 Millionen Jahre", correct: false },
      { id: "c", Text: "500 Millionen Jahre", correct: true },
      { id: "d", Text: "280 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 7,
    Frage: "Wann war die Silur Zeit?",
    Antwort: [
      { id: "a", Text: "250 Millionen Jahre", correct: false },
      { id: "b", Text: "450 Millionen Jahre", correct: false },
      { id: "c", Text: "440 Millionen Jahre", correct: true },
      { id: "d", Text: "480 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 8,
    Frage: "Wann war die Devon Zeit?",
    Antwort: [
      { id: "a", Text: "500 Millionen Jahre", correct: false },
      { id: "b", Text: "400 Millionen Jahre", correct: true },
      { id: "c", Text: "650 Millionen Jahre", correct: false },
      { id: "d", Text: "350 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 9,
    Frage: "Wann war die Karbon Zeit?",
    Antwort: [
      { id: "a", Text: "150 Millionen Jahre", correct: false },
      { id: "b", Text: "250 Millionen Jahre", correct: false },
      { id: "c", Text: "450 Millionen Jahre", correct: false },
      { id: "d", Text: "350 Millionen Jahre", correct: true },
    ],
  },
  {
    id: 10,
    Frage: "Wann war die Pern Zeit?",
    Antwort: [
      { id: "a", Text: "250 Millionen Jahre", correct: false },
      { id: "b", Text: "275 Millionen Jahre", correct: false },
      { id: "c", Text: "280 Millionen Jahre", correct: true },
      { id: "d", Text: "230 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 11,
    Frage: "Wann war die Trias Zeit?",
    Antwort: [
      { id: "a", Text: "450 Millionen Jahre", correct: false },
      { id: "b", Text: "230 Millionen Jahre", correct: false },
      { id: "c", Text: "225 Millionen Jahre", correct: true },
      { id: "d", Text: "330 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 12,
    Frage: "Wann war die Jura Zeit?",
    Antwort: [
      { id: "a", Text: "430 Millionen Jahre", correct: false },
      { id: "b", Text: "200 Millionen Jahre", correct: false },
      { id: "c", Text: "195 Millionen Jahre", correct: true },
      { id: "d", Text: "130 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 13,
    Frage: "Wann war die Kreide Zeit?",
    Antwort: [
      { id: "a", Text: "230 Millionen Jahre", correct: false },
      { id: "b", Text: "130 Millionen Jahre", correct: false },
      { id: "c", Text: "140 Millionen Jahre", correct: true },
      { id: "d", Text: "360 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 14,
    Frage: "Wann war die Tertiär Zeit?",
    Antwort: [
      { id: "a", Text: "80 Millionen Jahre", correct: false },
      { id: "b", Text: "65 Millionen Jahre", correct: true },
      { id: "c", Text: "125 Millionen Jahre", correct: false },
      { id: "d", Text: "230 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 15,
    Frage: "Wann war die Quartär Zeit?",
    Antwort: [
      { id: "a", Text: "65 Millionen Jahre", correct: false },
      { id: "b", Text: "5 Millionen Jahre", correct: false },
      { id: "c", Text: "3 Millionen Jahre", correct: false },
      { id: "d", Text: "2 Millionen Jahre", correct: true },
    ],
  },
  {
    id: 16,
    Frage: "Zur welcher Zeit lebten Weichtiere",
    Antwort: [
      { id: "a", Text: "Quartär", correct: false },
      { id: "b", Text: "Kreide ", correct: false },
      { id: "c", Text: "Kambrium", correct: true },
      { id: "d", Text: "Jura ", correct: false },
    ],
  },
  {
    id: 17,
    Frage: "Zur welcher Zeit entstanden im Meer Artenvielfalt",
    Antwort: [
      { id: "a", Text: "Quartär", correct: false },
      { id: "b", Text: "Trias", correct: false },
      { id: "c", Text: "Kambrium", correct: true },
      { id: "d", Text: "Jura", correct: false },
    ],
  },
  {
    id: 18,
    Frage: "In welcher Zeit sind die Termperaturen stark gesunken?",
    Antwort: [
      { id: "a", Text: "Pern", correct: false },
      { id: "b", Text: "Ordovizium", correct: true },
      { id: "c", Text: "Kreide", correct: false },
      { id: "d", Text: "Jura", correct: false },
    ],
  },
  {
    id: 19,
    Frage: "Was geschah in der Silur Zeit?",
    Antwort: [
      { id: "a", Text: "Erste Panzerfische entstanden", correct: true },
      { id: "b", Text: "Dinosaurier starben aus", correct: false },
      { id: "c", Text: "Landmassen teielten sich", correct: false },
      { id: "d", Text: "Menschen entstanden", correct: false },
    ],
  },
  {
    id: 20,
    Frage: "Zur welcher Zeit entstanden Haie und Rochen",
    Antwort: [
      { id: "a", Text: "Kreide Zeit", correct: false },
      { id: "b", Text: "Devon Zeit", correct: true },
      { id: "c", Text: "Jura Zeit", correct: false },
      { id: "d", Text: "Trias Zeit", correct: false },
    ],
  },
  {
    id: 21,
    Frage: "Zur welcher Zeit Insekten und Spinnen die Sumpfgebiete",
    Antwort: [
      { id: "a", Text: "Kreide Zeit", correct: false },
      { id: "b", Text: "Devon Zeit", correct: false },
      { id: "c", Text: "Trias Zeit", correct: false },
      { id: "d", Text: "Karbon Zeit", correct: true },
    ],
  },
  {
    id: 22,
    Frage: "Wann war die Zeit der Dinosaurier?",
    Antwort: [
      { id: "a", Text: "Karbon Zeit", correct: false },
      { id: "b", Text: "Devon Zeit", correct: false },
      { id: "c", Text: "Jura Zeit", correct: true },
      { id: "d", Text: "Silor Zeit", correct: false },
    ],
  },
  {
    id: 23,
    Frage: "Wann zerfielen die Landmassen zu den heutigen Kontineten?",
    Antwort: [
      { id: "a", Text: "Jura Zeit", correct: false },
      { id: "b", Text: "Devon Zeit", correct: false },
      { id: "c", Text: "Kreide Zeit", correct: true },
      { id: "d", Text: "Karbon Zeit", correct: false },
    ],
  },
  {
    id: 24,
    Frage: "Wann zog sich das Meer zurück?",
    Antwort: [
      { id: "a", Text: "Kreide Zeit", correct: false },
      { id: "b", Text: "Jura Zeit", correct: false },
      { id: "c", Text: "Tertiär Zeit", correct: true },
      { id: "d", Text: "Karbon Zeit", correct: false },
    ],
  },
  {
    id: 24,
    Frage: "In welcher Zeit leben wir heute?",
    Antwort: [
      { id: "a", Text: "Kreide Zeit", correct: false },
      { id: "b", Text: "Jura Zeit", correct: false },
      { id: "c", Text: "Quartär Zeit", correct: true },
      { id: "d", Text: "Karbon Zeit", correct: false },
    ],
  },
];
