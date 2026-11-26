// Son Mystère : on n'entend que le moteur, il faut deviner le circuit.
// La vidéo reste cachée pendant l'écoute et s'affiche quand tu révèles la réponse.
// debut / fin : en secondes. Règle-les depuis le site (touche S), puis « Copier la liste ».
// choix : les 4 propositions affichées (touches 1 à 4) · bonne : position de la bonne réponse (0 = la 1re).
// Uniquement des onboards de tours rapides (pas de vue TV ni de bord de piste).
// cadre : pendant l'écoute, haut = % caché en haut, g / d = % flouté à gauche / à droite (la zone nette doit tomber sur le volant).
// Chaque circuit n'apparaît qu'une ou deux fois dans les propositions, pour ne pas donner d'indice.

window.JEU = {
  cle: "son-mystere",
  titre: "Son",
  accent: "Mystère",
  question: "Quel est ce circuit ?",
  unite: "Son",
  ecoute: true,          // vidéo cachée pendant l'écoute
  flou: 45,            // … ou visible mais floutée (en pixels ; mets 0 pour un écran noir)
  finTexte: "Fin de l'écoute"
};

window.NIVEAUX = {
  "Facile":    { couleur: "#e9dcff", points: 1 },
  "Medium":    { couleur: "#c39bff", points: 1 },
  "Difficile": { couleur: "#9b5cff", points: 1 },
  "Extrême":   { couleur: "#6a1fe0", points: 1 },
  "Hardcore":  { couleur: "#ff4d6d", points: 1 }
};

window.ELEMENTS = [
  // Onboard Ferrari, qualifs 2001.
  { niveau: "Facile",    youtube: "https://www.youtube.com/watch?v=CFufEra-3EY", reponse: "Monaco", choix: ["Valence","Detroit","Monaco","Singapour"], bonne: 2,                 detail: "Schumacher, Ferrari 2001",   debut: 0, fin: null, cadre: { haut: 42, g: 40, d: 15 } },
  { niveau: "Facile",    youtube: "https://www.youtube.com/watch?v=TnRSbW-9RkM", reponse: "Spa-Francorchamps", choix: ["A1-Ring","Spa-Francorchamps","Nürburgring","Hockenheim"], bonne: 1, detail: "Schumacher 2001",       debut: 0, fin: null, cadre: { haut: 48, g: 35, d: 18 } },
  // Senna 1990, « pure sound ».
  { niveau: "Facile",    youtube: "https://www.youtube.com/watch?v=XllE1ppEUkU", reponse: "Monza", choix: ["Monza","Paul Ricard","Estoril","Magny-Cours"], bonne: 0,              detail: "Senna, McLaren 1990",        debut: 2, fin: null, cadre: { haut: 45, g: 5, d: 55 } },
  { niveau: "Medium",    youtube: "https://www.youtube.com/watch?v=BISbjOMR-R0", reponse: "Interlagos", choix: ["Sepang","Istanbul Park","Interlagos","Buenos Aires"], bonne: 2,      detail: "Massa, pole 2006",           debut: 0, fin: null, cadre: { haut: 40, g: 35, d: 20 } },
  { niveau: "Medium",    youtube: "https://www.youtube.com/watch?v=kT5Y-aMLpZ0", reponse: "Montréal", choix: ["Bakou","Mexico","Austin","Montréal"], bonne: 3,                    detail: "Vettel, pole 2012",          debut: 0, fin: null, cadre: { haut: 45, g: 33, d: 25 } },
  // Schumacher 2004. Le tour part de l'ancienne ligne, juste avant un virage : on démarre sur la ligne droite qui suit.
  { niveau: "Difficile", youtube: "https://www.youtube.com/watch?v=i6Y6nKJ6DVk", reponse: "Silverstone", choix: ["Barcelone","Magny-Cours","Silverstone","Indianapolis"], bonne: 2, detail: "Schumacher 2004",         debut: 13, fin: null, cadre: { haut: 42, g: 33, d: 28 } },
  // Senna 1993, sans commentaire.
  { niveau: "Difficile", youtube: "https://www.youtube.com/watch?v=zvi1v4ClRLU", reponse: "Suzuka", choix: ["Suzuka","Adélaïde","Kyalami","Donington"], bonne: 0,                detail: "Senna, McLaren 1993",        debut: 3, fin: null, cadre: { haut: 55, g: 55, d: 0 } },
  // Schumacher, pole 2004, onboard du début à la fin.
  { niveau: "Extrême",   youtube: "https://www.youtube.com/watch?v=Nl4xIjzUPQI", reponse: "Barcelone", choix: ["Barcelone","Valence","Jerez","Estoril"], bonne: 0,         detail: "Schumacher, pole 2004",      debut: 0, fin: null, cadre: { haut: 50, g: 45, d: 28 } },
  // Schumacher, pole 2004 (on coupe le carton de titre du début).
  { niveau: "Extrême",   youtube: "https://www.youtube.com/watch?v=roRGYJPBsdw", reponse: "Hockenheim", choix: ["Nürburgring","A1-Ring","Magny-Cours","Hockenheim"], bonne: 3, detail: "Schumacher, pole 2004",     debut: 7, fin: null, cadre: { haut: 50, g: 45, d: 28 } },
  { niveau: "Hardcore",  youtube: "https://www.youtube.com/watch?v=GGu--_UHY_o", reponse: "Zandvoort", choix: ["Brands Hatch","Portimão","Zandvoort","Jerez"], bonne: 2,            detail: "Verstappen, Red Bull",       debut: 0, fin: null, cadre: { haut: 48, g: 35, d: 28 } }
];
