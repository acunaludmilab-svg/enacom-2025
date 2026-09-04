/* =========================================================
   ENACOM 2025 / 2026
   Interactividad, idiomas, accesibilidad,
   carrusel, quiz, línea histórica y cuenta regresiva
========================================================= */


/* =========================================================
   ACORDEÓN
========================================================= */

const accordionButtons =
  document.querySelectorAll(".subthread-button");

accordionButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const article = button.closest(".subthread");

    if (!article) return;

    const content =
      article.querySelector(".subthread-content");

    if (!content) return;

    const isOpen =
      article.classList.contains("open");

    article.classList.toggle("open");

    button.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    if (!isOpen) {

      content.style.maxHeight =
        content.scrollHeight + "px";

    } else {

      content.style.maxHeight =
        "0px";

    }

  });

});


/* Abrir correctamente los acordeones que ya están abiertos */

document
  .querySelectorAll(".subthread.open")
  .forEach((article) => {

    const content =
      article.querySelector(".subthread-content");

    if (!content) return;

    content.style.maxHeight =
      content.scrollHeight + "px";

  });



/* =========================================================
   CARRUSEL
========================================================= */

const slides =
  document.querySelectorAll(".carousel-slide");

const prevButton =
  document.querySelector(".carousel-control.prev");

const nextButton =
  document.querySelector(".carousel-control.next");

const dotsContainer =
  document.querySelector(".carousel-dots");

let currentSlide = 0;


