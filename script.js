/* =========================================================
   ENACOM 2025
   INTERACTIVIDAD · IDIOMAS · ACCESIBILIDAD · CARRUSEL · QUIZ
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     ACORDEÓN
  ======================================================= */

  const accordionButtons =
    document.querySelectorAll(".subthread-button");

  accordionButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const article =
        button.closest(".subthread");

      if (!article) return;

      const content =
        article.querySelector(".subthread-content");

      if (!content) return;

      const isOpen =
        article.classList.contains("open");

      /* Si está abierto, lo cerramos */
      if (isOpen) {

        article.classList.remove("open");

        button.setAttribute(
          "aria-expanded",
          "false"
        );

        content.style.maxHeight = "0px";

      }

      /* Si está cerrado, lo abrimos */
      else {

        article.classList.add("open");

        button.setAttribute(
          "aria-expanded",
          "true"
        );

        content.style.maxHeight =
          content.scrollHeight + "px";

      }

    });

  });


  /* Abrir correctamente los acordeones que empiezan abiertos */

  document
    .querySelectorAll(".subthread.open")
    .forEach((article) => {

      const content =
        article.querySelector(".subthread-content");

      if (content) {

        content.style.maxHeight =
          content.scrollHeight + "px";

      }

    });



  /* =======================================================
     CARRUSEL
  ======================================================= */

  const slides =
    document.querySelectorAll(".carousel-slide");

  const prevButton =
    document.querySelector(".carousel-control.prev");

  const nextButton =
    document.querySelector(".carousel-control.next");

  const dotsContainer =
    document.querySelector(".carousel-dots");

  const carousel =
    document.querySelector(".carousel");

  let currentSlide = 0;

  let carouselTimer = null;


  function showSlide(index) {

    if (!slides.length) return;


    if (index < 0) {

      index = slides.length - 1;

    }


    if (index >= slides.length) {

      index = 0;

    }


    currentSlide = index;


    slides.forEach((slide, i) => {

      slide.classList.toggle(
        "active",
        i === currentSlide
      );

    });


    const dots =
      document.querySelectorAll(".carousel-dot");

    dots.forEach((dot, i) => {

      dot.classList.toggle(
        "active",
        i === currentSlide
      );

    });

  }


  /* Crear puntos del carrusel */

  if (
    slides.length &&
    dotsContainer
  ) {

    dotsContainer.innerHTML = "";


    slides.forEach((slide, index) => {

      const dot =
        document.createElement("button");

      dot.type = "button";

      dot.className =
        "carousel-dot";

      dot.setAttribute(
        "aria-label",
        `Ver fotografía ${index + 1}`
      );


      dot.addEventListener(
        "click",
        () => {

          showSlide(index);

        }
      );


      dotsContainer.appendChild(dot);

    });

  }


  /* Botón anterior */

  if (prevButton) {

    prevButton.addEventListener(
      "click",
      () => {

        showSlide(
          currentSlide - 1
        );

      }
    );

  }


  /* Botón siguiente */

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {

        showSlide(
          currentSlide + 1
        );

      }
    );

  }


  /* Mostrar primera fotografía */

  showSlide(0);


  /* Carrusel automático */

  function startCarousel() {

    if (slides.length <= 1) return;

    stopCarousel();

    carouselTimer =
      setInterval(() => {

        showSlide(
          currentSlide + 1
        );

      }, 6500);

  }


  function stopCarousel() {

    if (carouselTimer) {

      clearInterval(
        carouselTimer
      );

      carouselTimer = null;

    }

  }


  if (carousel) {

    carousel.addEventListener(
      "mouseenter",
      stopCarousel
    );


    carousel.addEventListener(
      "mouseleave",
      startCarousel
    );

  }


  startCarousel();



  /* =======================================================
     TRADUCCIONES
  ======================================================= */

  const translations = {

    es: {

      navEjes: "Ejes temáticos",

      navPonencias: "Ponencias",

      navInteractivo: "Participá",

      navRedes: "Redes",

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

      galleryKicker:
        "El encuentro en imágenes",

      galleryTitle:
        "ENACOM 2025 en San Luis",

      galleryText:
        "Una mirada visual sobre las jornadas realizadas en la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis.",

      photoNote:
        "Las fotografías se presentan con identificación de su fuente y autoría.",

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
        "Trabajo académico realizado por estudiantes de la carrera de Comunicación Social de la Universidad Nacional del Nordeste (UNNE)."

    },


    en: {

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
        "A journey through the main debates, talks and productions of ENACOM 2025, held in San Luis, Argentina.",

      heroGallery:
        "View photographs",

      heroExplore:
        "Explore the event",

      heroImageCaption:
        "Productions developed from the debates and issues addressed during the event.",

      galleryKicker:
        "The event in images",

      galleryTitle:
        "ENACOM 2025 in San Luis",

      galleryText:
        "A visual look at the sessions held at the Faculty of Human Sciences of the National University of San Luis.",

      photoNote:
        "Photographs are presented with their source and authorship clearly identified.",

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

      quizKicker:
        "Take part",

      quizTitle:
        "How much do you know about communication?",

      quizIntro:
        "Test what you learned during the journey.",

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
        "A website for everyone",

      accessText:
        "Use these tools to adapt the reading experience to your needs.",

      increaseText:
        "Increase text",

      decreaseText:
        "Decrease text",

      contrast:
        "High contrast",

      reset:
        "Reset",

      closing:
        "ENACOM 2025 invites us to think about the time of communication as a living network: memory, present, conflict, technology and the right to information in dialogue.",

      footer:
        "Academic project developed by students of the Social Communication program at the National University of the Northeast (UNNE)."

    },


    pt: {

      navEjes:
        "Eixos temáticos",

      navPonencias:
        "Palestras",

      navInteractivo:
        "Participe",

      navRedes:
        "Redes sociais",

      kicker:
        "22º Encontro Nacional de Carreiras de Comunicação",

      heroTitle:
        "Tempo de comunicação. Diálogos entre passado e presente em um mundo acelerado",

      heroText:
        "Um percurso pelos principais debates, palestras e produções do ENACOM 2025, realizado em San Luis, Argentina.",

      heroGallery:
        "Ver fotografias",

      heroExplore:
        "Explorar o encontro",

      heroImageCaption:
        "Produções desenvolvidas a partir dos debates e questões abordados durante o encontro.",

      galleryKicker:
        "O encontro em imagens",

      galleryTitle:
        "ENACOM 2025 em San Luis",

      galleryText:
        "Um olhar visual sobre as jornadas realizadas na Faculdade de Ciências Humanas da Universidade Nacional de San Luis.",

      photoNote:
        "As fotografias são apresentadas com sua fonte e autoria devidamente identificadas.",

      axesKicker:
        "Percurso conceitual",

      axesTitle:
        "Eixos temáticos",

      axesIntro:
        "O percurso reúne alguns dos principais temas abordados durante o ENACOM 2025.",

      axisMainTitle:
        "Crise, comunicação e democracia",

      axisMainText:
        "Este eixo aborda a relação entre as crises socioeconômicas e políticas, a comunicação pública, o jornalismo, a circulação de informações e os desafios democráticos.",

      problemsKicker:
        "Debates contemporâneos",

      problemsTitle:
        "Questões e debates",

      problemsIntro:
        "Dois dos temas trabalhados em nosso percurso sobre comunicação, jornalismo e democracia.",

      problemA:
        "Ataques contra comunicadores e jornalistas",

      problemAText:
        "Esta questão aborda as formas de assédio, censura, violência simbólica e pressão pública que afetam o trabalho jornalístico e o direito social à informação.",

      problemB:
        "Desinformação, jornalismo e democracia",

      problemBText:
        "As fake news, a inteligência artificial e a desinformação transformam a maneira como as informações são produzidas, distribuídas e recebidas.",

      viewInfographic:
        "Ver infográfico completo",

      viewPdf:
        "Ver material completo",

      speakersKicker:
        "Vozes do encontro",

      speakersTitle:
        "Palestras em destaque",

      speakersIntro:
        "Algumas das mesas e especialistas que participaram do ENACOM 2025.",

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
        "Um site para todas as pessoas",

      accessText:
        "Use estas ferramentas para adaptar a experiência de leitura às suas necessidades.",

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
        "Trabalho acadêmico realizado por estudantes da carreira de Comunicação Social da Universidade Nacional do Nordeste (UNNE)."

    }

  };



  /* =======================================================
     QUIZ
  ======================================================= */

  const quizQuestions = [

    {

      question: {

        es:
          "¿Cuál es uno de los principales desafíos de la desinformación?",

        en:
          "What is one of the main challenges posed by disinformation?",

        pt:
          "Qual é um dos principais desafios da desinformação?"

      },

      options: {

        es: [

          "Mejorar automáticamente la calidad de las noticias",

          "Afectar la confianza pública y la circulación de información",

          "Eliminar la necesidad de periodistas"

        ],

        en: [

          "Automatically improve news quality",

          "Affect public trust and the circulation of information",

          "Eliminate the need for journalists"

        ],

        pt: [

          "Melhorar automaticamente a qualidade das notícias",

          "Afetar a confiança pública e a circulação de informações",

          "Eliminar a necessidade de jornalistas"

        ]

      },

      correct: 1

    },


    {

      question: {

        es:
          "¿Qué relación existe entre comunicación y democracia?",

        en:
          "What is the relationship between communication and democracy?",

        pt:
          "Qual é a relação entre comunicação e democracia?"

      },

      options: {

        es: [

          "La comunicación no tiene relación con la democracia",

          "La circulación de información contribuye a la participación y al debate público",

          "La democracia depende únicamente de las redes sociales"

        ],

        en: [

          "Communication has no relationship with democracy",

          "The circulation of information contributes to participation and public debate",

          "Democracy depends only on social media"

        ],

        pt: [

          "A comunicação não tem relação com a democracia",

          "A circulação de informações contribui para a participação e o debate público",

          "A democracia depende apenas das redes sociais"

        ]

      },

      correct: 1

    },


    {

      question: {

        es:
          "¿Qué tecnología plantea nuevos desafíos para el periodismo?",

        en:
          "Which technology creates new challenges for journalism?",

        pt:
          "Qual tecnologia cria novos desafios para o jornalismo?"

      },

      options: {

        es: [

          "La inteligencia artificial",

          "El papel",

          "La radio analógica únicamente"

        ],

        en: [

          "Artificial intelligence",

          "Paper",

          "Analog radio only"

        ],

        pt: [

          "A inteligência artificial",

          "O papel",

          "Apenas o rádio analógico"

        ]

      },

      correct: 0

    },


    {

      question: {

        es:
          "¿Dónde se realizó ENACOM 2025?",

        en:
          "Where was ENACOM 2025 held?",

        pt:
          "Onde foi realizado o ENACOM 2025?"

      },

      options: {

        es: [

          "San Luis",

          "Buenos Aires",

          "Córdoba"

        ],

        en: [

          "San Luis",

          "Buenos Aires",

          "Córdoba"

        ],

        pt: [

          "San Luis",

          "Buenos Aires",

          "Córdoba"

        ]

      },

      correct: 0

    }

  ];


  let currentQuestion = 0;

  let score = 0;

  let selectedAnswer = null;


  const quizContainer =
    document.getElementById(
      "quiz-container"
    );

  const quizNext =
    document.getElementById(
      "quiz-next"
    );

  const quizResult =
    document.getElementById(
      "quiz-result"
    );



  /* =======================================================
     RENDERIZAR QUIZ
  ======================================================= */

  function renderQuestion() {

    if (!quizContainer) return;

    if (
      currentQuestion >=
      quizQuestions.length
    ) {

      showQuizResult();

      return;

    }


    selectedAnswer = null;


    const lang =
      document.documentElement.lang || "es";


    const question =
      quizQuestions[currentQuestion];


    quizContainer.innerHTML = "";


    const wrapper =
      document.createElement("div");

    wrapper.className =
      "quiz-question";


    const title =
      document.createElement("h3");


    title.textContent =
      `${currentQuestion + 1}. ${
        question.question[lang] ||
        question.question.es
      }`;


    wrapper.appendChild(title);


    const options =
      document.createElement("div");

    options.className =
      "quiz-options";


    const questionOptions =
      question.options[lang] ||
      question.options.es;


    questionOptions.forEach(
      (option, index) => {

        const button =
          document.createElement("button");

        button.type = "button";

        button.className =
          "quiz-option";

        button.textContent =
          option;


        button.addEventListener(
          "click",
          () => {

            selectedAnswer =
              index;


            wrapper
              .querySelectorAll(
                ".quiz-option"
              )
              .forEach((item) => {

                item.classList.remove(
                  "selected"
                );

              });


            button.classList.add(
              "selected"
            );

          }
        );


        options.appendChild(
          button
        );

      }
    );


    wrapper.appendChild(
      options
    );


    quizContainer.appendChild(
      wrapper
    );


    if (quizResult) {

      quizResult.textContent =
        "";

    }


    if (quizNext) {

      quizNext.disabled = false;

      quizNext.style.display =
        "";

    }

  }



  /* =======================================================
     RESULTADO QUIZ
  ======================================================= */

  function showQuizResult() {

    const lang =
      document.documentElement.lang || "es";


    if (quizContainer) {

      quizContainer.innerHTML =
        "";

    }


    if (quizNext) {

      quizNext.style.display =
        "none";

    }


    if (!quizResult) return;


    if (lang === "en") {

      quizResult.textContent =
        `You got ${score} out of ${quizQuestions.length} correct.`;

    }

    else if (lang === "pt") {

      quizResult.textContent =
        `Você acertou ${score} de ${quizQuestions.length} perguntas.`;

    }

    else {

      quizResult.textContent =
        `Acertaste ${score} de ${quizQuestions.length} preguntas.`;

    }

  }



  /* Botón siguiente */

  if (quizNext) {

    quizNext.addEventListener(
      "click",
      () => {

        if (
          selectedAnswer === null
        ) {

          const lang =
            document.documentElement.lang ||
            "es";


          if (quizResult) {

            if (lang === "en") {

              quizResult.textContent =
                "Choose an answer before continuing.";

            }

            else if (lang === "pt") {

              quizResult.textContent =
                "Escolha uma resposta antes de continuar.";

            }

            else {

              quizResult.textContent =
                "Elegí una respuesta antes de continuar.";

            }

          }

          return;

        }


        if (
          selectedAnswer ===
          quizQuestions[currentQuestion].correct
        ) {

          score++;

        }


        currentQuestion++;


        if (
          currentQuestion >=
          quizQuestions.length
        ) {

          showQuizResult();

        }

        else {

          renderQuestion();

        }

      }
    );

  }



  /* =======================================================
     CAMBIO DE IDIOMA
  ======================================================= */

  const languageButtons =
    document.querySelectorAll(
      ".language-btn"
    );


  function changeLanguage(lang) {

    if (!translations[lang]) {

      lang = "es";

    }


    document.documentElement.lang =
      lang;


    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.dataset.i18n;


        if (
          translations[lang] &&
          translations[lang][key]
        ) {

          element.textContent =
            translations[lang][key];

        }

      });


    languageButtons.forEach(
      (button) => {

        button.classList.toggle(
          "active",
          button.dataset.lang === lang
        );

      }
    );


    try {

      localStorage.setItem(
        "enacom-language",
        lang
      );

    }

    catch (error) {

      /* Si el navegador bloquea localStorage,
         la página continúa funcionando. */

    }


    /* Actualizar pregunta actual */

    if (
      quizContainer &&
      currentQuestion <
      quizQuestions.length
    ) {

      renderQuestion();

    }

  }


  languageButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          changeLanguage(
            button.dataset.lang
          );

        }
      );

    }
  );


  let savedLanguage = "es";


  try {

    savedLanguage =
      localStorage.getItem(
        "enacom-language"
      ) || "es";

  }

  catch (error) {

    savedLanguage = "es";

  }



  /* =======================================================
     ACCESIBILIDAD
  ======================================================= */

  let textScale = 1;


  try {

    const storedScale =
      parseFloat(
        localStorage.getItem(
          "enacom-text-scale"
        )
      );


    if (!isNaN(storedScale)) {

      textScale = storedScale;

    }

  }

  catch (error) {

    textScale = 1;

  }


  document.documentElement.style.setProperty(
    "--text-scale",
    textScale
  );


  function updateTextScale() {

    document.documentElement.style.setProperty(
      "--text-scale",
      textScale
    );


    try {

      localStorage.setItem(
        "enacom-text-scale",
        textScale
      );

    }

    catch (error) {

      /* Continuar aunque localStorage no esté disponible */

    }

  }


  const increaseText =
    document.getElementById(
      "increase-text"
    );


  const decreaseText =
    document.getElementById(
      "decrease-text"
    );


  const contrastToggle =
    document.getElementById(
      "contrast-toggle"
    );


  const resetAccessibility =
    document.getElementById(
      "reset-accessibility"
    );


  /* Aumentar texto */

  if (increaseText) {

    increaseText.addEventListener(
      "click",
      () => {

        textScale =
          Math.min(
            textScale + 0.1,
            1.5
          );


        updateTextScale();

      }
    );

  }


  /* Disminuir texto */

  if (decreaseText) {

    decreaseText.addEventListener(
      "click",
      () => {

        textScale =
          Math.max(
            textScale - 0.1,
            0.8
          );


        updateTextScale();

      }
    );

  }


  /* Alto contraste */

  if (contrastToggle) {

    contrastToggle.addEventListener(
      "click",
      () => {

        document.body.classList.toggle(
          "high-contrast"
        );


        try {

          localStorage.setItem(
            "enacom-contrast",
            document.body.classList.contains(
              "high-contrast"
            )
          );

        }

        catch (error) {

          /* Continuar normalmente */

        }

      }
    );

  }


  /* Recuperar contraste */

  try {

    if (
      localStorage.getItem(
        "enacom-contrast"
      ) === "true"
    ) {

      document.body.classList.add(
        "high-contrast"
      );

    }

  }

  catch (error) {

    /* No hacer nada */

  }


  /* Restablecer accesibilidad */

  if (resetAccessibility) {

    resetAccessibility.addEventListener(
      "click",
      () => {

        textScale = 1;

        updateTextScale();


        document.body.classList.remove(
          "high-contrast"
        );


        try {

          localStorage.removeItem(
            "enacom-contrast"
          );

        }

        catch (error) {

          /* Continuar normalmente */

        }

      }
    );

  }



  /* =======================================================
     INICIAR
  ======================================================= */

  changeLanguage(
    savedLanguage
  );


  renderQuestion();


});
