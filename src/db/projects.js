export const projects = [
  {
    title: "Quizit",
    logo: "./assets/img/quizit-logo.png",
    displayBoth: false,
    images: ["./assets/img/quizit1.png", "./assets/img/quizit3.png"],
    paras: [
      `QuizIt! was my final project for the Berkeley Coding Camp class. QuizIt! is a social trivia game where players can join in and compete against one another in a social environment.`,
      `QuizIt! Is powered by Open Trivia Database’s library of community provided questions and includes a live chat room for in-game communication among the players. The game loop and state machine was designed using a server / client model with Socket.io used as our communication protocal.`,
    ],
    techs: ["React", "Node", "Socket.IO"],
    github: "https://github.com/jfaulstick/QuizIt",
    demo: "https://fierce-oasis-31783.herokuapp.com/",
  },
  {
    title: "Code Cats",
    logo: "./assets/img/codecats-logo.jpg",
    displayBoth: true,
    images: ["./assets/img/codecats1.jpg"],
    paras: [
      `Code Cats was my second team project for the Berkeley Coding Camp class. Our goal in creating Code Cats was to create a social space where our cohort could interact outside of class.`,
      `The web application includes a 'Facebook-like' timeline with comments and a profile customizer with authentication through Google oAuth.`,
    ],
    techs: ["Handlebars", "Node", "MySQL"],
    github: "https://github.com/jfaulstick/codecatsdotcom",
    demo: "http://lit-coast-86942.herokuapp.com/",
  },
  {
    title: "Scrape Da News",
    displayBoth: false,
    images: ['./assets/img/scrapedanews1.jpg'],
    paras: [
      `Scrape Da News was an assignment I received where I was instructed to create my own web scraper, using the Cheerio JavaScript library and MongoDB for non-relational storage. I chose Boston.com's News section as the target website. Visitors can scrape new articles, save favorites, and add notes to their saved articles.`,
    ],
    techs: ['CheerioJS', 'Node', 'MongoDB'],
    github: 'https://github.com/jfaulstick/HW-13---ScrapeDaNews',
    demo: 'https://fathomless-harbor-45708.herokuapp.com/'
  },
];