if (
  slides.length > 0 &&
  dotsContainer &&
  prevButton &&
  nextButton
) {

  slides.forEach((slide, index) => {

    const dot =
      document.createElement("button");

    dot.className =
      "carousel-dot";

    dot.type =
      "button";

    dot.setAttribute(
      "aria-label",
      `Ver fotografía ${index + 1}`
    );

    dot.addEventListener("click", () => {

      showSlide(index);

    });

    dotsContainer.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(".carousel-dot");


  function showSlide(index) {

    if (!slides.length) return;

    if (index < 0) {

      index =
        slides.length - 1;

    }

    if (index >= slides.length) {

      index = 0;

    }

    currentSlide =
      index;


    slides.forEach((slide, i) => {

      slide.classList.toggle(
        "active",
        i === currentSlide
      );

    });


    dots.forEach((dot, i) => {

      dot.classList.toggle(
        "active",
        i === currentSlide
      );

    });

  }


  prevButton.addEventListener("click", () => {

    showSlide(
      currentSlide - 1
    );

  });


  nextButton.addEventListener("click", () => {

    showSlide(
      currentSlide + 1
    );

  });


  showSlide(0);


  let carouselTimer =
    setInterval(() => {

      showSlide(
        currentSlide + 1
      );

    }, 6500);


  const carousel =
    document.querySelector(".carousel");


  if (carousel) {

    carousel.addEventListener(
      "mouseenter",
      () => {

        clearInterval(
          carouselTimer
        );

      }
    );


    carousel.addEventListener(
      "mouseleave",
      () => {

        carouselTimer =
          setInterval(() => {

            showSlide(
              currentSlide + 1
            );

          }, 6500);

      }
    );

  }

}



/* =========================================================
   IDIOMAS
========================================================= */

const translations = {

  es: {

    navHistoria:
      "Historia ENACOM",

    navEjes:
      "Ejes temáticos",

    navPonencias:
      "Ponencias",

    navInteractivo:
      "Participá",

    navRedes:
      "Redes",

    kicker:
      "XXII Encuentro Nacional de Carreras de Comunicación",

    heroTitle:
      "Tiempo de comunicación. Diálogos sobre pasado y presente en un mundo acelerado",

    heroText:
      "Un recorrido por los principales debates, ponencias y producciones del ENACOM 2025, realizado en San Luis.",

    heroGallery:
      "Ver fotografías",

    heroExplore:
      "Explorar el encuentro",

    heroImageCaption:
      "Producciones desarrolladas a partir de los debates y problemáticas abordadas durante el encuentro.",

    countdownTitle:
      "Días para ENACOM 2026",

    countdownLocation:
      "Corrientes Capital · 4, 5 y 6 de noviembre",

    countdownTheme:
      "Pensar la comunicación y la democracia en las encrucijadas del siglo XXI",

    countdownDays:
      "Días",

    countdownHours:
      "Horas",

    countdownMinutes:
      "Minutos",

    countdownSeconds:
      "Segundos",

    countdownComplete:
      "El ENACOM 2026 ya comenzó.",

    galleryKicker:
      "El encuentro en imágenes",

    galleryTitle:
      "ENACOM 2025 en San Luis",

    galleryText:
      "Una mirada visual sobre las jornadas realizadas en la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis.",

    photoNote:
      "Las fotografías se presentan con identificación de su fuente y autoría.",

    timelineKicker:
      "Recorrido histórico",

    timelineTitle:
      "La historia del ENACOM",

    timelineIntro:
      "Elegí un hito para recorrer la construcción colectiva de este encuentro federal.",

    axesKicker:
      "Recorrido conceptual",

    axesTitle:
      "Ejes temáticos",

    axesIntro:
      "El recorrido reúne algunas de las principales problemáticas abordadas durante el ENACOM 2025.",

    axisMainTitle:
      "Crisis, comunicación y democracia",

    axisMainText:
      "Este eje aborda la relación entre las crisis socioeconómicas y políticas, la comunicación pública, el periodismo, la circulación de información y los desafíos democráticos.",

    problemsKicker:
      "Debates contemporáneos",

    problemsTitle:
      "Problemáticas y debates",

    problemsIntro:
      "Dos de los temas trabajados en nuestro recorrido sobre comunicación, periodismo y democracia.",

    problemA:
      "Ataques a comunicadores y periodistas",

    problemAText:
      "Esta problemática aborda las formas de hostigamiento, censura, violencia simbólica y presión pública que afectan el trabajo periodístico y el derecho social a estar informado.",

    problemB:
      "Desinformación, periodismo y democracia",

    problemBText:
      "La circulación de fake news, la inteligencia artificial y la desinformación transforman la forma en que se produce, distribuye y recibe información.",

    viewInfographic:
      "Ver infografía completa",

    viewPdf:
      "Ver material completo",

    speakersKicker:
      "Voces del encuentro",

    speakersTitle:
      "Ponencias destacadas",

    speakersIntro:
      "Algunas de las mesas y especialistas que participaron del ENACOM 2025.",

    featuredKicker:
      "Mesa panel destacada",

    featuredTitle:
      "¿Qué hacer en tiempos de convergencia e inteligencias artificiales?",

    featuredText1:
      "Una de las mesas más convocantes del ENACOM 2025 reunió a Martín Becerra (UNQ), Flavia Costa (UBA) y Javier Cristiano (UNC), con la coordinación de Maximiliano Peret (UNICEN).",

    featuredText2:
      "Durante el encuentro se abordaron los desafíos éticos, políticos y culturales que plantea la inteligencia artificial en el campo de la comunicación.",

    featuredQuote:
      "La comunicación no puede quedar al margen de las transformaciones tecnológicas.",

    quizKicker:
      "Participá",

    quizTitle:
      "¿Cuánto sabés sobre comunicación?",

    quizIntro:
      "Poné a prueba lo que aprendiste durante el recorrido.",

    nextQuestion:
      "Siguiente pregunta",

    socialKicker:
      "Seguí el encuentro",

    socialTitle:
      "ENACOM también está en redes",

    socialText:
      "Encontrá más información, fotografías y novedades sobre el Encuentro Nacional de Carreras de Comunicación.",

    accessKicker:
      "Accesibilidad",

    accessTitle:
      "Una página para todas las personas",

    accessText:
      "Utilizá estas herramientas para adaptar la experiencia de lectura según tus necesidades.",

    increaseText:
      "Aumentar texto",

    decreaseText:
      "Disminuir texto",

    contrast:
      "Alto contraste",

    reset:
      "Restablecer",

    closing:
      "ENACOM 2025 invita a pensar el tiempo de la comunicación como una trama viva: memoria, presente, conflicto, tecnología y derecho a la información en diálogo.",

    footer:
      "Trabajo académico realizado por estudiantes de la carrera de Comunicación Social de la UNNE."

  },


  en: {

    navHistoria:
      "ENACOM History",

    navEjes:
      "Thematic axes",

    navPonencias:
      "Featured talks",

    navInteractivo:
      "Take part",

    navRedes:
      "Social media",

    kicker:
      "22nd National Meeting of Communication Careers",

    heroTitle:
      "A time for communication. Dialogues between past and present in an accelerated world",

    heroText:
      "A journey through the main debates, talks and productions of ENACOM 2025, held in San Luis.",

    heroGallery:
      "View photographs",

    heroExplore:
      "Explore the event",

    heroImageCaption:
      "Productions developed from the debates and issues addressed during the event.",

    countdownTitle:
      "Days until ENACOM 2026",

    countdownLocation:
      "Corrientes Capital · November 4, 5 and 6",

    countdownTheme:
      "Thinking communication and democracy at the crossroads of the 21st century",

    countdownDays:
      "Days",

    countdownHours:
      "Hours",

    countdownMinutes:
      "Minutes",

    countdownSeconds:
      "Seconds",

    countdownComplete:
      "ENACOM 2026 has begun.",

    galleryKicker:
      "The event in images",

    galleryTitle:
      "ENACOM 2025 in San Luis",

    galleryText:
      "A visual look at the sessions held at the Faculty of Human Sciences of the National University of San Luis.",

    photoNote:
      "Photographs are presented with their source and authorship clearly identified.",

    timelineKicker:
      "Historical journey",

    timelineTitle:
      "The history of ENACOM",

    timelineIntro:
      "Choose a milestone to explore the collective history of this federal gathering.",

    axesKicker:
      "Conceptual journey",

    axesTitle:
      "Thematic axes",

    axesIntro:
      "The journey brings together some of the main issues addressed during ENACOM 2025.",

    axisMainTitle:
      "Crisis, communication and democracy",

    axisMainText:
      "This axis explores the relationship between socioeconomic and political crises, public communication, journalism, information circulation and democratic challenges.",

    problemsKicker:
      "Contemporary debates",

    problemsTitle:
      "Issues and debates",

    problemsIntro:
      "Two of the topics explored in our journey through communication, journalism and democracy.",

    problemA:
      "Attacks against communicators and journalists",

    problemAText:
      "This topic addresses harassment, censorship, symbolic violence and public pressure affecting journalistic work and the social right to information.",

    problemB:
      "Disinformation, journalism and democracy",

    problemBText:
      "Fake news, artificial intelligence and disinformation are transforming how information is produced, distributed and received.",

    viewInfographic:
      "View complete infographic",

    viewPdf:
      "View complete material",

    speakersKicker:
      "Voices of the event",

    speakersTitle:
      "Featured talks",

    speakersIntro:
      "Some of the panels and specialists who participated in ENACOM 2025.",

    featuredKicker:
      "Featured panel",

    featuredTitle:
      "What should we do in times of convergence and artificial intelligence?",

    featuredText1:
      "One of the most attended panels of ENACOM 2025 brought together Martín Becerra, Flavia Costa and Javier Cristiano, coordinated by Maximiliano Peret.",

    featuredText2:
      "The panel explored the ethical, political and cultural challenges posed by artificial intelligence in communication.",

    featuredQuote:
      "Communication cannot remain outside technological transformations.",

    quizKicker:
      "Take part",

    quizTitle:
      "How much do you know about communication?",

    quizIntro:
      "Test what you learned throughout the journey.",

    nextQuestion:
      "Next question",

    socialKicker:
      "Follow the event",

    socialTitle:
      "ENACOM is also on social media",

    socialText:
      "Find more information, photographs and news about the National Meeting of Communication Careers.",

    accessKicker:
      "Accessibility",

    accessTitle:
      "A page for everyone",

    accessText:
      "Use these tools to adapt the reading experience according to your needs.",

    increaseText:
      "Increase text",

    decreaseText:
      "Decrease text",

    contrast:
      "High contrast",

    reset:
      "Reset",

    closing:
      "ENACOM 2025 invites us to think of communication time as a living fabric: memory, present, conflict, technology and the right to information in dialogue.",

    footer:
      "Academic work carried out by students of Social Communication at UNNE."

  },


  pt: {

    navHistoria:
      "História do ENACOM",

    navEjes:
      "Eixos temáticos",

    navPonencias:
      "Palestras",

    navInteractivo:
      "Participe",

    navRedes:
      "Redes",

    kicker:
      "XXII Encontro Nacional de Carreiras de Comunicação",

    heroTitle:
      "Tempo de comunicação. Diálogos entre passado e presente em um mundo acelerado",

    heroText:
      "Um percurso pelos principais debates, palestras e produções do ENACOM 2025, realizado em San Luis.",

    heroGallery:
      "Ver fotografias",

    heroExplore:
      "Explorar o encontro",

    heroImageCaption:
      "Produções desenvolvidas a partir dos debates e problemáticas abordadas durante o encontro.",

    countdownTitle:
      "Dias para o ENACOM 2026",

    countdownLocation:
      "Corrientes Capital · 4, 5 e 6 de novembro",

    countdownTheme:
      "Pensar a comunicação e a democracia nas encruzilhadas do século XXI",

    countdownDays:
      "Dias",

    countdownHours:
      "Horas",

    countdownMinutes:
      "Minutos",

    countdownSeconds:
      "Segundos",

    countdownComplete:
      "O ENACOM 2026 já começou.",

    galleryKicker:
      "O encontro em imagens",

    galleryTitle:
      "ENACOM 2025 em San Luis",

    galleryText:
      "Um olhar visual sobre as jornadas realizadas na Faculdade de Ciências Humanas da Universidade Nacional de San Luis.",

    photoNote:
      "As fotografias apresentam sua fonte e autoria identificadas.",

    timelineKicker:
      "Percurso histórico",

    timelineTitle:
      "A história do ENACOM",

    timelineIntro:
      "Escolha um marco para percorrer a construção coletiva deste encontro federal.",

    axesKicker:
      "Percurso conceitual",

    axesTitle:
      "Eixos temáticos",

    axesIntro:
      "O percurso reúne algumas das principais problemáticas abordadas durante o ENACOM 2025.",

    axisMainTitle:
      "Crise, comunicação e democracia",

    axisMainText:
      "Este eixo aborda a relação entre as crises socioeconômicas e políticas, a comunicação pública, o jornalismo, a circulação da informação e os desafios democráticos.",

    problemsKicker:
      "Debates contemporâneos",

    problemsTitle:
      "Problemáticas e debates",

    problemsIntro:
      "Dois dos temas trabalhados em nosso percurso sobre comunicação, jornalismo e democracia.",

    problemA:
      "Ataques a comunicadores e jornalistas",

    problemAText:
      "Esta problemática aborda assédio, censura, violência simbólica e pressão pública que afetam o trabalho jornalístico e o direito social à informação.",

    problemB:
      "Desinformação, jornalismo e democracia",

    problemBText:
      "As fake news, a inteligência artificial e a desinformação transformam a forma como a informação é produzida, distribuída e recebida.",

    viewInfographic:
      "Ver infográfico completo",

    viewPdf:
      "Ver material completo",

    speakersKicker:
      "Vozes do encontro",

    speakersTitle:
      "Palestras destacadas",

    speakersIntro:
      "Algumas das mesas e especialistas que participaram do ENACOM 2025.",

    featuredKicker:
      "Mesa de destaque",

    featuredTitle:
      "O que fazer em tempos de convergência e inteligências artificiais?",

    featuredText1:
      "Uma das mesas mais concorridas do ENACOM 2025 reuniu especialistas de diferentes universidades.",

    featuredText2:
      "Durante o encontro foram abordados os desafios éticos, políticos e culturais colocados pela inteligência artificial.",

    featuredQuote:
      "A comunicação não pode ficar à margem das transformações tecnológicas.",

    quizKicker:
      "Participe",

    quizTitle:
      "Quanto você sabe sobre comunicação?",

    quizIntro:
      "Teste o que você aprendeu durante o percurso.",

    nextQuestion:
      "Próxima pergunta",

    socialKicker:
      "Acompanhe o encontro",

    socialTitle:
      "O ENACOM também está nas redes",

    socialText:
      "Encontre mais informações, fotografias e novidades sobre o Encontro Nacional de Carreiras de Comunicação.",

    accessKicker:
      "Acessibilidade",

    accessTitle:
      "Uma página para todas as pessoas",

    accessText:
      "Use estas ferramentas para adaptar a experiência de leitura de acordo com suas necessidades.",

    increaseText:
      "Aumentar texto",

    decreaseText:
      "Diminuir texto",

    contrast:
      "Alto contraste",

    reset:
      "Restabelecer",

    closing:
      "O ENACOM 2025 convida a pensar o tempo da comunicação como uma trama viva: memória, presente, conflito, tecnologia e direito à informação em diálogo.",

    footer:
      "Trabalho acadêmico realizado por estudantes de Comunicação Social da UNNE."

  }

};



/* =========================================================
   CAMBIO DE IDIOMA
========================================================= */

let savedLanguage =
  localStorage.getItem(
    "enacomLanguage"
  ) || "es";


function changeLanguage(lang) {

  if (!translations[lang]) {

    lang = "es";

  }


  savedLanguage =
    lang;


  localStorage.setItem(
    "enacomLanguage",
    lang
  );


  document.documentElement.lang =
    lang;


  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.getAttribute(
          "data-i18n"
        );


      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        element.textContent =
          translations[lang][key];

      }

    });


  document
    .querySelectorAll(".language-btn")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


  renderTimeline(lang);

  updateCountdown();

}


