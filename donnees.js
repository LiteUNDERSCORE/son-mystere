// Son Mystère : on n'entend que le moteur, il faut deviner le circuit.
// La vidéo reste cachée pendant l'écoute et s'affiche quand tu révèles la réponse.
// debut / fin : en secondes. Règle-les depuis le site (touche S), puis « Copier la liste ».
// On privilégie les vidéos « pure sound / no commentary » pour éviter qu'un commentateur donne la réponse.

window.JEU = {
  cle: "son-mystere",
  titre: "Son",
  accent: "Mystère",
  question: "Quel est ce circuit ?",
  unite: "Son",
  ecoute: true,          // vidéo cachée pendant l'écoute
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
  // Schumacher, qualifs 1995, sans commentaire.
  { niveau: "Facile",    youtube: "https://www.youtube.com/watch?v=8oyV2FQCSC8", reponse: "Monaco",            detail: "Schumacher, qualifs 1995",   debut: 5, fin: 70 },
  { niveau: "Facile",    youtube: "https://www.youtube.com/watch?v=TnRSbW-9RkM", reponse: "Spa-Francorchamps", detail: "Schumacher 2001",            debut: 0, fin: null },
  // Senna 1990, « pure sound ».
  { niveau: "Facile",    youtube: "https://www.youtube.com/watch?v=XllE1ppEUkU", reponse: "Monza",             detail: "Senna, McLaren 1990",        debut: 2, fin: null },
  { niveau: "Medium",    youtube: "https://www.youtube.com/watch?v=BISbjOMR-R0", reponse: "Interlagos",        detail: "Massa, pole 2006",           debut: 0, fin: null },
  // Schumacher 2004, « brutal sound ».
  { niveau: "Medium",    youtube: "https://www.youtube.com/watch?v=i6Y6nKJ6DVk", reponse: "Silverstone",       detail: "Schumacher 2004",            debut: 0, fin: null },
  { niveau: "Medium",    youtube: "https://www.youtube.com/watch?v=kT5Y-aMLpZ0", reponse: "Montréal",          detail: "Vettel, pole 2012",          debut: 0, fin: null },
  // Senna 1993, sans commentaire.
  { niveau: "Difficile", youtube: "https://www.youtube.com/watch?v=zvi1v4ClRLU", reponse: "Suzuka",            detail: "Senna, McLaren 1993",        debut: 3, fin: null },
  // Son de bord de piste, GP 2019.
  { niveau: "Difficile", youtube: "https://www.youtube.com/watch?v=zxoZ5N4z-2Y", reponse: "Hungaroring",       detail: "Bord de piste, GP 2019",     debut: 60, fin: 150 },
  { niveau: "Extrême",   youtube: "https://www.youtube.com/watch?v=GMtDXH9ZeBk", reponse: "Imola",             detail: "Schumacher, pole 2003",      debut: 0, fin: null },
  { niveau: "Hardcore",  youtube: "https://www.youtube.com/watch?v=GGu--_UHY_o", reponse: "Zandvoort",         detail: "Verstappen, Red Bull",       debut: 0, fin: null }
];
