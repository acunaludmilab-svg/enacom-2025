/* =========================================================
   ENACOM 2025 / 2026
   Interactividad, idiomas, accesibilidad,
   carrusel, quiz, línea de tiempo y cuenta regresiva
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

      index =
        slides.length - 1;

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


  prevButton.addEventListener(
    "click",
    () => {

      showSlide(
        currentSlide - 1
      );

    }
  );


  nextButton.addEventListener(
    "click",
    () => {

      showSlide(
        currentSlide + 1
      );

    }
  );


  showSlide(0);


  /* Carrusel automático */

  let carouselTimer =
    setInterval(() => {

      showSlide(
        currentSlide + 1
      );

    }, 6500);


  /* Pausar al pasar el mouse */

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

  /* =====================================================
     ESPAÑOL
  ===================================================== */

  es: {

    navEjes:
      "Ejes temáticos",

    navHistoria:
      "Historia",

    navPonencias:
      "Ponencias",

    navInteractivo:
      "Participá",

    navRedes:
      "Redes",


    /* HERO */

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


    /* CUENTA REGRESIVA */

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


    /* GALERÍA */

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


    /* HISTORIA */

    timelineKicker:
      "Recorrido histórico",

    timelineTitle:
      "La historia del ENACOM",

    timelineIntro:
      "Conocé el origen, la evolución y la construcción federal del Encuentro Nacional de Carreras de Comunicación.",


    historyWhatKicker:
      "¿Qué es ENACOM?",

    historyWhatTitle:
      "Un encuentro nacional para pensar la comunicación",

    historyWhatText:
      "El Encuentro Nacional de Carreras de Comunicación (ENACOM) surgió en 2002 como una propuesta para reunir a estudiantes, docentes, investigadores y graduados vinculados al campo de la comunicación social de todo el país.",

    historyWhatText2:
      "Organizado por la Federación Argentina de Carreras de Comunicación Social (FADECCOS), el primer encuentro se realizó en Olavarría y abrió un espacio federal de intercambio, debate y producción académica alrededor de los medios, el periodismo, la cultura, las políticas comunicacionales y las nuevas tecnologías.",

    historyCardLabel:
      "Primer ENACOM",

    historyCardTitle:
      "Olavarría",

    historyCardText:
      "El comienzo de un espacio nacional y federal dedicado al intercambio sobre comunicación.",


    historyPillar1Title:
      "Encuentro",

    historyPillar1Text:
      "Un espacio para reunir a estudiantes, docentes, investigadores y graduados de distintas universidades.",


    historyPillar2Title:
      "Federalización",

    historyPillar2Text:
      "El encuentro comenzó a recorrer distintas provincias, descentralizando la producción y circulación del conocimiento sobre comunicación.",


    historyPillar3Title:
      "Debate",

    historyPillar3Text:
      "A lo largo de los años incorporó nuevas problemáticas vinculadas con los cambios sociales, culturales, tecnológicos y políticos.",


    historyTimelineKicker:
      "Una historia en movimiento",

    historyTimelineTitle:
      "De 1983 hasta hoy",

    historyTimelineText:
      "Seleccioná cada momento para conocer cómo fue transformándose el encuentro.",

    historyClosing:
      "Más de dos décadas después de aquel primer encuentro, ENACOM continúa construyendo un espacio federal para pensar colectivamente los desafíos de la comunicación.",


    /* EJES */

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


    /* PROBLEMÁTICAS */

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


    /* PONENCIAS */

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


    /* MESA DESTACADA */

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


    /* QUIZ */

    quizKicker:
      "Participá",

    quizTitle:
      "¿Cuánto sabés sobre comunicación?",

    quizIntro:
      "Poné a prueba lo que aprendiste durante el recorrido.",

    nextQuestion:
      "Siguiente pregunta",


    /* REDES */

    socialKicker:
      "Seguí el encuentro",

    socialTitle:
      "ENACOM también está en redes",

    socialText:
      "Encontrá más información, fotografías y novedades sobre el Encuentro Nacional de Carreras de Comunicación.",


    /* ACCESIBILIDAD */

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


    /* CIERRE */

    closing:
      "ENACOM 2025 invita a pensar el tiempo de la comunicación como una trama viva: memoria, presente, conflicto, tecnología y derecho a la información en diálogo.",

    footer:
      "Trabajo académico realizado por estudiantes de la carrera de Comunicación Social de la UNNE."

  },


  /* =====================================================
     ENGLISH
  ===================================================== */

  en: {

    navEjes:
      "Thematic axes",

    navHistoria:
      "History",

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
      "Discover the origins, evolution and federal development of the National Meeting of Communication Programs.",


    historyWhatKicker:
      "What is ENACOM?",

    historyWhatTitle:
      "A national meeting to think about communication",

    historyWhatText:
      "The National Meeting of Communication Programs (ENACOM) was created in 2002 as a proposal to bring together students, teachers, researchers and graduates connected to the field of social communication from across Argentina.",

    historyWhatText2:
      "Organized by the Argentine Federation of Social Communication Programs (FADECCOS), the first meeting was held in Olavarría and opened a federal space for exchange, debate and academic production around media, journalism, culture, communication policies and new technologies.",

    historyCardLabel:
      "First ENACOM",

    historyCardTitle:
      "Olavarría",

    historyCardText:
      "The beginning of a national and federal space for exchange and discussion about communication.",


    historyPillar1Title:
      "Meeting",

    historyPillar1Text:
      "A space that brings together students, teachers, researchers and graduates from different universities.",

    historyPillar2Title:
      "Federal scope",

    historyPillar2Text:
      "The meeting began moving across different provinces, decentralizing the production and circulation of knowledge about communication.",

    historyPillar3Title:
      "Debate",

    historyPillar3Text:
      "Over the years, it incorporated new issues connected to social, cultural, technological and political changes.",

    historyTimelineKicker:
      "A history in motion",

    historyTimelineTitle:
      "From 1983 to the present",

    historyTimelineText:
      "Select each moment to discover how the meeting has evolved.",

    historyClosing:
      "More than two decades after that first meeting, ENACOM continues to build a federal space for collectively thinking about the challenges facing communication.",


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
      "What can we do in times of convergence and artificial intelligence?",

    featuredText1:
      "One of ENACOM 2025's most popular panels brought together Martín Becerra (UNQ), Flavia Costa (UBA) and Javier Cristiano (UNC), coordinated by Maximiliano Peret (UNICEN).",

    featuredText2:
      "The event addressed the ethical, political and cultural challenges posed by artificial intelligence in communication: the concentration of power on platforms, changing modes of symbolic production and the need for a critical, democratic view of technology.",

    featuredQuote:
      "“Communication cannot remain on the sidelines of technological transformations: it must intervene, think and propose possible futures.”",


    speaker1Title:
      "Culture, politics and communication",

    speaker1Subtitle:
      "Towards a genealogy of the field: where do we come from?",

    speaker2Title:
      "Communication, convergence and artificial intelligence",

    speaker3Title:
      "Social Sciences and Humanities",

    speaker4Title:
      "Legacies of communication",


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
      "Academic project developed by students of the Social Communication program at UNNE."

  },


  /* =====================================================
     PORTUGUÊS
  ===================================================== */

  pt: {

    navEjes:
      "Eixos temáticos",

    navHistoria:
      "História",

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
      "As fotografias são apresentadas com sua fonte e autoria devidamente identificadas.",


    timelineKicker:
      "Percurso histórico",

    timelineTitle:
      "A história do ENACOM",

    timelineIntro:
      "Conheça a origem, a evolução e a construção federal do Encontro Nacional de Carreiras de Comunicação.",


    historyWhatKicker:
      "O que é o ENACOM?",

    historyWhatTitle:
      "Um encontro nacional para pensar a comunicação",

    historyWhatText:
      "O Encontro Nacional de Carreiras de Comunicação (ENACOM) surgiu em 2002 como uma proposta para reunir estudantes, docentes, pesquisadores e graduados vinculados ao campo da comunicação social de todo o país.",

    historyWhatText2:
      "Organizado pela Federação Argentina de Carreiras de Comunicação Social (FADECCOS), o primeiro encontro foi realizado em Olavarría e abriu um espaço federal de intercâmbio, debate e produção acadêmica sobre os meios de comunicação, o jornalismo, a cultura, as políticas de comunicação e as novas tecnologias.",

    historyCardLabel:
      "Primeiro ENACOM",

    historyCardTitle:
      "Olavarría",

    historyCardText:
      "O início de um espaço nacional e federal dedicado ao intercâmbio e ao debate sobre comunicação.",


    historyPillar1Title:
      "Encontro",

    historyPillar1Text:
      "Um espaço para reunir estudantes, docentes, pesquisadores e graduados de diferentes universidades.",

    historyPillar2Title:
      "Federalização",

    historyPillar2Text:
      "O encontro passou a percorrer diferentes províncias, descentralizando a produção e a circulação do conhecimento sobre comunicação.",

    historyPillar3Title:
      "Debate",

    historyPillar3Text:
      "Ao longo dos anos, incorporou novas questões relacionadas às transformações sociais, culturais, tecnológicas e políticas.",

    historyTimelineKicker:
      "Uma história em movimento",

    historyTimelineTitle:
      "De 1983 até o presente",

    historyTimelineText:
      "Selecione cada momento para conhecer como o encontro foi se transformando.",

    historyClosing:
      "Mais de duas décadas depois daquele primeiro encontro, o ENACOM continua construindo um espaço federal para pensar coletivamente os desafios da comunicação.",


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


    bioMangone:
      "Doutor em Ciências Sociais pela UBA, docente da Universidade de Buenos Aires e da Universidade Nacional de La Pampa. Seu trabalho aborda o discurso político, os meios e a cultura.",

    bioSegura:
      "Professora da UNC e pesquisadora do CONICET. Suas pesquisas abordam desigualdades comunicacionais e digitais, participação social, discursos de ódio e desinformação.",

    bioBecerra:
      "Pesquisador e analista especializado em políticas de comunicação, meios e democracia. É professor da UNQ e da UBA e doutor pela Universidade Autônoma de Barcelona.",

    bioCristiano:
      "Doutor em Sociologia, pesquisador do CONICET e professor da UNC. Seu trabalho explora o tempo social, a imaginação e as formas de vida no capitalismo contemporâneo.",

    bioCosta:
      "Doutora em Ciências Sociais pela UBA, pesquisadora do CONICET e diretora do Tecnoceno Lab. Sua obra explora os vínculos entre tecnologia, corpo e cultura na era do algoritmo.",

    bioPeret:
      "Comunicador, docente e pesquisador. Participou da organização e coordenação das atividades do ENACOM 2025, incluindo a mesa sobre convergência e inteligências artificiais.",

    bioVilte:
      "Docente e pesquisador ligado ao campo da comunicação. Participou do ENACOM 2025 como parte das atividades acadêmicas do encontro.",


    featuredKicker:
      "Mesa de destaque",

    featuredTitle:
      "O que fazer em tempos de convergência e inteligências artificiais?",

    featuredText1:
      "Uma das mesas mais concorridas do ENACOM 2025 reuniu Martín Becerra (UNQ), Flavia Costa (UBA) e Javier Cristiano (UNC), com coordenação de Maximiliano Peret (UNICEN).",

    featuredText2:
      "O encontro abordou os desafios éticos, políticos e culturais da inteligência artificial no campo da comunicação: a concentração de poder nas plataformas, a transformação dos modos de produção simbólica e a necessidade de uma visão crítica e democrática sobre as tecnologias.",

    featuredQuote:
      "“A comunicação não pode ficar à margem das transformações tecnológicas: deve intervir, pensar e propor futuros possíveis.”",


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
      "Trabalho acadêmico realizado por estudantes da carreira de Comunicação Social da UNNE."

  }

};