document
  .querySelectorAll(".language-btn")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        changeLanguage(
          button.dataset.lang
        );

      }
    );

  });



/* =========================================================
   ACCESIBILIDAD
========================================================= */

const increaseButton =
  document.querySelector(
    "[data-action='increase-text']"
  );

const decreaseButton =
  document.querySelector(
    "[data-action='decrease-text']"
  );

const contrastButton =
  document.querySelector(
    "[data-action='contrast']"
  );

const resetButton =
  document.querySelector(
    "[data-action='reset']"
  );


let textScale =
  Number(
    localStorage.getItem(
      "enacomTextScale"
    )
  ) || 1;


function applyTextScale() {

  textScale =
    Math.min(
      1.35,
      Math.max(
        0.85,
        textScale
      )
    );


  document.documentElement.style.setProperty(
    "--text-scale",
    textScale
  );


  localStorage.setItem(
    "enacomTextScale",
    textScale
  );

}


if (increaseButton) {

  increaseButton.addEventListener(
    "click",
    () => {

      textScale += 0.1;

      applyTextScale();

    }
  );

}


if (decreaseButton) {

  decreaseButton.addEventListener(
    "click",
    () => {

      textScale -= 0.1;

      applyTextScale();

    }
  );

}


if (contrastButton) {

  contrastButton.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "high-contrast"
      );


      localStorage.setItem(
        "enacomContrast",
        document.body.classList.contains(
          "high-contrast"
        )
          ? "1"
          : "0"
      );

    }
  );

}


