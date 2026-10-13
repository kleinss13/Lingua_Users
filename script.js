/* Lingua — lógica de tarjetas, estudio, importación/exportación y tema. */
(() => {
  "use strict";
  let activeUser = localStorage.getItem("lingua.activeUser.v1") || "";
  let LANGUAGE = localStorage.getItem(`lingua.${encodeURIComponent(activeUser || "guest")}.language.v1`) === "en" ? "en" : "de";
  const STORAGE_KEY = () => `lingua.profile.${encodeURIComponent(activeUser)}.cards.${LANGUAGE}.v2`;
  const MISSED_KEY = () => `lingua.profile.${encodeURIComponent(activeUser)}.missed.${LANGUAGE}.v2`;
  const STATS_KEY = () => `lingua.profile.${encodeURIComponent(activeUser)}.stats.${LANGUAGE}.v2`;
  const DEFAULT_DE = [{"spanish": "hola", "translation": "Hallo"}, {"spanish": "buenos días", "translation": "Guten Morgen"}, {"spanish": "buenas tardes", "translation": "Guten Tag"}, {"spanish": "buenas noches", "translation": "Guten Abend"}, {"spanish": "adiós", "translation": "Auf Wiedersehen"}, {"spanish": "hasta luego", "translation": "Bis später"}, {"spanish": "por favor", "translation": "Bitte"}, {"spanish": "gracias", "translation": "Danke"}, {"spanish": "muchas gracias", "translation": "Vielen Dank"}, {"spanish": "de nada", "translation": "Gern geschehen"}, {"spanish": "perdón / disculpe", "translation": "Entschuldigung"}, {"spanish": "sí", "translation": "Ja"}, {"spanish": "no", "translation": "Nein"}, {"spanish": "quizás", "translation": "Vielleicht"}, {"spanish": "¿cómo estás?", "translation": "Wie geht es dir?"}, {"spanish": "muy bien", "translation": "Sehr gut"}, {"spanish": "mal", "translation": "Schlecht"}, {"spanish": "¿cómo te llamas?", "translation": "Wie heißt du?"}, {"spanish": "me llamo…", "translation": "Ich heiße …"}, {"spanish": "encantado/a", "translation": "Freut mich"}, {"spanish": "yo", "translation": "ich"}, {"spanish": "tú", "translation": "du"}, {"spanish": "él", "translation": "er"}, {"spanish": "ella", "translation": "sie"}, {"spanish": "nosotros/as", "translation": "wir"}, {"spanish": "vosotros/as", "translation": "ihr"}, {"spanish": "ellos/as", "translation": "sie"}, {"spanish": "usted", "translation": "Sie"}, {"spanish": "mi / mis", "translation": "mein / meine"}, {"spanish": "tu / tus", "translation": "dein / deine"}, {"spanish": "su (de usted)", "translation": "Ihr / Ihre"}, {"spanish": "quién", "translation": "wer"}, {"spanish": "qué", "translation": "was"}, {"spanish": "dónde", "translation": "wo"}, {"spanish": "cuándo", "translation": "wann"}, {"spanish": "por qué", "translation": "warum"}, {"spanish": "cómo", "translation": "wie"}, {"spanish": "cuánto", "translation": "wie viel"}, {"spanish": "cuántos", "translation": "wie viele"}, {"spanish": "cuál", "translation": "welcher / welche / welches"}, {"spanish": "uno", "translation": "eins"}, {"spanish": "dos", "translation": "zwei"}, {"spanish": "tres", "translation": "drei"}, {"spanish": "cuatro", "translation": "vier"}, {"spanish": "cinco", "translation": "fünf"}, {"spanish": "seis", "translation": "sechs"}, {"spanish": "siete", "translation": "sieben"}, {"spanish": "ocho", "translation": "acht"}, {"spanish": "nueve", "translation": "neun"}, {"spanish": "diez", "translation": "zehn"}, {"spanish": "once", "translation": "elf"}, {"spanish": "doce", "translation": "zwölf"}, {"spanish": "veinte", "translation": "zwanzig"}, {"spanish": "treinta", "translation": "dreißig"}, {"spanish": "cien", "translation": "hundert"}, {"spanish": "hoy", "translation": "heute"}, {"spanish": "mañana", "translation": "morgen"}, {"spanish": "ayer", "translation": "gestern"}, {"spanish": "ahora", "translation": "jetzt"}, {"spanish": "más tarde", "translation": "später"}, {"spanish": "siempre", "translation": "immer"}, {"spanish": "nunca", "translation": "nie"}, {"spanish": "el día", "translation": "der Tag"}, {"spanish": "la semana", "translation": "die Woche"}, {"spanish": "el mes", "translation": "der Monat"}, {"spanish": "el año", "translation": "das Jahr"}, {"spanish": "la hora", "translation": "die Uhrzeit"}, {"spanish": "la mañana", "translation": "der Morgen"}, {"spanish": "la tarde", "translation": "der Nachmittag"}, {"spanish": "la noche", "translation": "die Nacht"}, {"spanish": "la familia", "translation": "die Familie"}, {"spanish": "la madre", "translation": "die Mutter"}, {"spanish": "el padre", "translation": "der Vater"}, {"spanish": "los padres", "translation": "die Eltern"}, {"spanish": "el hermano", "translation": "der Bruder"}, {"spanish": "la hermana", "translation": "die Schwester"}, {"spanish": "el hijo", "translation": "der Sohn"}, {"spanish": "la hija", "translation": "die Tochter"}, {"spanish": "el niño", "translation": "der Junge"}, {"spanish": "la niña", "translation": "das Mädchen"}, {"spanish": "el amigo", "translation": "der Freund"}, {"spanish": "la amiga", "translation": "die Freundin"}, {"spanish": "el hombre", "translation": "der Mann"}, {"spanish": "la mujer", "translation": "die Frau"}, {"spanish": "la persona", "translation": "die Person"}, {"spanish": "el nombre", "translation": "der Name"}, {"spanish": "la casa", "translation": "das Haus"}, {"spanish": "el piso / apartamento", "translation": "die Wohnung"}, {"spanish": "la habitación", "translation": "das Zimmer"}, {"spanish": "la cocina", "translation": "die Küche"}, {"spanish": "el baño", "translation": "das Badezimmer"}, {"spanish": "la puerta", "translation": "die Tür"}, {"spanish": "la ventana", "translation": "das Fenster"}, {"spanish": "la mesa", "translation": "der Tisch"}, {"spanish": "la silla", "translation": "der Stuhl"}, {"spanish": "la cama", "translation": "das Bett"}, {"spanish": "el libro", "translation": "das Buch"}, {"spanish": "el teléfono", "translation": "das Telefon"}, {"spanish": "el ordenador", "translation": "der Computer"}, {"spanish": "la llave", "translation": "der Schlüssel"}, {"spanish": "el dinero", "translation": "das Geld"}, {"spanish": "el coche", "translation": "das Auto"}, {"spanish": "la bicicleta", "translation": "das Fahrrad"}, {"spanish": "el autobús", "translation": "der Bus"}, {"spanish": "el tren", "translation": "der Zug"}, {"spanish": "la estación", "translation": "der Bahnhof"}, {"spanish": "el agua", "translation": "das Wasser"}, {"spanish": "el café", "translation": "der Kaffee"}, {"spanish": "el té", "translation": "der Tee"}, {"spanish": "la leche", "translation": "die Milch"}, {"spanish": "el pan", "translation": "das Brot"}, {"spanish": "la mantequilla", "translation": "die Butter"}, {"spanish": "el queso", "translation": "der Käse"}, {"spanish": "la manzana", "translation": "der Apfel"}, {"spanish": "el plátano", "translation": "die Banane"}, {"spanish": "la naranja", "translation": "die Orange"}, {"spanish": "la comida", "translation": "das Essen"}, {"spanish": "el desayuno", "translation": "das Frühstück"}, {"spanish": "la cena", "translation": "das Abendessen"}, {"spanish": "el restaurante", "translation": "das Restaurant"}, {"spanish": "la cuenta", "translation": "die Rechnung"}, {"spanish": "vegetariano/a", "translation": "vegetarisch"}, {"spanish": "ser / estar", "translation": "sein"}, {"spanish": "tener", "translation": "haben"}, {"spanish": "hacer", "translation": "machen"}, {"spanish": "ir", "translation": "gehen"}, {"spanish": "venir", "translation": "kommen"}, {"spanish": "vivir", "translation": "wohnen"}, {"spanish": "trabajar", "translation": "arbeiten"}, {"spanish": "estudiar", "translation": "lernen"}, {"spanish": "hablar", "translation": "sprechen"}, {"spanish": "entender", "translation": "verstehen"}, {"spanish": "aprender", "translation": "lernen"}, {"spanish": "leer", "translation": "lesen"}, {"spanish": "escribir", "translation": "schreiben"}, {"spanish": "comer", "translation": "essen"}, {"spanish": "beber", "translation": "trinken"}, {"spanish": "comprar", "translation": "kaufen"}, {"spanish": "pagar", "translation": "bezahlen"}, {"spanish": "necesitar", "translation": "brauchen"}, {"spanish": "querer", "translation": "wollen"}, {"spanish": "poder", "translation": "können"}, {"spanish": "gustar", "translation": "mögen"}, {"spanish": "buscar", "translation": "suchen"}, {"spanish": "encontrar", "translation": "finden"}, {"spanish": "dormir", "translation": "schlafen"}, {"spanish": "ayudar", "translation": "helfen"}, {"spanish": "bueno/a", "translation": "gut"}, {"spanish": "malo/a", "translation": "schlecht"}, {"spanish": "grande", "translation": "groß"}, {"spanish": "pequeño/a", "translation": "klein"}, {"spanish": "nuevo/a", "translation": "neu"}, {"spanish": "viejo/a", "translation": "alt"}, {"spanish": "bonito/a", "translation": "schön"}, {"spanish": "caro/a", "translation": "teuer"}, {"spanish": "barato/a", "translation": "billig"}, {"spanish": "fácil", "translation": "einfach"}, {"spanish": "difícil", "translation": "schwierig"}, {"spanish": "rápido/a", "translation": "schnell"}, {"spanish": "lento/a", "translation": "langsam"}, {"spanish": "caliente", "translation": "warm"}, {"spanish": "frío/a", "translation": "kalt"}, {"spanish": "feliz", "translation": "glücklich"}, {"spanish": "cansado/a", "translation": "müde"}, {"spanish": "enfermo/a", "translation": "krank"}, {"spanish": "abierto/a", "translation": "offen"}, {"spanish": "cerrado/a", "translation": "geschlossen"}, {"spanish": "aquí", "translation": "hier"}, {"spanish": "allí", "translation": "dort"}, {"spanish": "izquierda", "translation": "links"}, {"spanish": "derecha", "translation": "rechts"}, {"spanish": "recto / todo recto", "translation": "geradeaus"}, {"spanish": "cerca", "translation": "nah"}, {"spanish": "lejos", "translation": "weit"}, {"spanish": "la calle", "translation": "die Straße"}, {"spanish": "la ciudad", "translation": "die Stadt"}, {"spanish": "el pueblo", "translation": "das Dorf"}, {"spanish": "el supermercado", "translation": "der Supermarkt"}, {"spanish": "el trabajo", "translation": "die Arbeit"}, {"spanish": "la escuela", "translation": "die Schule"}, {"spanish": "el médico", "translation": "der Arzt"}, {"spanish": "la farmacia", "translation": "die Apotheke"}, {"spanish": "lunes", "translation": "Montag"}, {"spanish": "martes", "translation": "Dienstag"}, {"spanish": "miércoles", "translation": "Mittwoch"}, {"spanish": "jueves", "translation": "Donnerstag"}, {"spanish": "viernes", "translation": "Freitag"}, {"spanish": "sábado", "translation": "Samstag"}, {"spanish": "domingo", "translation": "Sonntag"}, {"spanish": "enero", "translation": "Januar"}, {"spanish": "febrero", "translation": "Februar"}, {"spanish": "marzo", "translation": "März"}, {"spanish": "abril", "translation": "April"}, {"spanish": "mayo", "translation": "Mai"}, {"spanish": "junio", "translation": "Juni"}, {"spanish": "julio", "translation": "Juli"}, {"spanish": "agosto", "translation": "August"}, {"spanish": "septiembre", "translation": "September"}, {"spanish": "octubre", "translation": "Oktober"}, {"spanish": "noviembre", "translation": "November"}, {"spanish": "diciembre", "translation": "Dezember"}, {"spanish": "¿cuánto cuesta?", "translation": "Wie viel kostet das?"}, {"spanish": "no entiendo", "translation": "Ich verstehe nicht"}, {"spanish": "¿habla español?", "translation": "Sprechen Sie Spanisch?"}, {"spanish": "hablo un poco de alemán", "translation": "Ich spreche ein bisschen Deutsch"}, {"spanish": "¿puede ayudarme?", "translation": "Können Sie mir helfen?"}, {"spanish": "¿dónde está el baño?", "translation": "Wo ist die Toilette?"}, {"spanish": "quiero esto", "translation": "Ich möchte das"}, {"spanish": "tengo hambre", "translation": "Ich habe Hunger"}, {"spanish": "tengo sed", "translation": "Ich habe Durst"}, {"spanish": "no pasa nada", "translation": "Kein Problem"}];
  const DEFAULT_EN = [{"spanish": "hola", "translation": "hello"}, {"spanish": "buenos días", "translation": "good morning"}, {"spanish": "buenas tardes", "translation": "good afternoon"}, {"spanish": "buenas tardes/noches", "translation": "good evening"}, {"spanish": "buenas noches", "translation": "good night"}, {"spanish": "adiós", "translation": "goodbye"}, {"spanish": "hasta luego", "translation": "see you later"}, {"spanish": "por favor", "translation": "please"}, {"spanish": "gracias", "translation": "thank you"}, {"spanish": "muchas gracias", "translation": "thank you very much"}, {"spanish": "de nada", "translation": "you’re welcome"}, {"spanish": "perdón / disculpe", "translation": "excuse me"}, {"spanish": "lo siento", "translation": "sorry"}, {"spanish": "sí", "translation": "yes"}, {"spanish": "no", "translation": "no"}, {"spanish": "quizá", "translation": "maybe"}, {"spanish": "por supuesto", "translation": "of course"}, {"spanish": "me llamo…", "translation": "my name is…"}, {"spanish": "¿cómo te llamas?", "translation": "what is your name?"}, {"spanish": "soy… / estoy…", "translation": "I am…"}, {"spanish": "encantado/a", "translation": "nice to meet you"}, {"spanish": "¿de dónde eres?", "translation": "where are you from?"}, {"spanish": "soy de España", "translation": "I am from Spain"}, {"spanish": "hablo español", "translation": "I speak Spanish"}, {"spanish": "no entiendo", "translation": "I don’t understand"}, {"spanish": "¿hablas inglés?", "translation": "do you speak English?"}, {"spanish": "ayuda", "translation": "help"}, {"spanish": "agua", "translation": "water"}, {"spanish": "café", "translation": "coffee"}, {"spanish": "té", "translation": "tea"}, {"spanish": "leche", "translation": "milk"}, {"spanish": "pan", "translation": "bread"}, {"spanish": "mantequilla", "translation": "butter"}, {"spanish": "queso", "translation": "cheese"}, {"spanish": "huevo", "translation": "egg"}, {"spanish": "manzana", "translation": "apple"}, {"spanish": "plátano", "translation": "banana"}, {"spanish": "naranja", "translation": "orange"}, {"spanish": "verdura", "translation": "vegetable"}, {"spanish": "fruta", "translation": "fruit"}, {"spanish": "carne", "translation": "meat"}, {"spanish": "pescado", "translation": "fish"}, {"spanish": "pollo", "translation": "chicken"}, {"spanish": "arroz", "translation": "rice"}, {"spanish": "patata", "translation": "potato"}, {"spanish": "azúcar", "translation": "sugar"}, {"spanish": "sal", "translation": "salt"}, {"spanish": "desayuno", "translation": "breakfast"}, {"spanish": "comida / almuerzo", "translation": "lunch"}, {"spanish": "cena", "translation": "dinner"}, {"spanish": "la cuenta, por favor", "translation": "the bill, please"}, {"spanish": "casa", "translation": "house"}, {"spanish": "piso / apartamento", "translation": "flat / apartment"}, {"spanish": "habitación", "translation": "room"}, {"spanish": "cocina", "translation": "kitchen"}, {"spanish": "baño", "translation": "bathroom"}, {"spanish": "dormitorio", "translation": "bedroom"}, {"spanish": "cama", "translation": "bed"}, {"spanish": "mesa", "translation": "table"}, {"spanish": "silla", "translation": "chair"}, {"spanish": "puerta", "translation": "door"}, {"spanish": "ventana", "translation": "window"}, {"spanish": "llave", "translation": "key"}, {"spanish": "libro", "translation": "book"}, {"spanish": "bolígrafo", "translation": "pen"}, {"spanish": "teléfono", "translation": "phone"}, {"spanish": "ordenador", "translation": "computer"}, {"spanish": "bolsa / bolso", "translation": "bag"}, {"spanish": "coche", "translation": "car"}, {"spanish": "autobús", "translation": "bus"}, {"spanish": "tren", "translation": "train"}, {"spanish": "bicicleta", "translation": "bicycle"}, {"spanish": "billete", "translation": "ticket"}, {"spanish": "estación", "translation": "station"}, {"spanish": "aeropuerto", "translation": "airport"}, {"spanish": "izquierda", "translation": "left"}, {"spanish": "derecha", "translation": "right"}, {"spanish": "todo recto", "translation": "straight ahead"}, {"spanish": "cerca", "translation": "near"}, {"spanish": "lejos", "translation": "far"}, {"spanish": "hoy", "translation": "today"}, {"spanish": "mañana", "translation": "tomorrow"}, {"spanish": "ayer", "translation": "yesterday"}, {"spanish": "ahora", "translation": "now"}, {"spanish": "más tarde", "translation": "later"}, {"spanish": "mañana", "translation": "morning"}, {"spanish": "tarde", "translation": "afternoon"}, {"spanish": "atardecer / noche", "translation": "evening"}, {"spanish": "noche", "translation": "night"}, {"spanish": "día", "translation": "day"}, {"spanish": "semana", "translation": "week"}, {"spanish": "mes", "translation": "month"}, {"spanish": "año", "translation": "year"}, {"spanish": "lunes", "translation": "Monday"}, {"spanish": "martes", "translation": "Tuesday"}, {"spanish": "miércoles", "translation": "Wednesday"}, {"spanish": "jueves", "translation": "Thursday"}, {"spanish": "viernes", "translation": "Friday"}, {"spanish": "sábado", "translation": "Saturday"}, {"spanish": "domingo", "translation": "Sunday"}, {"spanish": "uno", "translation": "one"}, {"spanish": "dos", "translation": "two"}, {"spanish": "tres", "translation": "three"}, {"spanish": "cuatro", "translation": "four"}, {"spanish": "cinco", "translation": "five"}, {"spanish": "seis", "translation": "six"}, {"spanish": "siete", "translation": "seven"}, {"spanish": "ocho", "translation": "eight"}, {"spanish": "nueve", "translation": "nine"}, {"spanish": "diez", "translation": "ten"}, {"spanish": "veinte", "translation": "twenty"}, {"spanish": "treinta", "translation": "thirty"}, {"spanish": "cien", "translation": "one hundred"}, {"spanish": "persona", "translation": "person"}, {"spanish": "hombre", "translation": "man"}, {"spanish": "mujer", "translation": "woman"}, {"spanish": "niño/a", "translation": "child"}, {"spanish": "familia", "translation": "family"}, {"spanish": "madre", "translation": "mother"}, {"spanish": "padre", "translation": "father"}, {"spanish": "hermano", "translation": "brother"}, {"spanish": "hermana", "translation": "sister"}, {"spanish": "amigo/a", "translation": "friend"}, {"spanish": "gente", "translation": "people"}, {"spanish": "nombre", "translation": "name"}, {"spanish": "dirección", "translation": "address"}, {"spanish": "país", "translation": "country"}, {"spanish": "ciudad", "translation": "city"}, {"spanish": "calle", "translation": "street"}, {"spanish": "trabajo", "translation": "work"}, {"spanish": "escuela", "translation": "school"}, {"spanish": "profesor/a", "translation": "teacher"}, {"spanish": "estudiante", "translation": "student"}, {"spanish": "médico/a", "translation": "doctor"}, {"spanish": "tienda", "translation": "shop"}, {"spanish": "supermercado", "translation": "supermarket"}, {"spanish": "dinero", "translation": "money"}, {"spanish": "precio", "translation": "price"}, {"spanish": "barato/a", "translation": "cheap"}, {"spanish": "caro/a", "translation": "expensive"}, {"spanish": "abierto/a", "translation": "open"}, {"spanish": "cerrado/a", "translation": "closed"}, {"spanish": "hora / tiempo", "translation": "time"}, {"spanish": "hora", "translation": "hour"}, {"spanish": "minuto", "translation": "minute"}, {"spanish": "tiempo meteorológico", "translation": "weather"}, {"spanish": "sol", "translation": "sun"}, {"spanish": "lluvia", "translation": "rain"}, {"spanish": "frío/a", "translation": "cold"}, {"spanish": "caliente / calor", "translation": "hot"}, {"spanish": "templado/a", "translation": "warm"}, {"spanish": "bueno/a", "translation": "good"}, {"spanish": "malo/a", "translation": "bad"}, {"spanish": "grande", "translation": "big"}, {"spanish": "pequeño/a", "translation": "small"}, {"spanish": "nuevo/a", "translation": "new"}, {"spanish": "viejo/a", "translation": "old"}, {"spanish": "bonito/a", "translation": "beautiful"}, {"spanish": "fácil", "translation": "easy"}, {"spanish": "difícil", "translation": "difficult"}, {"spanish": "feliz", "translation": "happy"}, {"spanish": "cansado/a", "translation": "tired"}, {"spanish": "hambriento/a", "translation": "hungry"}, {"spanish": "sediento/a", "translation": "thirsty"}, {"spanish": "ser / estar", "translation": "to be"}, {"spanish": "tener", "translation": "to have"}, {"spanish": "ir", "translation": "to go"}, {"spanish": "venir", "translation": "to come"}, {"spanish": "hacer", "translation": "to do / make"}, {"spanish": "comer", "translation": "to eat"}, {"spanish": "beber", "translation": "to drink"}, {"spanish": "hablar", "translation": "to speak"}, {"spanish": "entender", "translation": "to understand"}, {"spanish": "aprender", "translation": "to learn"}, {"spanish": "trabajar", "translation": "to work"}, {"spanish": "vivir", "translation": "to live"}, {"spanish": "gustar", "translation": "to like"}, {"spanish": "querer", "translation": "to want"}, {"spanish": "necesitar", "translation": "to need"}, {"spanish": "comprar", "translation": "to buy"}, {"spanish": "pagar", "translation": "to pay"}, {"spanish": "buscar", "translation": "to look for"}, {"spanish": "saber / conocer", "translation": "to know"}, {"spanish": "ayudar", "translation": "to help"}, {"spanish": "yo", "translation": "I"}, {"spanish": "tú", "translation": "you (informal)"}, {"spanish": "él", "translation": "he"}, {"spanish": "ella", "translation": "she"}, {"spanish": "nosotros/as", "translation": "we"}, {"spanish": "vosotros/as / ustedes", "translation": "you (plural)"}, {"spanish": "ellos/as", "translation": "they"}, {"spanish": "esto / este / esta", "translation": "this"}, {"spanish": "eso / ese / esa", "translation": "that"}, {"spanish": "¿quién?", "translation": "who?"}, {"spanish": "¿qué?", "translation": "what?"}, {"spanish": "¿dónde?", "translation": "where?"}, {"spanish": "¿cuándo?", "translation": "when?"}, {"spanish": "¿por qué?", "translation": "why?"}, {"spanish": "¿cómo?", "translation": "how?"}, {"spanish": "¿cuánto?", "translation": "how much?"}, {"spanish": "¿cuántos?", "translation": "how many?"}, {"spanish": "porque", "translation": "because"}, {"spanish": "y", "translation": "and"}, {"spanish": "o", "translation": "or"}, {"spanish": "pero", "translation": "but"}, {"spanish": "con", "translation": "with"}, {"spanish": "sin", "translation": "without"}, {"spanish": "en / dentro de", "translation": "in"}, {"spanish": "sobre / encima de", "translation": "on"}, {"spanish": "debajo de", "translation": "under"}, {"spanish": "en / a", "translation": "at"}, {"spanish": "de / desde", "translation": "from"}, {"spanish": "a / hacia", "translation": "to"}, {"spanish": "aquí", "translation": "here"}, {"spanish": "allí", "translation": "there"}, {"spanish": "muy", "translation": "very"}, {"spanish": "también", "translation": "also"}, {"spanish": "solo", "translation": "only"}, {"spanish": "todo", "translation": "all"}, {"spanish": "nada", "translation": "nothing"}, {"spanish": "algo", "translation": "something"}, {"spanish": "otra vez", "translation": "again"}, {"spanish": "siempre", "translation": "always"}, {"spanish": "a veces", "translation": "sometimes"}, {"spanish": "nunca", "translation": "never"}, {"spanish": "hoy estoy ocupado/a", "translation": "today I am busy"}, {"spanish": "me gustaría…", "translation": "I would like…"}, {"spanish": "¿cuánto cuesta?", "translation": "how much does it cost?"}, {"spanish": "¿dónde está el baño?", "translation": "where is the toilet?"}, {"spanish": "necesito ayuda", "translation": "I need help"}, {"spanish": "estoy perdido/a", "translation": "I am lost"}, {"spanish": "¿puedes ayudarme?", "translation": "can you help me?"}, {"spanish": "quisiera un café", "translation": "I would like a coffee"}, {"spanish": "no lo sé", "translation": "I don’t know"}, {"spanish": "estoy aprendiendo inglés", "translation": "I am learning English"}];
  const defaultCards = () => (LANGUAGE === "en" ? DEFAULT_EN : DEFAULT_DE).map(c => ({id: makeId(), ...c}));
  const THEME_KEY = "lingua.theme.v1";
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  let cards = [];
  let theme = localStorage.getItem(THEME_KEY) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let deck = [];
  let index = 0;
  let checked = false;
  function loadMissedIds() {
    try { return new Set(JSON.parse(localStorage.getItem(MISSED_KEY()) || "[]")); }
    catch { return new Set(); }
  }
  let session = { correct: 0, wrong: 0, missedIds: loadMissedIds() };
  function persistMissedIds() {
    try { localStorage.setItem(MISSED_KEY(), JSON.stringify([...session.missedIds])); } catch {}
  }
  let toastTimer;

  const els = {
    themeToggle: $("#themeToggle"), exportBtn: $("#exportBtn"), importBtn: $("#importBtn"), importFile: $("#importFile"),
    totalStat: $("#totalStat"), accuracyStat: $("#accuracyStat"), errorsStat: $("#errorsStat"), cardCountBadge: $("#cardCountBadge"),
    tabs: $$(".tab"), views: { home: $("#homeView"), study: $("#studyView"), cards: $("#cardsView"), add: $("#addView") },
    shuffleBtn: $("#shuffleBtn"), studyMode: $("#studyMode"), progressText: $("#progressText"), studyEmpty: $("#studyEmpty"),
    quizCard: $("#quizCard"), cardPosition: $("#cardPosition"), promptText: $("#promptText"), answerForm: $("#answerForm"),
    answerInput: $("#answerInput"), checkBtn: $("#checkBtn"), feedback: $("#feedback"), nextBtn: $("#nextBtn"),
    sessionScore: $("#sessionScore"), searchInput: $("#searchInput"), cardsEmpty: $("#cardsEmpty"), cardList: $("#cardList"),
    cardForm: $("#cardForm"), editId: $("#editId"), spanishInput: $("#spanishInput"), translationInput: $("#translationInput"),
    formTitle: $("#formTitle"), saveCardBtn: $("#saveCardBtn"), cancelEditBtn: $("#cancelEditBtn"), toast: $("#toast"), studyTitle: $("#studyTitle"), studyEyebrow: $("#studyEyebrow")
  };

  function loadCards() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY()) || "[]");
      return Array.isArray(parsed) ? parsed.filter(c => c && typeof c.id === "string" && typeof c.spanish === "string" && typeof c.translation === "string") : [];
    } catch { return []; }
  }
  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY(), JSON.stringify(cards));
      $("#saveStatus").textContent = "Guardado en este dispositivo";
    } catch {
      $("#saveStatus").textContent = "No se pudo guardar";
      showToast("No hay espacio disponible para guardar los cambios.");
    }
  }
  function normalize(text) {
    return text.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[¿?¡!.,;:¡'"]/g, "").replace(/\s+/g, " ");
  }
  function makeId() {
    return globalThis.crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2500);
  }
  function setTheme(next) {
    theme = next;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.language = LANGUAGE;
    els.themeToggle.textContent = theme === "dark" ? "☀" : "☾";
    els.themeToggle.setAttribute("aria-label", theme === "dark" ? "Activar tema claro" : "Activar tema oscuro");
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#11131d" : (LANGUAGE === "en" ? "#eff6ff" : "#f7f8fc");
    localStorage.setItem(THEME_KEY, theme);
  }
  function switchView(view) {
    if (view === "errors") { els.studyMode.value = "errors"; view = "study"; }
    else if (view === "study") els.studyMode.value = "all";
    Object.entries(els.views).forEach(([name, node]) => node.hidden = name !== view);
    els.tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
    if (view === "cards") renderList();
    if (view === "study") { els.studyTitle.textContent = LANGUAGE === "en" ? (els.studyMode.value === "errors" ? "Review your mistakes" : "Translate the words") : (els.studyMode.value === "errors" ? "Repasa tus errores" : "Translate the words"); els.studyEyebrow.textContent = LANGUAGE === "en" ? (els.studyMode.value === "errors" ? "REVIEW MODE" : "TEST MODE") : (els.studyMode.value === "errors" ? "MODO REPASO" : "MODO TEST"); startDeck(false); }
    if (view === "add") setTimeout(() => els.spanishInput.focus({ preventScroll: true }), 80);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function updateStats() {
    els.totalStat.textContent = cards.length;
    if (els.cardCountBadge) els.cardCountBadge.textContent = cards.length;
    els.accuracyStat.textContent = session.correct + session.wrong ? `${Math.round(session.correct / (session.correct + session.wrong) * 100)}%` : "—";
    els.errorsStat.textContent = session.missedIds.size;
    els.sessionScore.textContent = LANGUAGE === "en" ? `${session.correct} correct · ${session.wrong} wrong` : `${session.correct} aciertos · ${session.wrong} fallos`;
  }
  function newSession() {
    session = { correct: 0, wrong: 0, missedIds: loadMissedIds() };
    updateStats();
  }
  function currentDeck() {
    const base = els.studyMode.value === "errors" ? cards.filter(c => session.missedIds.has(c.id)) : cards;
    return base.slice();
  }
  function startDeck(shuffle = false) {
    deck = currentDeck();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    index = 0;
    checked = false;
    renderStudy();
  }
  function renderStudy() {
    deck = deck.filter(c => cards.some(saved => saved.id === c.id));
    const mode = els.studyMode.value;
    const fresh = currentDeck();
    // Keep the order chosen by shuffle until the deck has been exhausted.
    if (!deck.length || !deck.some(c => fresh.some(f => f.id === c.id)) || index >= deck.length) {
      deck = fresh;
      index = 0;
    } else {
      deck = deck.filter(c => fresh.some(f => f.id === c.id));
    }
    const hasCards = deck.length > 0 && cards.length > 0;
    els.studyEmpty.hidden = hasCards;
    els.quizCard.hidden = !hasCards;
    els.progressText.textContent = hasCards ? `${Math.min(index + 1, deck.length)} / ${deck.length}` : "0 / 0";
    if (!hasCards) {
      els.studyEmpty.querySelector("h3").textContent = cards.length ? (mode === "errors" ? "¡Todo al día!" : "No hay tarjetas para estudiar") : "Tu primera tarjeta te espera";
      els.studyEmpty.querySelector("p").textContent = cards.length ? (mode === "errors" ? "No has fallado ninguna tarjeta en esta sesión." : "Añade una tarjeta para empezar.") : "Añade una palabra o frase para empezar a practicar.";
      els.studyEmpty.querySelector("button").hidden = cards.length > 0;
      updateStats();
      return;
    }
    if (index >= deck.length) index = 0;
    const card = deck[index];
    els.cardPosition.textContent = `Tarjeta ${index + 1}`;
    els.promptText.textContent = card.spanish;
    els.answerInput.value = "";
    els.answerInput.disabled = false;
    els.checkBtn.disabled = false;
    els.checkBtn.hidden = false;
    els.checkBtn.innerHTML = 'Comprobar <span>↵</span>';
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.nextBtn.hidden = true;
    checked = false;
    updateStats();
  }
  function validateAnswer(event) {
    event?.preventDefault();
    if (checked || !deck[index]) return;
    const answer = els.answerInput.value.trim();
    if (!answer) { els.answerInput.focus(); return; }
    checked = true;
    const card = deck[index];
    const variants = [card.translation, ...(Array.isArray(card.alternatives) ? card.alternatives : [])];
    const normAnswer = normalize(answer);
    const correct = variants.some(v => String(v).split(/[|;]/).some(a => normalize(a) === normAnswer)) ||
      (LANGUAGE === "en" && ["bye","goodbye","good bye"].includes(normAnswer) && /\b(bye|goodbye|good bye)\b/i.test(card.translation));
    if (correct) {
      session.correct++;
      // Al acertar una tarjeta en el repaso, deja de figurar como error pendiente.
      if (els.studyMode.value === "errors") { session.missedIds.delete(card.id); persistMissedIds(); }
    } else {
      session.wrong++;
      session.missedIds.add(card.id);
      persistMissedIds();
    }
    els.feedback.hidden = false;
    els.feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
    // Mostrar siempre la forma correcta ayuda a fijar la palabra, también cuando se acierta.
    els.feedback.innerHTML = correct
      ? `<strong>${LANGUAGE === "en" ? "Correct! ✨" : "¡Correcto! ✨"}</strong> ${LANGUAGE === "en" ? "Good memory. The correct answer is:" : "Buena memoria. La palabra correcta es:"} <b class="answer-reveal">${escapeHTML(card.translation)}</b>`
      : `<strong>${LANGUAGE === "en" ? "Not quite." : "No del todo."}</strong> ${LANGUAGE === "en" ? "The correct answer is:" : "La respuesta correcta es:"} <b class="answer-reveal">${escapeHTML(card.translation)}</b>`;
    els.answerInput.disabled = true;
    els.checkBtn.hidden = true;
    els.nextBtn.hidden = false;
    els.nextBtn.textContent = index === deck.length - 1 ? "Terminar sesión ✓" : "Siguiente tarjeta →";
    updateStats();
  }
  function nextCard() {
    if (!checked) return;
    if (index >= deck.length - 1) {
      showToast("Sesión completada. ¡Buen trabajo!");
      startDeck(false);
      return;
    }
    index++;
    renderStudy();
    els.answerInput.focus({ preventScroll: true });
  }
  function renderList() {
    const query = normalize(els.searchInput.value);
    const filtered = cards.filter(c => normalize(c.spanish).includes(query) || normalize(c.translation).includes(query));
    els.cardList.innerHTML = "";
    els.cardsEmpty.hidden = cards.length > 0;
    if (!cards.length) {
      els.cardsEmpty.querySelector("h3").textContent = "Aún no hay tarjetas";
      els.cardsEmpty.querySelector("p").textContent = "Guarda vocabulario que quieras recordar.";
    } else if (!filtered.length) {
      els.cardsEmpty.hidden = false;
      els.cardsEmpty.querySelector("h3").textContent = "No hay coincidencias";
      els.cardsEmpty.querySelector("p").textContent = "Prueba con otra palabra o traducción.";
    }
    filtered.forEach(card => {
      const row = document.createElement("article");
      row.className = "saved-card";
      const main = document.createElement("div");
      main.className = "saved-card-main";
      const source = document.createElement("strong"); source.textContent = card.spanish;
      const target = document.createElement("span"); target.textContent = card.translation;
      main.append(source, target);
      const actions = document.createElement("div"); actions.className = "saved-card-actions";
      const edit = document.createElement("button"); edit.className = "small-action"; edit.type = "button"; edit.title = "Editar tarjeta"; edit.setAttribute("aria-label", `Editar ${card.spanish}`); edit.textContent = "✎";
      edit.addEventListener("click", () => editCard(card.id));
      const del = document.createElement("button"); del.className = "small-action delete"; del.type = "button"; del.title = "Eliminar tarjeta"; del.setAttribute("aria-label", `Eliminar ${card.spanish}`); del.textContent = "×";
      del.addEventListener("click", () => deleteCard(card.id));
      actions.append(edit, del); row.append(main, actions); els.cardList.append(row);
    });
  }
  function editCard(id) {
    const card = cards.find(c => c.id === id);
    if (!card) return;
    els.editId.value = card.id;
    els.spanishInput.value = card.spanish;
    els.translationInput.value = card.translation;
    els.formTitle.textContent = "Editar tarjeta";
    els.saveCardBtn.innerHTML = 'Guardar cambios <span>→</span>';
    els.cancelEditBtn.hidden = false;
    switchView("add");
  }
  function resetEditor() {
    els.cardForm.reset();
    els.editId.value = "";
    els.formTitle.textContent = "Nueva tarjeta";
    els.saveCardBtn.innerHTML = 'Guardar tarjeta <span>→</span>';
    els.cancelEditBtn.hidden = true;
  }
  function deleteCard(id) {
    const card = cards.find(c => c.id === id);
    if (!card || !confirm(`¿Eliminar la tarjeta «${card.spanish}»? Esta acción no se puede deshacer.`)) return;
    cards = cards.filter(c => c.id !== id);
    session.missedIds.delete(id);
    persistMissedIds();
    persist(); renderList(); startDeck(false); updateStats();
    showToast("Tarjeta eliminada.");
  }
  function escapeHTML(value) {
    return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }
  function exportJSON() {
    const payload = { app: "Lingua", version: 1, exportedAt: new Date().toISOString(), cards };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `lingua-tarjetas-${new Date().toISOString().slice(0, 10)}.json`; a.click();
    URL.revokeObjectURL(url);
    showToast("Exportación preparada.");
  }
  async function importJSON(file) {
    if (!file) return;
    try {
      const raw = JSON.parse(await file.text());
      const imported = Array.isArray(raw) ? raw : raw.cards;
      if (!Array.isArray(imported)) throw new Error("El JSON no contiene una lista de tarjetas.");
      const clean = imported.map(item => {
        if (!item || typeof item.spanish !== "string" || typeof item.translation !== "string" || !item.spanish.trim() || !item.translation.trim()) return null;
        return { id: makeId(), spanish: item.spanish.trim().slice(0, 500), translation: item.translation.trim().slice(0, 500) };
      }).filter(Boolean);
      if (!clean.length) throw new Error("No se encontraron tarjetas válidas.");
      const replace = confirm(`Se han encontrado ${clean.length} tarjetas válidas.\nAceptar = reemplazar las actuales.\nCancelar = añadirlas a las actuales.`);
      cards = replace ? clean : [...cards, ...clean];
      persist(); newSession(); startDeck(false); renderList();
      showToast(`${clean.length} tarjetas importadas.`);
    } catch (error) {
      showToast(error instanceof SyntaxError ? "El archivo no es un JSON válido." : (error.message || "No se pudo importar el archivo."));
    } finally { els.importFile.value = ""; }
  }

  const exportExcelBtn = $("#exportExcelBtn");
  if (exportExcelBtn) exportExcelBtn.addEventListener("click", () => {
    if (!window.XLSX) { showToast("El lector de Excel necesita conexión a internet."); return; }
    const rows = [["Español", LANGUAGE === "en" ? "English" : "Alemán"], ...cards.map(card => [card.spanish, card.translation])];
    const sheet = XLSX.utils.aoa_to_sheet(rows);
    sheet["!cols"] = [{ wch: 34 }, { wch: 34 }];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, LANGUAGE === "en" ? "English A1" : "Vocabulario A1");
    XLSX.writeFile(workbook, `vocabulario_${LANGUAGE === "en" ? "ingles" : "aleman"}_actualizado_${new Date().toISOString().slice(0,10)}.xlsx`);
    showToast("Excel actualizado preparado para descargar.");
  });

  els.themeToggle.addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));
  els.exportBtn.addEventListener("click", exportJSON);
  els.importBtn.addEventListener("click", () => els.importFile.click());
  els.importFile.addEventListener("change", () => importJSON(els.importFile.files[0]));
  els.tabs.forEach(tab => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  $$("[data-go]").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.go)));
  els.shuffleBtn.addEventListener("click", () => { startDeck(true); showToast("Tarjetas barajadas."); });
  els.studyMode.addEventListener("change", () => startDeck(false));
  els.answerForm.addEventListener("submit", validateAnswer);
  els.nextBtn.addEventListener("click", nextCard);
  els.searchInput.addEventListener("input", renderList);
  els.cancelEditBtn.addEventListener("click", () => { resetEditor(); switchView("cards"); });
  els.cardForm.addEventListener("submit", event => {
    event.preventDefault();
    const spanish = els.spanishInput.value.trim();
    const translation = els.translationInput.value.trim();
    if (!spanish || !translation) return;
    const editingId = els.editId.value;
    if (editingId) {
      const card = cards.find(c => c.id === editingId);
      if (card) { card.spanish = spanish; card.translation = translation; }
      showToast("Tarjeta actualizada.");
    } else {
      cards.unshift({ id: makeId(), spanish, translation });
      showToast("Tarjeta guardada.");
    }
    persist(); resetEditor(); newSession(); startDeck(false); renderList(); switchView("cards");
  });

  // La tecla Enter valida el formulario; después de corregir, Enter pasa a la siguiente.
  els.answerInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && checked) { event.preventDefault(); nextCard(); }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Enter" && !els.quizCard.hidden && checked && document.activeElement !== els.answerInput && !els.nextBtn.hidden) nextCard();
  });


  function activateProfile(name) {
    activeUser = name;
    localStorage.setItem("lingua.activeUser.v1", name);
    LANGUAGE = localStorage.getItem(`lingua.${encodeURIComponent(name)}.language.v1`) === "en" ? "en" : "de";
    const gate = $("#profileGate"), shell = $("#appShell");
    if (gate) gate.hidden = true;
    if (shell) shell.hidden = false;
    const profileBtn = $("#profileSwitch");
    if (profileBtn) profileBtn.textContent = `${name} ▾`;
    cards = localStorage.getItem(STORAGE_KEY()) ? loadCards() : defaultCards();
    if (!localStorage.getItem(STORAGE_KEY())) persist();
    session = { correct: 0, wrong: 0, missedIds: loadMissedIds() };
    updateStats(); startDeck(false); renderList();
  }
  function setupProfiles() {
    const gate = $("#profileGate"), shell = $("#appShell");
    if (gate) gate.hidden = false;
    if (shell) shell.hidden = true;
    $$("#profileGate [data-profile]").forEach(button => button.addEventListener("click", () => {
      const name = button.dataset.profile;
      localStorage.setItem("lingua.activeUser.v1", name);
      activateProfile(name);
    }));
    const switcher = $("#profileSwitch");
    if (switcher) switcher.addEventListener("click", () => { if(gate) gate.hidden=false; if(shell) shell.hidden=true; });
  }

  setupProfiles();
  setTheme(theme);
  updateStats();
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => console.warn("Service Worker no disponible en este contexto.")));
  }
})();
