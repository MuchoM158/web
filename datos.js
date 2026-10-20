// Orden de los rasgos en cada lista: [energía, exigencia, cuidado, liderazgo, estrategia, reserva, brillo]

const PREGUNTAS = [
  {
    texto: "Mañana tienes algo importante y estás nerviosa. ¿Qué haces?",
    opciones: [
      { texto: "Me muevo o salgo a caminar para soltar la energía", pts: [2, 0, 0, 0, 0, 0, 0] },
      { texto: "Lo repaso una y otra vez hasta que salga perfecto", pts: [0, 2, 0, 0, 0, 1, 0] },
      { texto: "Imagino qué podría salir mal y preparo respuestas", pts: [0, 0, 0, 0, 2, 1, 0] },
      { texto: "Busco a alguien que me anime", pts: [1, 0, 2, 0, 0, 0, 0] },
    ]
  },
  {
    texto: "En un trabajo en grupo, tú eres la que...",
    opciones: [
      { texto: "propone ideas y se lanza primero", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "organiza quién hace qué", pts: [0, 1, 0, 2, 0, 0, 0] },
      { texto: "revisa los detalles y avisa los errores", pts: [0, 2, 0, 0, 0, 1, 0] },
      { texto: "busca la forma más lista de resolverlo", pts: [0, 0, 0, 0, 2, 1, 0] },
    ]
  },
  {
    texto: "Una persona cercana está triste. ¿Qué haces?",
    opciones: [
      { texto: "La escucho con paciencia", pts: [0, 0, 2, 0, 0, 1, 0] },
      { texto: "Hago bromas hasta que se ríe", pts: [0, 0, 1, 0, 0, 0, 2] },
      { texto: "Le propongo una solución concreta", pts: [0, 1, 0, 1, 1, 0, 0] },
      { texto: "Me quedo a su lado sin decir mucho", pts: [0, 0, 1, 0, 0, 2, 0] },
    ]
  },
  {
    texto: "Cuando algo te sale mal...",
    opciones: [
      { texto: "Me frustro, pero me levanto con más ganas", pts: [1, 2, 0, 0, 0, 0, 0] },
      { texto: "Lo analizo con calma para no repetirlo", pts: [0, 0, 0, 0, 2, 1, 0] },
      { texto: "Me río del error y sigo", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "Lo asumo y ayudo a arreglarlo", pts: [0, 0, 2, 1, 0, 0, 0] },
    ]
  },
  {
    texto: "Tu plan ideal de sábado es...",
    opciones: [
      { texto: "Algo con movimiento y gente", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "Un reto o una competencia", pts: [0, 2, 0, 0, 0, 0, 1] },
      { texto: "Algo tranquilo, sin mucho ruido", pts: [0, 0, 0, 0, 1, 2, 0] },
      { texto: "Organizar una salida con mis amigos", pts: [0, 0, 1, 2, 0, 0, 0] },
    ]
  },
  {
    texto: "Lo que más dirían tus amigos de ti es que...",
    opciones: [
      { texto: "contagias las ganas", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "eres muy exigente contigo", pts: [0, 2, 0, 0, 0, 1, 0] },
      { texto: "tienes un humor sarcástico", pts: [0, 0, 0, 0, 2, 0, 1] },
      { texto: "siempre estás ahí", pts: [0, 0, 2, 1, 0, 0, 0] },
    ]
  },
    {
    texto: "Alguien te reta a algo que parece difícil...",
    opciones: [
      { texto: "Acepto al instante", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "Me preparo para ganar", pts: [0, 2, 0, 0, 1, 0, 0] },
      { texto: "Pregunto primero qué gano", pts: [0, 0, 0, 0, 2, 0, 1] },
      { texto: "Acepto si es en equipo", pts: [0, 0, 2, 1, 0, 0, 0] },
    ]
  },
  {
    texto: "En un juego en equipo, prefieres ser la que...",
    opciones: [
      { texto: "hace la jugada final", pts: [1, 0, 0, 0, 0, 0, 2] },
      { texto: "defiende y salva lo imposible", pts: [2, 0, 1, 0, 0, 0, 0] },
      { texto: "reparte y cuida al equipo", pts: [0, 0, 2, 1, 0, 0, 0] },
      { texto: "lee al rival y encuentra su punto débil", pts: [0, 0, 0, 0, 2, 1, 0] },
    ]
  },
  {
    texto: "¿Qué frase te representa más?",
    opciones: [
      { texto: "Si lo intento, puedo.", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "Si no es perfecto, no vale.", pts: [0, 2, 0, 0, 0, 1, 0] },
      { texto: "Juntos llegamos más lejos.", pts: [0, 0, 1, 2, 0, 0, 0] },
      { texto: "La mejor jugada es la que no esperan.", pts: [0, 0, 0, 0, 2, 0, 1] },
    ]
  },
  {
    texto: "Tu cumpleaños ideal es...",
    opciones: [
      { texto: "Una fiesta grande con baile", pts: [2, 0, 0, 0, 0, 0, 2] },
      { texto: "Una cena tranquila con los más cercanos", pts: [0, 0, 2, 0, 0, 1, 0] },
      { texto: "Un plan sorpresa bien armado", pts: [0, 0, 0, 1, 2, 0, 0] },
      { texto: "Algo sencillo, sin alboroto", pts: [0, 0, 0, 0, 0, 2, 0] },
    ]
  },
  {
    texto: "Cuando todos te están mirando...",
    opciones: [
      { texto: "Me motiva y rindo más", pts: [1, 0, 0, 0, 0, 0, 2] },
      { texto: "Me da nervios, aunque no lo muestre", pts: [0, 2, 0, 0, 0, 1, 0] },
      { texto: "Prefiero pasar desapercibida y hacer lo mío", pts: [0, 0, 0, 0, 0, 2, 0] },
      { texto: "Lo disfruto, pero sé que me costó esfuerzo llegar", pts: [0, 1, 0, 0, 0, 0, 2] },
    ]
  },
  {
    texto: "Cuando necesitas recargar energía...",
    opciones: [
      { texto: "Salgo con amigos y hacemos ruido", pts: [2, 0, 0, 0, 0, 0, 1] },
      { texto: "Me quedo sola con un videojuego o algo tranquilo", pts: [0, 0, 0, 0, 1, 2, 0] },
      { texto: "Hago deporte hasta cansarme", pts: [1, 2, 0, 0, 0, 0, 0] },
      { texto: "Tengo una charla larga con alguien de confianza", pts: [0, 0, 2, 0, 0, 1, 0] },
    ]
  },
];

const PERFILES = {
  Hinata: [5, 3, 2, 2, 1, 0, 2],
  Kageyama: [3, 5, 1, 3, 3, 3, 1],
  Tsukishima: [1, 3, 2, 1, 4, 5, 1],
  Nishinoya: [5, 2, 4, 2, 1, 0, 3],
  Sugawara: [2, 2, 5, 3, 3, 2, 0],
  Daichi: [2, 3, 4, 5, 2, 2, 1],
  Kuroo: [3, 2, 2, 4, 5, 1, 4],
  Kenma: [0, 2, 1, 1, 5, 5, 0],
  Oikawa: [3, 5, 2, 4, 4, 1, 5],
  Bokuto: [5, 2, 3, 3, 1, 0, 5],
};
