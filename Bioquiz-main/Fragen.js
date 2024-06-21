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
    id: 25,
    Frage: "In welcher Zeit leben wir heute?",
    Antwort: [
      { id: "a", Text: "Kreide Zeit", correct: false },
      { id: "b", Text: "Jura Zeit", correct: false },
      { id: "c", Text: "Quartär Zeit", correct: true },
      { id: "d", Text: "Karbon Zeit", correct: false },
    ],
  },
  {
    id: 26,
    Frage: "Wie nennt man die dünne Haut um eine Zelle?",
    Antwort: [
      { id: "a", Text: "Schleimhaut", correct: false },
      { id: "b", Text: "Vorhaut", correct: false },
      { id: "c", Text: "Zellmembran", correct: true },
      { id: "d", Text: "Fellmembran", correct: false },
    ],
  },
  {
    id: 27,
    Frage: "Was füllt die Zelle aus?",
    Antwort: [
      { id: "a", Text: "Blut", correct: false },
      { id: "b", Text: "Eiweiß", correct: false },
      { id: "c", Text: "Zellplama", correct: true },
      { id: "d", Text: "Zellwasser", correct: false },
    ],
  },
  {
    id: 28,
    Frage: "Was ist im inneren einer jeder Zelle zu finden?",
    Antwort: [
      { id: "a", Text: "Schleim", correct: false },
      { id: "b", Text: "Zellbohne", correct: false },
      { id: "c", Text: "Zellkern", correct: true },
      { id: "d", Text: "Zellenteile", correct: false },
    ],
  },
  {
    id: 29,
    Frage: "Was sind die wichtigsten Aufgaben jeder Zelle?",
    Antwort: [
      { id: "a", Text: "Blutregeneration", correct: false },
      { id: "b", Text: "Blutversorgung", correct: false },
      {
        id: "c",
        Text: "Energiegewinnung oder Aufbau von Stoffen",
        correct: true,
      },
      { id: "d", Text: "Stoffwechsel", correct: false },
    ],
  },
  {
    id: 30,
    Frage: "Wo lebten die Tiere vor 20 Millionen Jahren?",
    Antwort: [
      { id: "a", Text: "im Wald", correct: false },
      { id: "b", Text: "im Wasser", correct: false },
      { id: "c", Text: "auf Bäumen", correct: true },
      { id: "d", Text: "in Höhlen", correct: false },
    ],
  },
  {
    id: 31,
    Frage:
      "Welchen Tiere ähnelten die Tiere die vor 20 Millionen Jahren auf Bäumen lebten?",
    Antwort: [
      { id: "a", Text: "Spinnen", correct: false },
      { id: "b", Text: "Jeti", correct: false },
      { id: "c", Text: "Groillas und Schimpansen", correct: true },
      { id: "d", Text: "Eichelherr", correct: false },
    ],
  },
  {
    id: 32,
    Frage: "Wer zählt als gemeinsamer Vorfahre von Mensch und Schimpanse?",
    Antwort: [
      { id: "a", Text: "Gorilla", correct: false },
      { id: "b", Text: "Jeti", correct: false },
      { id: "c", Text: "Proconsul", correct: true },
      { id: "d", Text: "Zwergseidenäffchen", correct: false },
    ],
  },
  {
    id: 33,
    Frage: "Was wurde aus den Tieren die weiter überwiegend auf Bäumen lebten?",
    Antwort: [
      { id: "a", Text: "Vögel", correct: false },
      { id: "b", Text: "Urmensch", correct: false },
      { id: "c", Text: "heutige Affenarten", correct: true },
      { id: "d", Text: "Eichelherr", correct: false },
    ],
  },
  {
    id: 34,
    Frage: "Was passierte mit den Urmenschen?",
    Antwort: [
      { id: "a", Text: "sie konnten schneller laufen", correct: false },
      { id: "b", Text: "entdeckten das Feuer", correct: false },
      { id: "c", Text: "sie richteten sich auf", correct: true },
      { id: "d", Text: "sie begannen an zu sprechen", correct: false },
    ],
  },
  {
    id: 35,
    Frage: "Was wurde aus den Tieren die den Boden entdeckten?",
    Antwort: [
      { id: "a", Text: "Vögel", correct: false },
      { id: "b", Text: "Urmensch", correct: true },
      { id: "c", Text: "heutige Affenarten", correct: false },
      { id: "d", Text: "Eichelherr", correct: false },
    ],
  },
  {
    id: 36,
    Frage: "Welche Werkzeuge dienten den Urmenschen als erstes?",
    Antwort: [
      { id: "a", Text: "Seile", correct: false },
      { id: "b", Text: "Grasfassern", correct: false },
      { id: "c", Text: "Stöcke, Steine, Knochen", correct: true },
      { id: "d", Text: "Sehnen", correct: false },
    ],
  },
  {
    id: 37,
    Frage: "Wann entstand der Frühmensch Homo habilis?",
    Antwort: [
      { id: "a", Text: "5 Millionen Jahre", correct: false },
      { id: "b", Text: "1 Millione Jahre", correct: false },
      { id: "c", Text: "2-3 Millionen Jahre", correct: true },
      { id: "d", Text: "12 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 38,
    Frage: "Wann entstand der Frühmensch Homo erectus?",
    Antwort: [
      { id: "a", Text: "5 Millionen Jahre", correct: false },
      { id: "b", Text: "1-1,5 Millionen Jahre", correct: true },
      { id: "c", Text: "2-3 Millionen Jahre", correct: false },
      { id: "d", Text: "12 Millionen Jahre", correct: false },
    ],
  },
  {
    id: 39,
    Frage: "Was benutzte der Frühmensch Homo erectus als erstes?",
    Antwort: [
      { id: "a", Text: "Werkzeug", correct: false },
      { id: "b", Text: "Feuer", correct: true },
      { id: "c", Text: "Steine", correct: false },
      { id: "d", Text: "Stöcker", correct: false },
    ],
  },
  {
    id: 40,
    Frage: "Warum war das benutzen des Feuers so wichtig für die Entwicklung?",
    Antwort: [
      { id: "a", Text: "warmes Essen", correct: false },
      { id: "b", Text: "Einwanderung in kälteren Regionen", correct: true },
      { id: "c", Text: "Als Abschreckung anderer Tiere ", correct: false },
      { id: "d", Text: "als licht in der Dunkelheit", correct: false },
    ],
  },
  {
    id: 41,
    Frage:
      "Von welchem Frühmensch wurden Faustkeile, Steinmesser, Schaber und Speerspizen benutzt?",
    Antwort: [
      { id: "a", Text: "Homo erectus", correct: false },
      { id: "b", Text: "Homo sapiens", correct: true },
      { id: "c", Text: "Homo habilis", correct: false },
      {
        id: "d",
        Text: "Jeder Homo könnte diese Werkzeuge herrstellen",
        correct: false,
      },
    ],
  },
  {
    id: 42,
    Frage: "Was tat der Neandertaler mit seinen Toten?",
    Antwort: [
      { id: "a", Text: "Essen", correct: false },
      { id: "b", Text: "Bestatten", correct: true },
      { id: "c", Text: "Ins Meer werfen", correct: false },
      { id: "d", Text: "liegen lassen", correct: false },
    ],
  },
  {
    id: 43,
    Frage: "Warum ist Chlorophyll in Zellen so wichtig?",
    Antwort: [
      { id: "a", Text: "Wachstum", correct: false },
      { id: "b", Text: "Sauerstoff abgabe", correct: true },
      { id: "c", Text: "Vervielfertigung", correct: false },
      { id: "d", Text: "um die Pflanzen Grün zu machen ", correct: false },
    ],
  },
  {
    id: 44,
    Frage: "Wann entstanden die ersten Fische und Wirbeltiere?",
    Antwort: [
      { id: "a", Text: "Jura Zeit", correct: false },
      { id: "b", Text: "Devon Zeit", correct: false },
      { id: "c", Text: "Ordovicium Zeit", correct: true },
      { id: "d", Text: "Karbon Zeit", correct: false },
    ],
  },
  {
    id: 45,
    Frage: "Aus was entstand unsere Erde vor 4,5 Millarden Jahren?",
    Antwort: [
      { id: "a", Text: "Komet", correct: false },
      { id: "b", Text: "Asteroid", correct: false },
      { id: "c", Text: "Feuerball", correct: true },
      { id: "d", Text: "Mond", correct: false },
    ],
  },
  {
    id: 46,
    Frage: "In welcher Zeit entstadten die ersten Reptillien?",
    Antwort: [
      { id: "a", Text: "Quartär", correct: false },
      { id: "b", Text: "Kreide ", correct: false },
      { id: "c", Text: "Karbon", correct: true },
      { id: "d", Text: "Jura ", correct: false },
    ],
  },
  {
    id: 48,
    Frage: "War das Quiz hilfreich?",
    Antwort: [
      { id: "a", Text: "nein", correct: false },
      { id: "b", Text: "ich weis nicht", correct: false },
      { id: "c", Text: "ja", correct: true },
      { id: "d", Text: "nicht wirklich ", correct: false },
    ],
  },
];