if (
  localStorage.getItem(
    "enacomContrast"
  ) === "1"
) {

  document.body.classList.add(
    "high-contrast"
  );

}


if (resetButton) {

  resetButton.addEventListener(
    "click",
    () => {

      textScale =
        1;

      applyTextScale();


      document.body.classList.remove(
        "high-contrast"
      );


      localStorage.setItem(
        "enacomContrast",
        "0"
      );

    }
  );

}


applyTextScale();



/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

  {
    question:
      "¿En qué año se realizó el primer ENACOM?",

    options:
      [
        "1983",
        "2001",
        "2002",
        "2020"
      ],

    answer:
      2
  },


  {
    question:
      "¿Qué organización se transformó en FADECCOS en 2001?",

    options:
      [
        "UNNE",
        "AFACOS",
        "ENACOM",
        "UNSL"
      ],

    answer:
      1
  },


  {
    question:
      "¿Dónde se realizó el primer ENACOM?",

    options:
      [
        "San Luis",
        "Mendoza",
        "Olavarría",
        "Buenos Aires"
      ],

    answer:
      2
  },


  {
    question:
      "¿En qué año comenzó la virtualización por la pandemia?",

    options:
      [
        "2019",
        "2020",
        "2021",
        "2024"
      ],

    answer:
      1
  },


  {
    question:
      "¿En qué ciudad se realizó el ENACOM 2025?",

    options:
      [
        "Córdoba",
        "Mendoza",
        "San Luis",
        "Rosario"
      ],

    answer:
      2
  },


  {
    question:
      "¿Dónde se realizará el ENACOM 2026?",

    options:
      [
        "San Luis",
        "Corrientes",
        "Mendoza",
        "Córdoba"
      ],

    answer:
      1
  }

];


let currentQuestion =
  0;

let score =
  0;


const quizQuestion =
  document.getElementById(
    "quiz-question"
  );

const quizOptions =
  document.getElementById(
    "quiz-options"
  );

const quizNext =
  document.getElementById(
    "quiz-next"
  );

const quizResult =
  document.getElementById(
    "quiz-result"
  );


function renderQuestion() {

  if (
    !quizQuestion ||
    !quizOptions
  ) {

    return;

  }


  const current =
    quizQuestions[
      currentQuestion
    ];


  quizQuestion.textContent =
    current.question;


  quizOptions.innerHTML =
    "";


  current.options.forEach(
    (option, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";

      button.className =
        "quiz-option";

      button.textContent =
        option;


      button.addEventListener(
        "click",
        () => {

          const allOptions =
            quizOptions.querySelectorAll(
              ".quiz-option"
            );


          allOptions.forEach(
            (item) => {

              item.disabled =
                true;

            }
          );


          if (
            index ===
            current.answer
          ) {

            button.classList.add(
              "correct"
            );

            score++;

          } else {

            button.classList.add(
              "incorrect"
            );


            allOptions[
              current.answer
            ].classList.add(
              "correct"
            );

          }


          if (quizNext) {

            quizNext.disabled =
              false;

          }

        }
      );


      quizOptions.appendChild(
        button
      );

    }
  );


  if (quizNext) {

    quizNext.disabled =
      true;

  }

}


if (quizNext) {

  quizNext.addEventListener(
    "click",
    () => {

      currentQuestion++;


      if (
        currentQuestion <
        quizQuestions.length
      ) {

        renderQuestion();

      } else {

        quizQuestion.textContent =
          "";

        quizOptions.innerHTML =
          "";

        quizNext.disabled =
          true;


        let message;


        if (
          savedLanguage ===
          "en"
        ) {

          message =
            `You got ${score} out of ${quizQuestions.length} questions right.`;

        } else if (
          savedLanguage ===
          "pt"
        ) {

          message =
            `Você acertou ${score} de ${quizQuestions.length} perguntas.`;

        } else {

          message =
            `Acertaste ${score} de ${quizQuestions.length} preguntas.`;

        }


        if (quizResult) {

          quizResult.textContent =
            message;

        }

      }

    }
  );

}



/* =========================================================
   LÍNEA DEL TIEMPO · HISTORIA DEL ENACOM
========================================================= */