/* =========================================================
   CAMBIAR IDIOMA
========================================================= */

const languageButtons =
  document.querySelectorAll(".language-btn");


function changeLanguage(lang) {

  if (!translations[lang]) {

    lang = "es";

  }


  document.documentElement.lang =
    lang;


  const elements =
    document.querySelectorAll("[data-i18n]");


  elements.forEach((element) => {

    const key =
      element.dataset.i18n;


    if (
      translations[lang] &&
      translations[lang][key] !== undefined
    ) {

      element.textContent =
        translations[lang][key];

    }

  });


  languageButtons.forEach((button) => {

    button.classList.toggle(
      "active",
      button.dataset.lang === lang
    );

  });


  localStorage.setItem(
    "enacom-language",
    lang
  );


  /* Actualizar quiz */

  if (
    typeof renderQuestion === "function" &&
    typeof currentQuestion !== "undefined" &&
    currentQuestion < quizQuestions.length
  ) {

    renderQuestion();

  }


  /* Actualizar línea de tiempo */

  if (
    typeof renderTimeline === "function"
  ) {

    renderTimeline(lang);

  }

}


languageButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      changeLanguage(
        button.dataset.lang
      );

    }
  );

});


const savedLanguage =
  localStorage.getItem(
    "enacom-language"
  ) || "es";



