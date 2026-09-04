/* =========================================================
   ENACOM 2025
   Interactividad, idiomas, accesibilidad, carrusel y quiz
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

      content.style.maxHeight = "0px";

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


/* Solo activar el carrusel si existe */

if (
  slides.length > 0 &&
  dotsContainer &&
  prevButton &&
  nextButton
) {

  /* Crear indicadores */

  slides.forEach((slide, index) => {

    const dot =
      document.createElement("button");

    dot.className = "carousel-dot";

    dot.type = "button";

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


    dots.forEach((dot, i) => {

      dot.classList.toggle(
        "active",
        i === currentSlide
      );

    });

  }


  prevButton.addEventListener("click", () => {

    showSlide(currentSlide - 1);

  });


  nextButton.addEventListener("click", () => {

    showSlide(currentSlide + 1);

  });


  showSlide(0);


  /* Carrusel automático */

  let carouselTimer =
    setInterval(() => {

      showSlide(currentSlide + 1);

    }, 6500);


  /* Pausar al pasar el mouse */

  const carousel =
    document.querySelector(".carousel");

  if (carousel) {

    carousel.addEventListener(
      "mouseenter",
      () => clearInterval(carouselTimer)
    );


    carousel.addEventListener(
      "mouseleave",
      () => {

        carouselTimer =
          setInterval(() => {

            showSlide(currentSlide + 1);

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

    navHistoria: "Historia ENACOM",

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

    countdownTitle:
      "Días para ENACOM 2026",

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

    photo1Title:
      "Apertura del ENACOM 2025",

    photo1Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo2Title:
      "Participación y encuentro",

    photo2Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo3Title:
      "Comunidad académica",

    photo3Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo4Title:
      "Ponencias y debates",

    photo4Credit:
      "Fotografía: Facultad de Ciencias de la Educación — UNER.",

    photo5Title:
      "Participantes del encuentro",

    photo5Credit:
      "Fotografía: Facultad de Ciencias de la Educación — UNER.",

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

    bioMangone:
      "Doctor en Ciencias Sociales por la UBA, docente en la Universidad de Buenos Aires y en la Universidad Nacional de La Pampa. Su trabajo aborda el discurso político, los medios y la cultura.",

    bioSegura:
      "Profesora de la UNC e investigadora del CONICET. Sus investigaciones abordan las desigualdades comunicacionales y digitales, la participación social y los discursos de odio y desinformación.",

    bioBecerra:
      "Investigador y analista especializado en políticas de comunicación, medios y democracia. Es profesor en la UNQ y la UBA y doctor por la Universidad Autónoma de Barcelona.",

    bioCristiano:
      "Doctor en Sociología, investigador del CONICET y profesor en la UNC. Su trabajo explora el tiempo social, la imaginación y las formas de vida en el capitalismo contemporáneo.",

    bioCosta:
      "Doctora en Ciencias Sociales por la UBA, investigadora del CONICET y directora de Tecnoceno Lab. Su obra explora los vínculos entre tecnología, cuerpo y cultura en la era del algoritmo.",

    bioPeret:
      "Comunicador, docente e investigador. Participó de la organización y coordinación de actividades del ENACOM 2025, incluyendo la mesa sobre convergencia e inteligencias artificiales.",

    bioVilte:
      "Docente e investigador vinculado al campo de la comunicación. Participó del ENACOM 2025 como parte de las actividades académicas del encuentro.",

    featuredKicker:
      "Mesa panel destacada",

    featuredTitle:
      "¿Qué hacer en tiempos de convergencia e inteligencias artificiales?",

    featuredText1:
      "Una de las mesas más convocantes del ENACOM 2025 reunió a Martín Becerra (UNQ), Flavia Costa (UBA) y Javier Cristiano (UNC), con la coordinación de Maximiliano Peret (UNICEN).",

    featuredText2:
      "Durante el encuentro se abordaron los desafíos éticos, políticos y culturales que plantea la inteligencia artificial en el campo de la comunicación: la concentración de poder en las plataformas, la transformación de los modos de producción simbólica y la necesidad de sostener una mirada crítica y democrática sobre las tecnologías.",

    featuredQuote:
      "“La comunicación no puede quedar al margen de las transformaciones tecnológicas: debe intervenir, pensar y proponer futuros posibles.”",

    speaker1Title:
      "Cultura, política y comunicación",

    speaker1Subtitle:
      "Para una genealogía del campo: ¿de dónde venimos?",

    speaker2Title:
      "Comunicación, convergencia e inteligencia artificial",

    speaker3Title:
      "Ciencias Sociales y Humanidades",

    speaker4Title:
      "Herencias de la comunicación",

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
      "A journey through the main debates, talks and productions of ENACOM 2025, held in San Luis, Argentina.",

    heroGallery:
      "View photographs",

    heroExplore:
      "Explore the event",

    heroImageCaption:
      "Productions developed from the debates and issues addressed during the event.",

    countdownTitle:
      "Days until ENACOM 2026",

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

    photo1Title:
      "Opening of ENACOM 2025",

    photo1Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo2Title:
      "Participation and encounter",

    photo2Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo3Title:
      "Academic community",

    photo3Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo4Title:
      "Talks and debates",

    photo4Credit:
      "Photograph: Faculty of Education Sciences — UNER.",

    photo5Title:
      "Event participants",

    photo5Credit:
      "Photograph: Faculty of Education Sciences — UNER.",

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

    bioMangone:
      "Doctor of Social Sciences from the University of Buenos Aires, professor at the University of Buenos Aires and the National University of La Pampa. His work addresses political discourse, media and culture.",

    bioSegura:
      "Professor at the National University of Córdoba and CONICET researcher. Her research addresses communication and digital inequalities, social participation, hate speech and disinformation.",

    bioBecerra:
      "Researcher and analyst specializing in communication policies, media and democracy. He teaches at UNQ and UBA and holds a doctorate from the Autonomous University of Barcelona.",

    bioCristiano:
      "Doctor of Sociology, CONICET researcher and professor at UNC. His work explores social time, imagination and ways of life in contemporary capitalism.",

    bioCosta:
      "Doctor of Social Sciences from UBA, CONICET researcher and director of Tecnoceno Lab. Her work explores the links between technology, the body and culture in the age of algorithms.",

    bioPeret:
      "Communicator, professor and researcher. He participated in organizing and coordinating ENACOM 2025 activities, including the panel on convergence and artificial intelligence.",

    bioVilte:
      "Professor and researcher linked to the field of communication. He participated in ENACOM 2025 as part of the event's academic activities.",

    featuredKicker:
      "Featured panel",

    featuredTitle:
      "What should we do in times of convergence and artificial intelligence?",

    featuredText1:
      "One of the most attended panels of ENACOM 2025 brought together Martín Becerra (UNQ), Flavia Costa (UBA) and Javier Cristiano (UNC), coordinated by Maximiliano Peret (UNICEN).",

    featuredText2:
      "The panel explored the ethical, political and cultural challenges posed by artificial intelligence in communication: platform power concentration, changing forms of symbolic production and the need for a critical and democratic view of technology.",

    featuredQuote:
      "“Communication cannot remain outside technological transformations: it must intervene, think and propose possible futures.”",

    speaker1Title:
      "Culture, politics and communication",

    speaker1Subtitle:
      "For a genealogy of the field: where do we come from?",

    speaker2Title:
      "Communication, convergence and artificial intelligence",

    speaker3Title:
      "Social Sciences and Humanities",

    speaker4Title:
      "Communication legacies",

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
      "Um percurso pelos principais debates, palestras e produções do ENACOM 2025, realizado em San Luis, Argentina.",

    heroGallery:
      "Ver fotografias",

    heroExplore:
      "Explorar o encontro",

    heroImageCaption:
      "Produções desenvolvidas a partir dos debates e problemáticas abordadas durante o encontro.",

    countdownTitle:
      "Dias para o ENACOM 2026",

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

    photo1Title:
      "Abertura do ENACOM 2025",

    photo1Credit:
      "Fotografia: Noticias UNSL — Universidade Nacional de San Luis.",

    photo2Title:
      "Participação e encontro",

    photo2Credit:
      "Fotografia: Noticias UNSL — Universidade Nacional de San Luis.",

    photo3Title:
      "Comunidade acadêmica",

    photo3Credit:
      "Fotografia: Noticias UNSL — Universidade Nacional de San Luis.",

    photo4Title:
      "Palestras e debates",

    photo4Credit:
      "Fotografia: Faculdade de Ciências da Educação — UNER.",

    photo5Title:
      "Participantes do encontro",

    photo5Credit:
      "Fotografia: Faculdade de Ciências da Educação — UNER.",

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
      "Uma das mesas mais concorridas do ENACOM 2025 reuniu Martín Becerra (UNQ), Flavia Costa (UBA) e Javier Cristiano (UNC), com coordenação de Maximiliano Peret (UNICEN).",

    featuredText2:
      "Durante o encontro foram abordados os desafios éticos, políticos e culturais colocados pela inteligência artificial no campo da comunicação.",

    featuredQuote:
      "“A comunicação não pode ficar à margem das transformações tecnológicas.”",

    speaker1Title:
      "Cultura, política e comunicação",

    speaker1Subtitle:
      "Para uma genealogia do campo: de onde viemos?",

    speaker2Title:
      "Comunicação, convergência e inteligência artificial",

    speaker3Title:
      "Ciências Sociais e Humanidades",

    speaker4Title:
      "Heranças da comunicação",

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
   IDIOMA ACTIVO
========================================================= */

let savedLanguage =
  localStorage.getItem("enacomLanguage") || "es";


function changeLanguage(lang) {

  if (!translations[lang]) {

    lang = "es";

  }

  savedLanguage = lang;

  localStorage.setItem(
    "enacomLanguage",
    lang
  );

  document.documentElement.lang = lang;


  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.getAttribute("data-i18n");

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

    button.addEventListener("click", () => {

      changeLanguage(
        button.dataset.lang
      );

    });

  });



/* =========================================================
   ACCESIBILIDAD
========================================================= */

const increaseButton =
  document.querySelector("[data-action='increase-text']");

const decreaseButton =
  document.querySelector("[data-action='decrease-text']");

const contrastButton =
  document.querySelector("[data-action='contrast']");

const resetButton =
  document.querySelector("[data-action='reset']");


let textScale =
  Number(
    localStorage.getItem("enacomTextScale")
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
  localStorage.getItem("enacomContrast") === "1"
) {

  document.body.classList.add(
    "high-contrast"
  );

}


if (resetButton) {

  resetButton.addEventListener(
    "click",
    () => {

      textScale = 1;

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
      "¿En qué año el encuentro se adaptó a la virtualidad por la pandemia?",

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
  }

];


let currentQuestion = 0;
let score = 0;


const quizQuestion =
  document.getElementById("quiz-question");

const quizOptions =
  document.getElementById("quiz-options");

const quizNext =
  document.getElementById("quiz-next");

const quizResult =
  document.getElementById("quiz-result");


function renderQuestion() {

  if (
    !quizQuestion ||
    !quizOptions
  ) {

    return;

  }


  const current =
    quizQuestions[currentQuestion];


  quizQuestion.textContent =
    current.question;


  quizOptions.innerHTML =
    "";


  current.options.forEach(
    (option, index) => {

      const button =
        document.createElement("button");

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
            index === current.answer
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
          savedLanguage === "en"
        ) {

          message =
            `You got ${score} out of ${quizQuestions.length} questions right.`;

        } else if (
          savedLanguage === "pt"
        ) {

          message =
            `Você acertou ${score} de ${quizQuestions.length} perguntas.`;

        } else {

          message =
            `Acertaste ${score} de ${quizQuestions.length} preguntas.`;

        }


        quizResult.textContent =
          message;

      }

    }
  );

}



/* =========================================================
   LÍNEA DEL TIEMPO · HISTORIA DEL ENACOM
========================================================= */

const timelineData = {

  es: [

    [
      "1983",
      "AFACOS",
      "1983 · Nace AFACOS",
      "En el retorno de la democracia se crea la Asociación Federal de Carreras de Comunicación Social (AFACOS), el primer espacio federal de articulación entre universidades para promover intercambio académico, investigación y formación profesional."
    ],

    [
      "2001",
      "FADECCOS",
      "2001 · Se formaliza FADECCOS",
      "AFACOS se transforma en la Federación Argentina de Carreras de Comunicación Social (FADECCOS). La nueva organización amplía la representación de las carreras y consolida la coordinación entre universidades."
    ],

    [
      "2002",
      "Primer ENACOM",
      "2002 · El primer ENACOM",
      "FADECCOS organiza en Olavarría el primer Encuentro Nacional de Carreras de Comunicación. Nace como un espacio de debate sobre periodismo, medios, cultura, políticas comunicacionales y nuevas tecnologías."
    ],

    [
      "2002–10",
      "Expansión federal",
      "2002–2010 · Expansión y consolidación",
      "El encuentro rota por distintas provincias para descentralizar la producción de conocimiento. Crece la participación, se incorporan investigadores latinoamericanos y se suman producciones audiovisuales y multimediales."
    ],

    [
      "2010–19",
      "Nuevas agendas",
      "2010–2019 · Nuevas agendas",
      "La convergencia digital amplía el debate hacia redes sociales, desinformación, comunicación política, inteligencia artificial, género y derechos comunicacionales."
    ],

    [
      "2020",
      "Virtualidad",
      "2020 · Adaptación a la virtualidad",
      "La pandemia interrumpe los encuentros presenciales y obliga a trasladar las dinámicas a plataformas digitales, transformando las formas de participación y sosteniendo los vínculos académicos."
    ],

    [
      "2021",
      "Mendoza",
      "2021 · Regreso presencial",
      "El encuentro vuelve a realizarse de forma presencial en Mendoza y recupera el intercambio cara a cara. La agenda aborda la sobreinformación, la desinformación y los cambios comunicacionales producidos por la pandemia."
    ],

    [
      "2024",
      "San Luis",
      "2024 · San Luis, sede elegida",
      "La Asamblea de FADECCOS aprueba la candidatura de la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis como sede del XXII ENACOM."
    ],

    [
      "2025",
      "XXII ENACOM",
      "2025 · ENACOM en San Luis",
      "Del 5 al 7 de noviembre, la Universidad Nacional de San Luis recibe el XXII Encuentro Nacional de Carreras de Comunicación bajo el lema Tiempo de comunicación. Diálogos sobre pasado y presente en un mundo acelerado."
    ]

  ],


  en: [

    [
      "1983",
      "AFACOS",
      "1983 · AFACOS is founded",
      "During Argentina's return to democracy, the Federal Association of Social Communication Programs is created as the first national space for cooperation among universities."
    ],

    [
      "2001",
      "FADECCOS",
      "2001 · FADECCOS is formalized",
      "AFACOS becomes the Argentine Federation of Social Communication Programs, widening representation and coordination among universities."
    ],

    [
      "2002",
      "First ENACOM",
      "2002 · The first ENACOM",
      "FADECCOS organizes the first National Meeting of Communication Programs in Olavarría, creating a space for debate on journalism, media, culture and communication policies."
    ],

    [
      "2002–10",
      "Federal growth",
      "2002–2010 · Expansion and consolidation",
      "The event rotates across provinces, broadening participation and incorporating Latin American researchers, audiovisual productions and multimedia projects."
    ],

    [
      "2010–19",
      "New agendas",
      "2010–2019 · New agendas",
      "Digital convergence broadens the debate to social media, disinformation, political communication, artificial intelligence, gender and communication rights."
    ],

    [
      "2020",
      "Virtuality",
      "2020 · Going virtual",
      "The pandemic interrupts in-person meetings and moves activities to digital platforms, transforming participation while maintaining academic ties."
    ],

    [
      "2021",
      "Mendoza",
      "2021 · Return to in-person meetings",
      "The event returns to an in-person format in Mendoza, focusing on overinformation, disinformation and communication changes caused by the pandemic."
    ],

    [
      "2024",
      "San Luis",
      "2024 · San Luis is chosen",
      "FADECCOS approves the Faculty of Human Sciences at the National University of San Luis as host of the 22nd ENACOM."
    ],

    [
      "2025",
      "22nd ENACOM",
      "2025 · ENACOM in San Luis",
      "From November 5 to 7, the National University of San Luis hosts the 22nd National Meeting of Communication Programs."
    ]

  ],


  pt: [

    [
      "1983",
      "AFACOS",
      "1983 · Nasce a AFACOS",
      "No retorno da democracia argentina, cria-se a Associação Federal de Carreiras de Comunicação Social, o primeiro espaço federal de articulação entre universidades."
    ],

    [
      "2001",
      "FADECCOS",
      "2001 · Formalização da FADECCOS",
      "A AFACOS transforma-se na Federação Argentina de Carreiras de Comunicação Social, ampliando a representação e a coordenação entre universidades."
    ],

    [
      "2002",
      "Primeiro ENACOM",
      "2002 · O primeiro ENACOM",
      "A FADECCOS organiza em Olavarría o primeiro Encontro Nacional de Carreiras de Comunicação, criando um espaço de debate sobre jornalismo, meios e cultura."
    ],

    [
      "2002–10",
      "Expansão federal",
      "2002–2010 · Expansão e consolidação",
      "O encontro passa a circular por diferentes províncias, amplia a participação e incorpora pesquisadores latino-americanos e produções audiovisuais."
    ],

    [
      "2010–19",
      "Novas agendas",
      "2010–2019 · Novas agendas",
      "A convergência digital amplia o debate para redes sociais, desinformação, comunicação política, inteligência artificial, gênero e direitos comunicacionais."
    ],

    [
      "2020",
      "Virtualidade",
      "2020 · Adaptação à virtualidade",
      "A pandemia interrompe os encontros presenciais e transfere as atividades para plataformas digitais, transformando as formas de participação."
    ],

    [
      "2021",
      "Mendoza",
      "2021 · Retorno presencial",
      "O encontro retorna ao formato presencial em Mendoza e recupera o intercâmbio cara a cara, com foco nos impactos comunicacionais da pandemia."
    ],

    [
      "2024",
      "San Luis",
      "2024 · San Luis é escolhida",
      "A FADECCOS aprova a Faculdade de Ciências Humanas da Universidade Nacional de San Luis como sede do XXII ENACOM."
    ],

    [
      "2025",
      "XXII ENACOM",
      "2025 · ENACOM em San Luis",
      "De 5 a 7 de novembro, a Universidade Nacional de San Luis recebe o XXII Encontro Nacional de Carreiras de Comunicação."
    ]

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


  if (!controls || !detail) {

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


    const title =
      document.createElement("h3");

    const text =
      document.createElement("p");


    title.textContent =
      item[2];

    text.textContent =
      item[3];


    detail.appendChild(
      title
    );

    detail.appendChild(
      text
    );

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
        item[0];

      label.textContent =
        item[1];


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


  selectTimelineItem(0);

}



/* =========================================================
   CUENTA REGRESIVA · ENACOM 2026
========================================================= */

/*
  Fecha objetivo:
  4 de noviembre de 2026
  08:00 AM
  Argentina (UTC-03:00)
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


  /*
    Cuando llega al 4 de noviembre
    a las 08:00, queda todo en cero.
  */

  if (remaining <= 0) {

    countdownDays.textContent =
      "0";

    countdownHours.textContent =
      "0";

    countdownMinutes.textContent =
      "0";

    countdownSeconds.textContent =
      "0";


    if (countdownStatus) {

      const lang =
        document.documentElement.lang ||
        "es";


      countdownStatus.textContent =
        translations[lang]
          .countdownComplete;

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
      .padStart(2, "0");


  countdownMinutes.textContent =
    String(minutes)
      .padStart(2, "0");


  countdownSeconds.textContent =
    String(seconds)
      .padStart(2, "0");


  return false;

}



/* =========================================================
   INICIAR
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