const timelineData = {

  es: [

    {
      year: "1983",

      label: "AFACOS",

      title:
        "1983 · Creación de AFACOS — Punto de inicio",

      intro:
        "En el marco del retorno de la democracia en Argentina, comienza a construirse una articulación federal entre las carreras de comunicación.",

      text:
        "Se crea la Asociación Federal de Carreras de Comunicación Social (AFACOS), que constituye el primer intento de articulación federal entre universidades para promover el intercambio académico, la investigación, la reflexión crítica sobre los medios y la formación profesional.",

      secondary:
        "Su creación sienta las bases institucionales del campo comunicacional en el país.",

      tag:
        "El comienzo"
    },


    {
      year: "2001",

      label: "FADECCOS",

      title:
        "2001 · Formalización de FADECCOS — Reorganización e institucionalización",

      intro:
        "La estructura federal se fortalece y adquiere una nueva forma institucional.",

      text:
        "AFACOS se transforma en la Federación Argentina de Carreras de Comunicación Social (FADECCOS). Este paso de «asociación» a «federación» responde al gran crecimiento de las carreras de comunicación durante los años 90 y da lugar a una estructura más amplia y representativa.",

      secondary:
        "Su objetivo central es coordinar universidades, impulsar la investigación y consolidar encuentros nacionales en un contexto de creciente relevancia social, política y tecnológica de la comunicación.",

      tag:
        "La consolidación"
    },


    {
      year: "2002",

      label: "Primer ENACOM",

      title:
        "2002 · Primer ENACOM",

      intro:
        "El encuentro nace como una propuesta federal para reunir a quienes forman parte del campo de la comunicación.",

      text:
        "Organizado por FADECCOS, se realiza en Olavarría el primer Encuentro Nacional de Carreras de Comunicación (ENACOM). Concebido para reunir a estudiantes, docentes, investigadores y graduados de todo el país, este evento fundacional instala un espacio permanente de debate.",

      secondary:
        "El encuentro aborda periodismo, medios, cultura, políticas comunicacionales y nuevas tecnologías.",

      tag:
        "El nacimiento"
    },


    {
      year: "2002–2010",

      label: "Expansión federal",

      title:
        "2002–2010 · Expansión y consolidación federal",

      intro:
        "El ENACOM comienza a recorrer el país y amplía la dimensión federal del intercambio académico.",

      text:
        "El ENACOM comienza a rotar por distintas provincias con el objetivo de descentralizar la producción de conocimiento fuera de Buenos Aires.",

      secondary:
        "Durante este período crece la participación, se suman investigadores latinoamericanos, se incorporan debates sobre internet y comunicación digital y aparecen presentaciones de producciones audiovisuales y multimediales.",

      conclusion:
        "Al mismo tiempo, se mantiene una mirada académica y crítica, el rol protagónico de los estudiantes y la articulación entre universidades públicas. El encuentro pasa de ser solamente un espacio de exposición teórica a convertirse también en uno de producción colectiva y propuesta de soluciones.",

      tag:
        "El crecimiento"
    },


    {
      year: "2010–2019",

      label: "Nuevas agendas",

      title:
        "2010–2019 · Nuevas agendas y actualización del debate",

      intro:
        "La transformación digital modifica las preguntas del campo y obliga al encuentro a incorporar nuevos problemas.",

      text:
        "Con el auge de la convergencia digital, el ENACOM actualiza sus contenidos hacia temáticas contemporáneas como redes sociales, fake news, comunicación política, inteligencia artificial, género y derechos comunicacionales.",

      secondary:
        "El contexto político y las demandas sociales de la época —entre ellas movimientos como Ni Una Menos y la lucha por la Legalización del Aborto (IVE)— refuerzan la relación de la comunicación con los Derechos Humanos, la democratización de la palabra y el derecho a la información.",

      tag:
        "Nuevas preguntas"
    },


    {
      year: "2020",

      label: "Virtualidad",

      title:
        "2020 · Suspensión y virtualización por la pandemia",

      intro:
        "La pandemia modifica la forma de encontrarse, participar y producir conocimiento.",

      text:
        "La crisis sanitaria interrumpe las actividades presenciales tradicionales. El ENACOM debe adaptar sus dinámicas hacia la virtualidad y el uso intensivo de plataformas digitales.",

      secondary:
        "La transformación modifica las formas de participación y evidencia el rol clave de la tecnología para sostener los vínculos educativos y sociales en un contexto crítico.",

      tag:
        "Un cambio inesperado"
    },


    {
      year: "2021",

      label: "Mendoza",

      title:
        "2021 · Reanudación presencial — Mendoza",

      intro:
        "Después de la interrupción provocada por la pandemia, el encuentro recupera el espacio presencial.",

      text:
        "Tras el período más agudo de la pandemia, el ENACOM vuelve a realizarse de manera presencial en Mendoza. La recuperación del intercambio cara a cara y del debate colectivo tiene un fuerte valor simbólico.",

      secondary:
        "La agenda se centra en las consecuencias comunicacionales de la pandemia: la sobreinformación, la desinformación, las noticias falsas, el rol de los medios y la virtualización de la vida cotidiana.",

      tag:
        "El regreso"
    },


    {
      year: "2024",

      label: "San Luis",

      title:
        "Septiembre de 2024 · San Luis es elegida sede del XXII ENACOM",

      intro:
        "La historia del encuentro llega a San Luis y abre el camino hacia la edición de 2025.",

      text:
        "La Asamblea de FADECCOS aprueba por unanimidad la candidatura de la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis (UNSL) como sede del ENACOM 2025.",

      secondary:
        "La propuesta es valorada por la trayectoria de más de 25 años de la carrera de Comunicación Social, el crecimiento académico de la UNSL, su capacidad organizativa y el interés en fortalecer debates sobre comunicación contemporánea.",

      conclusion:
        "La elección de San Luis representa la continuidad de un proceso histórico de fortalecimiento de las carreras de comunicación en Argentina. Desde su creación en 2002, el encuentro fue creciendo hasta consolidarse como uno de los espacios académicos más importantes para debatir las transformaciones sociales, políticas y tecnológicas vinculadas a la comunicación.",

      tag:
        "El camino a 2025"
    },


    {
      year: "2025",

      label: "XXII ENACOM",

      title:
        "2025 · XXII ENACOM en San Luis",

      intro:
        "La historia del encuentro desemboca en la edición que constituye el eje central de este sitio.",

      text:
        "Durante los días 5, 6 y 7 de noviembre de 2025, la Universidad Nacional de San Luis fue sede del XXII Encuentro Nacional de Carreras de Comunicación.",

      secondary:
        "El lema fue «Tiempo de comunicación. Diálogos sobre pasado y presente en un mundo acelerado», una propuesta vinculada a las transformaciones tecnológicas, sociales, culturales y políticas que atraviesan actualmente al campo de la comunicación.",

      conclusion:
        "Participaron estudiantes, docentes, investigadores, comunicadores, extensionistas universitarios y profesionales de distintas provincias y países latinoamericanos. ENACOM 2025 constituye así un nuevo capítulo de una historia que comenzó más de veinte años atrás.",

      tag:
        "El presente"
    },


    {
      year: "2026",

      label: "Corrientes",

      title:
        "2026 · XXIII ENACOM en Corrientes Capital",

      intro:
        "El recorrido histórico continúa en Corrientes, donde la Universidad Nacional del Nordeste se prepara para recibir una nueva edición del encuentro.",

      text:
        "El XXIII Encuentro Nacional de Carreras de Comunicación se realizará los días 4, 5 y 6 de noviembre de 2026 en la ciudad de Corrientes Capital. La organización está a cargo del Departamento de Comunicación Social de la Facultad de Humanidades de la Universidad Nacional del Nordeste (UNNE).",

      secondary:
        "La edición tendrá como sede el Campus Cabral de la UNNE. El encuentro propone volver a pensar el lugar de la comunicación y el periodismo frente a los desafíos políticos, sociales, tecnológicos y culturales del presente.",

      conclusion:
        "El lema de esta edición es «Pensar la comunicación y la democracia en las encrucijadas del siglo XXI», una invitación a discutir el papel de la comunicación y sus desafíos en un mundo atravesado por transformaciones aceleradas.",

      tag:
        "El próximo capítulo"
    }

  ],



  en: [

    {
      year: "1983",
      label: "AFACOS",
      title: "1983 · Creation of AFACOS",
      intro:
        "During Argentina's return to democracy, a federal articulation between communication programs begins to take shape.",
      text:
        "The Federal Association of Social Communication Programs (AFACOS) is created as the first attempt to connect universities across the country, promoting academic exchange, research, critical reflection on media and professional training.",
      secondary:
        "Its creation lays the institutional foundations of the communication field in Argentina.",
      tag:
        "The beginning"
    },


    {
      year: "2001",
      label: "FADECCOS",
      title: "2001 · FADECCOS is formalized",
      intro:
        "The federal structure becomes stronger and acquires a new institutional form.",
      text:
        "AFACOS becomes the Argentine Federation of Social Communication Programs (FADECCOS), responding to the growth of communication programs during the 1990s.",
      secondary:
        "The new structure expands representation and strengthens coordination, research and national meetings.",
      tag:
        "Consolidation"
    },


    {
      year: "2002",
      label: "First ENACOM",
      title: "2002 · First ENACOM",
      intro:
        "The meeting is created as a federal space for the communication community.",
      text:
        "FADECCOS organizes the first National Meeting of Communication Programs in Olavarría, bringing together students, teachers, researchers and graduates.",
      secondary:
        "The event establishes a permanent space for debate about journalism, media, culture, communication policies and new technologies.",
      tag:
        "The birth"
    },


    {
      year: "2002–2010",
      label: "Federal expansion",
      title: "2002–2010 · Federal expansion and consolidation",
      intro:
        "ENACOM begins moving across the country and strengthens its federal dimension.",
      text:
        "The meeting rotates among different provinces in order to decentralize knowledge production.",
      secondary:
        "Participation grows, Latin American researchers join the event and debates on internet, digital communication, audiovisual productions and multimedia projects emerge.",
      conclusion:
        "The meeting maintains its academic and critical perspective, student leadership and cooperation among public universities.",
      tag:
        "Growth"
    },


    {
      year: "2010–2019",
      label: "New agendas",
      title: "2010–2019 · New agendas",
      intro:
        "Digital transformation changes the questions explored by the communication field.",
      text:
        "Digital convergence expands ENACOM's agenda toward social media, fake news, political communication, artificial intelligence, gender and communication rights.",
      secondary:
        "Political transformations and social demands strengthen the relationship between communication, human rights, democratization of speech and the right to information.",
      tag:
        "New questions"
    },


    {
      year: "2020",
      label: "Virtuality",
      title: "2020 · Suspension and virtuality",
      intro:
        "The pandemic transforms the way people meet, participate and exchange knowledge.",
      text:
        "The health crisis interrupts traditional in-person activities and ENACOM adapts to virtual formats and digital platforms.",
      secondary:
        "This transformation changes participation and demonstrates the importance of technology in maintaining educational and social connections.",
      tag:
        "An unexpected change"
    },


    {
      year: "2021",
      label: "Mendoza",
      title: "2021 · Return to in-person meetings",
      intro:
        "After the pandemic interruption, ENACOM returns to face-to-face interaction.",
      text:
        "The meeting returns to Mendoza, restoring face-to-face exchange and collective debate.",
      secondary:
        "The agenda focuses on overinformation, disinformation, fake news, the role of media and the virtualization of everyday life.",
      tag:
        "The return"
    },


    {
      year: "2024",
      label: "San Luis",
      title: "September 2024 · San Luis is chosen",
      intro:
        "The history of ENACOM reaches San Luis and opens the path toward the 2025 edition.",
      text:
        "FADECCOS unanimously approves the Faculty of Human Sciences at the National University of San Luis as the host institution for ENACOM 2025.",
      secondary:
        "The proposal is valued because of the history of its Communication program, the academic growth of the university and its organizational capacity.",
      conclusion:
        "The choice of San Luis represents the continuation of a historical process of strengthening communication programs in Argentina.",
      tag:
        "The path to 2025"
    },


    {
      year: "2025",
      label: "22nd ENACOM",
      title: "2025 · 22nd ENACOM in San Luis",
      intro:
        "The historical journey leads to the edition at the center of this website.",
      text:
        "From November 5 to 7, 2025, the National University of San Luis hosted the 22nd National Meeting of Communication Programs.",
      secondary:
        "Its motto was “A time for communication. Dialogues between past and present in an accelerated world”.",
      conclusion:
        "Students, teachers, researchers, communicators and professionals from different provinces and Latin American countries participated in the event.",
      tag:
        "The present"
    },


    {
      year: "2026",
      label: "Corrientes",
      title: "2026 · 23rd ENACOM in Corrientes",
      intro:
        "The historical journey continues in Corrientes, where the National University of the Northeast will host a new edition of the meeting.",
      text:
        "The 23rd National Meeting of Communication Programs will take place on November 4, 5 and 6, 2026, in Corrientes Capital, organized by the Department of Social Communication of the Faculty of Humanities at UNNE.",
      secondary:
        "The event will be held at Campus Cabral and will address communication and journalism in relation to contemporary political, social, technological and cultural challenges.",
      conclusion:
        "The official theme is “Thinking communication and democracy at the crossroads of the 21st century”.",
      tag:
        "The next chapter"
    }

  ],



  pt: [

    {
      year: "1983",
      label: "AFACOS",
      title: "1983 · Criação da AFACOS",
      intro:
        "No retorno da democracia argentina, começa a construção de uma articulação federal entre os cursos de comunicação.",
      text:
        "É criada a Associação Federal de Carreiras de Comunicação Social (AFACOS), como primeiro espaço federal de articulação entre universidades.",
      secondary:
        "Sua criação estabelece bases institucionais para o campo da comunicação.",
      tag:
        "O começo"
    },


    {
      year: "2001",
      label: "FADECCOS",
      title: "2001 · Formalização da FADECCOS",
      intro:
        "A estrutura federal se fortalece e adquire uma nova forma institucional.",
      text:
        "A AFACOS transforma-se na Federação Argentina de Carreiras de Comunicação Social (FADECCOS).",
      secondary:
        "A nova estrutura amplia a representação e fortalece a coordenação, a pesquisa e os encontros nacionais.",
      tag:
        "Consolidação"
    },


    {
      year: "2002",
      label: "Primeiro ENACOM",
      title: "2002 · Primeiro ENACOM",
      intro:
        "O encontro nasce como um espaço federal para reunir a comunidade da comunicação.",
      text:
        "Organizado pela FADECCOS, o primeiro encontro acontece em Olavarría.",
      secondary:
        "Estudantes, docentes, pesquisadores e graduados de todo o país passam a compartilhar um espaço de debate.",
      tag:
        "O nascimento"
    },


    {
      year: "2002–2010",
      label: "Expansão federal",
      title: "2002–2010 · Expansão e consolidação federal",
      intro:
        "O ENACOM começa a circular por diferentes províncias.",
      text:
        "A participação cresce, pesquisadores latino-americanos são incorporados e aparecem debates sobre internet, comunicação digital e produções audiovisuais.",
      secondary:
        "O encontro mantém uma perspectiva acadêmica e crítica e o protagonismo dos estudantes e das universidades públicas.",
      tag:
        "Crescimento"
    },


    {
      year: "2010–2019",
      label: "Novas agendas",
      title: "2010–2019 · Novas agendas",
      intro:
        "A transformação digital muda as perguntas do campo da comunicação.",
      text:
        "A convergência digital amplia a agenda para redes sociais, fake news, comunicação política, inteligência artificial, gênero e direitos comunicacionais.",
      secondary:
        "As transformações políticas e sociais reforçam a relação entre comunicação, direitos humanos e direito à informação.",
      tag:
        "Novas perguntas"
    },


    {
      year: "2020",
      label: "Virtualidade",
      title: "2020 · Suspensão e virtualidade",
      intro:
        "A pandemia transforma as formas de encontro e participação.",
      text:
        "A crise sanitária interrompe as atividades presenciais e leva o ENACOM para plataformas digitais.",
      secondary:
        "Essa transformação evidencia o papel da tecnologia para manter vínculos educativos e sociais.",
      tag:
        "Uma mudança inesperada"
    },


    {
      year: "2021",
      label: "Mendoza",
      title: "2021 · Retorno presencial",
      intro:
        "Depois da interrupção causada pela pandemia, o encontro retorna ao espaço presencial.",
      text:
        "O ENACOM volta a Mendoza e recupera o intercâmbio presencial e o debate coletivo.",
      secondary:
        "A agenda aborda a sobreinformação, a desinformação, as fake news, o papel dos meios e a virtualização da vida cotidiana.",
      tag:
        "O retorno"
    },


    {
      year: "2024",
      label: "San Luis",
      title: "2024 · San Luis é escolhida como sede",
      intro:
        "A história do ENACOM chega a San Luis e abre caminho para 2025.",
      text:
        "A FADECCOS aprova a Faculdade de Ciências Humanas da Universidade Nacional de San Luis como sede do ENACOM 2025.",
      secondary:
        "A proposta é valorizada pela trajetória da carreira de Comunicação Social e pelo crescimento acadêmico da universidade.",
      conclusion:
        "A escolha de San Luis representa a continuidade do fortalecimento histórico das carreiras de comunicação na Argentina.",
      tag:
        "O caminho para 2025"
    },


    {
      year: "2025",
      label: "XXII ENACOM",
      title: "2025 · XXII ENACOM em San Luis",
      intro:
        "O percurso histórico chega à edição que está no centro deste site.",
      text:
        "De 5 a 7 de novembro de 2025, a Universidade Nacional de San Luis recebe o XXII Encontro Nacional de Carreiras de Comunicação.",
      secondary:
        "O lema foi «Tempo de comunicação. Diálogos entre passado e presente em um mundo acelerado».",
      conclusion:
        "Participam estudantes, docentes, pesquisadores, comunicadores e profissionais de diferentes províncias e países latino-americanos.",
      tag:
        "O presente"
    },


    {
      year: "2026",
      label: "Corrientes",
      title: "2026 · XXIII ENACOM em Corrientes",
      intro:
        "O percurso histórico continua em Corrientes, onde a Universidade Nacional do Nordeste receberá uma nova edição do encontro.",
      text:
        "O XXIII Encontro Nacional de Carreiras de Comunicação será realizado nos dias 4, 5 e 6 de novembro de 2026, em Corrientes Capital.",
      secondary:
        "A organização está a cargo do Departamento de Comunicação Social da Faculdade de Humanidades da UNNE.",
      conclusion:
        "O lema oficial é «Pensar a comunicação e a democracia nas encruzilhadas do século XXI».",
      tag:
        "O próximo capítulo"
    }

  ]

};