/* =========================================================
   ACCESIBILIDAD
========================================================= */

let textScale =
  parseFloat(
    localStorage.getItem(
      "enacom-text-scale"
    )
  ) || 1;


document.documentElement.style.setProperty(
  "--text-scale",
  textScale
);


/* AUMENTAR TEXTO */

const increaseTextButton =
  document.getElementById(
    "increase-text"
  );


if (increaseTextButton) {

  increaseTextButton.addEventListener(
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


/* DISMINUIR TEXTO */

const decreaseTextButton =
  document.getElementById(
    "decrease-text"
  );


if (decreaseTextButton) {

  decreaseTextButton.addEventListener(
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


function updateTextScale() {

  document.documentElement.style.setProperty(
    "--text-scale",
    textScale
  );


  localStorage.setItem(
    "enacom-text-scale",
    textScale
  );

}


/* ALTO CONTRASTE */

const contrastButton =
  document.getElementById(
    "contrast-toggle"
  );


if (contrastButton) {

  contrastButton.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "high-contrast"
      );


      localStorage.setItem(
        "enacom-contrast",
        document.body.classList.contains(
          "high-contrast"
        )
      );

    }
  );

}


/* Recuperar contraste guardado */

if (
  localStorage.getItem(
    "enacom-contrast"
  ) === "true"
) {

  document.body.classList.add(
    "high-contrast"
  );

}


/* RESTABLECER */

const resetAccessibilityButton =
  document.getElementById(
    "reset-accessibility"
  );


if (resetAccessibilityButton) {

  resetAccessibilityButton.addEventListener(
    "click",
    () => {

      textScale = 1;

      updateTextScale();

      document.body.classList.remove(
        "high-contrast"
      );

      localStorage.removeItem(
        "enacom-contrast"
      );

    }
  );

}



/* =========================================================
   QUIZ
========================================================= */

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



/* =========================================================
   RENDERIZAR PREGUNTA
========================================================= */

function renderQuestion() {

  if (!quizContainer) return;

  if (!quizNext) return;

  if (!quizResult) return;


  selectedAnswer = null;


  const lang =
    document.documentElement.lang ||
    "es";


  const question =
    quizQuestions[currentQuestion];


  if (!question) return;


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
        document.createElement(
          "button"
        );


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


          document
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


  quizResult.textContent =
    "";


  quizNext.style.display =
    "";


  quizNext.disabled =
    false;

}



/* =========================================================
   SIGUIENTE PREGUNTA
========================================================= */

if (quizNext) {

  quizNext.addEventListener(
    "click",
    () => {

      if (selectedAnswer === null) {

        const lang =
          document.documentElement.lang ||
          "es";


        if (quizResult) {

          if (lang === "pt") {

            quizResult.textContent =
              "Escolha uma resposta antes de continuar.";

          } else if (lang === "en") {

            quizResult.textContent =
              "Choose an answer before continuing.";

          } else {

            quizResult.textContent =
              "Elegí una respuesta antes de continuar.";

          }

        }


        return;

      }


      if (
        selectedAnswer ===
        quizQuestions[
          currentQuestion
        ].correct
      ) {

        score++;

      }


      currentQuestion++;


      if (
        currentQuestion >=
        quizQuestions.length
      ) {

        showQuizResult();

      } else {

        renderQuestion();

      }

    }
  );

}



/* =========================================================
   RESULTADO DEL QUIZ
========================================================= */

function showQuizResult() {

  if (!quizContainer) return;

  if (!quizNext) return;

  if (!quizResult) return;


  const lang =
    document.documentElement.lang ||
    "es";


  quizContainer.innerHTML =
    "";


  quizNext.style.display =
    "none";


  let message = "";


  if (lang === "en") {

    message =
      `You got ${score} out of ${quizQuestions.length} correct.`;

  } else if (lang === "pt") {

    message =
      `Você acertou ${score} de ${quizQuestions.length} perguntas.`;

  } else {

    message =
      `Acertaste ${score} de ${quizQuestions.length} preguntas.`;

  }


  quizResult.textContent =
    message;

}



/* =========================================================
   LÍNEA DEL TIEMPO · HISTORIA ENACOM
========================================================= */

const timelineData = {

  /* =====================================================
     ESPAÑOL
  ===================================================== */

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
    ],

    [
      "2026",
      "Corrientes Capital",
      "2026 · ENACOM en Corrientes",
      "Los días 4, 5 y 6 de noviembre de 2026, Corrientes Capital será sede del próximo ENACOM, continuando la construcción federal de este encuentro nacional de carreras de comunicación."
    ]

  ],


  /* =====================================================
     ENGLISH
  ===================================================== */

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
    ],

    [
      "2026",
      "Corrientes Capital",
      "2026 · ENACOM in Corrientes",
      "On November 4, 5 and 6, 2026, Corrientes Capital will host the next ENACOM, continuing the federal development of this national meeting of communication programs."
    ]

  ],


  /* =====================================================
     PORTUGUÊS
  ===================================================== */

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
    ],

    [
      "2026",
      "Corrientes Capital",
      "2026 · ENACOM em Corrientes",
      "Nos dias 4, 5 e 6 de novembro de 2026, Corrientes Capital será sede do próximo ENACOM, dando continuidade à construção federal deste encontro nacional de carreiras de comunicação."
    ]

  ]

};



/* =========================================================
   RENDERIZAR LÍNEA DE TIEMPO
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


  if (!controls || !detail) return;


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
      document.createElement(
        "h3"
      );


    const text =
      document.createElement(
        "p"
      );


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
        String(index === 0)
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
        translations[
          lang
        ].countdownComplete;

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
      (totalSeconds % 86400) /
      3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) /
      60
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
   INICIAR TODO
========================================================= */

changeLanguage(
  savedLanguage
);


renderQuestion();


if (!updateCountdown()) {

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