/* =========================================================
   RENDERIZAR LÍNEA DEL TIEMPO
========================================================= */

function renderTimeline(lang) {

  const controls =
    document.getElementById(
      "timeline-controls"
    );

  const detail =
    document.getElementById(
      "timeline-detail"
    );


  const items =
    timelineData[lang] ||
    timelineData.es;


  if (
    !controls ||
    !detail
  ) {

    return;

  }


  controls.innerHTML =
    "";


  function selectTimelineItem(index) {

    const item =
      items[index];


    controls
      .querySelectorAll(
        ".timeline-button"
      )
      .forEach(
        (button, buttonIndex) => {

          button.setAttribute(
            "aria-selected",
            String(
              buttonIndex === index
            )
          );

        }
      );


    detail.innerHTML =
      "";


    const tag =
      document.createElement(
        "span"
      );

    tag.className =
      "timeline-detail-tag";

    tag.textContent =
      item.tag;


    const title =
      document.createElement(
        "h3"
      );

    title.textContent =
      item.title;


    const intro =
      document.createElement(
        "p"
      );

    intro.className =
      "timeline-detail-intro";

    intro.textContent =
      item.intro;


    detail.appendChild(
      tag
    );

    detail.appendChild(
      title
    );

    detail.appendChild(
      intro
    );


    const text =
      document.createElement(
        "p"
      );

    text.textContent =
      item.text;


    detail.appendChild(
      text
    );


    if (
      item.secondary
    ) {

      const secondary =
        document.createElement(
          "p"
        );

      secondary.textContent =
        item.secondary;


      detail.appendChild(
        secondary
      );

    }


    if (
      item.conclusion
    ) {

      const conclusion =
        document.createElement(
          "p"
        );

      conclusion.className =
        "timeline-detail-conclusion";

      conclusion.textContent =
        item.conclusion;


      detail.appendChild(
        conclusion
      );

    }

  }


  items.forEach(
    (item, index) => {

      const button =
        document.createElement(
          "button"
        );

      const year =
        document.createElement(
          "strong"
        );

      const label =
        document.createElement(
          "span"
        );


      button.type =
        "button";


      button.className =
        "timeline-button";


      button.setAttribute(
        "role",
        "tab"
      );


      button.setAttribute(
        "aria-selected",
        String(
          index === 0
        )
      );


      year.textContent =
        item.year;


      label.textContent =
        item.label;


      button.appendChild(
        year
      );


      button.appendChild(
        label
      );


      button.addEventListener(
        "click",
        () => {

          selectTimelineItem(
            index
          );

        }
      );


      controls.appendChild(
        button
      );

    }
  );


  selectTimelineItem(
    0
  );

}



/* =========================================================
   CUENTA REGRESIVA · ENACOM 2026
========================================================= */


/*
  FECHA OBJETIVO

  4 de noviembre de 2026
  08:00 AM
  Argentina / UTC-03:00
*/

const countdownTarget =
  new Date(
    "2026-11-04T08:00:00-03:00"
  ).getTime();


const countdownDays =
  document.getElementById(
    "countdown-days"
  );

const countdownHours =
  document.getElementById(
    "countdown-hours"
  );

const countdownMinutes =
  document.getElementById(
    "countdown-minutes"
  );

const countdownSeconds =
  document.getElementById(
    "countdown-seconds"
  );

const countdownStatus =
  document.getElementById(
    "countdown-status"
  );


function updateCountdown() {

  if (
    !countdownDays ||
    !countdownHours ||
    !countdownMinutes ||
    !countdownSeconds
  ) {

    return;

  }


  const remaining =
    countdownTarget -
    Date.now();


  if (
    remaining <= 0
  ) {

    countdownDays.textContent =
      "0";

    countdownHours.textContent =
      "00";

    countdownMinutes.textContent =
      "00";

    countdownSeconds.textContent =
      "00";


    if (
      countdownStatus
    ) {

      const lang =
        document.documentElement.lang ||
        "es";


      countdownStatus.textContent =
        (
          translations[lang] ||
          translations.es
        ).countdownComplete;

    }


    return true;

  }


  const totalSeconds =
    Math.floor(
      remaining / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) / 3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) / 60
    );


  const seconds =
    totalSeconds % 60;


  countdownDays.textContent =
    String(days);


  countdownHours.textContent =
    String(hours)
      .padStart(
        2,
        "0"
      );


  countdownMinutes.textContent =
    String(minutes)
      .padStart(
        2,
        "0"
      );


  countdownSeconds.textContent =
    String(seconds)
      .padStart(
        2,
        "0"
      );


  return false;

}



/* =========================================================
   INICIO
========================================================= */

changeLanguage(
  savedLanguage
);


renderQuestion();


if (
  !updateCountdown()
) {

  const countdownTimer =
    setInterval(
      () => {

        if (
          updateCountdown()
        ) {

          clearInterval(
            countdownTimer
          );

        }

      },
      1000
    );

}
