(this["webpackJsonpjfaulstick-site-prototype"]=this["webpackJsonpjfaulstick-site-prototype"]||[]).push([[0],{23:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=(a(28),a(10)),s=a(11),i=a(12),m=a(13),u=a(2),p=a(3),h=a(4),d=function(){var e=function(e){console.log(e)};return c.a.createElement("div",{className:"header fixed-top"},c.a.createElement("div",{className:"header--top"},c.a.createElement("div",{className:"header--brand"},"JF"),c.a.createElement("div",null,c.a.createElement(p.a,{className:"header--bars",icon:h.a,onClick:function(){var e=document.getElementById("nav-group");"header--nav-group"===e.className?e.className+=" open":e.className="header--nav-group"}}))),c.a.createElement("div",{className:"header--nav-group",id:"nav-group"},c.a.createElement(u.Link,{to:"about",spy:!0,smooth:!0,className:"header--nav-item",activeClass:"header--nav-item-active"},"About"),c.a.createElement(u.Link,{to:"skills",spy:!0,smooth:!0,className:"header--nav-item",activeClass:"header--nav-item-active",onSetActive:e},"Skills"),c.a.createElement(u.Link,{to:"portfolio",spy:!0,smooth:!0,className:"header--nav-item",activeClass:"header--nav-item-active",onSetActive:e},"Portfolio")))},v=function(){return c.a.createElement("div",{className:"hero-avatar--container"},c.a.createElement("img",{className:"hero-avatar--image",alt:"joe",src:"./assets/img/portrait-joe.png"}))},g=function(){return c.a.createElement(u.Element,{name:"about"},c.a.createElement("div",null,c.a.createElement("div",{className:"page page--about",id:"about-page"},c.a.createElement("div",{className:"chevron-up--container"}),c.a.createElement("div",{className:"page--main-content"},c.a.createElement("div",{className:"page--about-text-container"},c.a.createElement("h2",null,"Hello, I'm Joe!"),c.a.createElement("p",null,"I am a full stack developer from the Research Triangle area of North Carolina. In additional to HTML, CSS, and JavaScript, my skillset also includes: ",c.a.createElement("i",null,"React"),", ",c.a.createElement("i",null,"AngularJS"),"/",c.a.createElement("i",null,"Angular"),", ",c.a.createElement("i",null,"Node"),", and more."),c.a.createElement("p",null,"My technical background, passion for coding, and eagerness to learn are all assets in my quest for growth."),c.a.createElement("p",null,"Before becoming a full stack developer, I spent 15 years in the video game industry where I worked on AAA, award-winning titles such as",c.a.createElement("i",null," BioShock")," and ",c.a.createElement("i",null,"Civilization VI"),"."),c.a.createElement("p",null,"Contact me"," ",c.a.createElement(u.Link,{to:"contact",className:"text-link",smooth:!0,duration:1500},"below")," ","or find my resume"," ",c.a.createElement("a",{href:"/assets/files/Joseph_Faulstick_2020.pdf",target:"_blank",className:"text-link"},"here"),".")),c.a.createElement(v,null)),c.a.createElement("div",{className:"chevron-down--container"},c.a.createElement(u.Link,{to:"skills",smooth:!0},c.a.createElement(p.a,{icon:h.b,className:"chevron chevron-primary"}))))))},E=function(e){var t=e.skills.map((function(e){return c.a.createElement("li",{className:"skill-group--item",key:e},e)}));return c.a.createElement("div",{className:"skill-group--container"},c.a.createElement("div",{className:"skill-group--title"},e.title||"Skill Group Title"),c.a.createElement("ul",null,t))},f=function(){return c.a.createElement(u.Element,{name:"skills",id:"skills-section"},c.a.createElement("div",{className:"page page--skills bg-gradiant",id:"skills-page"},c.a.createElement("div",{className:"chevron-up--container"},c.a.createElement(u.Link,{to:"about",smooth:!0},c.a.createElement(p.a,{icon:h.e,className:"chevron chevron-white"}))),c.a.createElement("div",{className:"page--main-content page--skill-content"},c.a.createElement(E,{title:"Front-End Technologies",skills:["HTML","CSS","Sass","JavaScript","TypeScript","jQuery","React","AngularJS","Angular 8","GatsbyJS"]}),c.a.createElement(E,{title:"Back-End Technologies",skills:["Node","Express","REST APIs","MySQL","MongoDB"]}),c.a.createElement(E,{title:"Other Skills",skills:["Jasmine","Karma","Jest","Git","Agile Development"]})),c.a.createElement("div",{className:"chevron-down--container"},c.a.createElement(u.Link,{to:"contact",smooth:!0},c.a.createElement(p.a,{icon:h.b,className:"chevron chevron-white"})))))},k=a(5),j=function(){return c.a.createElement(u.Element,{name:"contact"},c.a.createElement("div",{className:"chevron-down--container"},c.a.createElement("div",{className:"social-icon--container"},c.a.createElement("a",{href:"https://www.linkedin.com/in/joseph-faulstick/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{icon:k.b,className:"social-icon"})),c.a.createElement("a",{href:"https://github.com/jfaulstick/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{icon:k.a,className:"social-icon"})),c.a.createElement("a",{href:"https://www.twitter.com/joefaulstick/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{icon:k.c,className:"social-icon"})),c.a.createElement("a",{href:"mailto://jfaulstick@gmail.com",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{icon:h.g,className:"social-icon"}))),c.a.createElement("div",{className:"copyright--container"},"\xa9 Copyright 2020, Joseph Faulstick")))},N=function(e){var t=function(){return e.images.map((function(t){return c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",key:t},c.a.createElement("img",{src:t,className:"project-card--img",alt:e.title}))}))},a=function(){return e.paras.map((function(e){return c.a.createElement("p",{key:"".concat(e.slice(0,10))},e)}))},n=function(){return e.techs.map((function(e){return c.a.createElement("div",{className:"project--tech-item",key:e},e)}))};return c.a.createElement("div",{className:"project-card"},e.logo?c.a.createElement("div",{className:"project-card--logo"},e.displayBoth?c.a.createElement("div",{className:"project-card--title"},e.title):c.a.createElement("span",null),c.a.createElement("img",{src:e.logo,className:"project-card--logo-img",alt:"".concat(e.title,"-logo")})):c.a.createElement("div",{className:"project-card--title"},e.title),c.a.createElement("div",{className:"project-card--content"},c.a.createElement("div",{className:"project-card--img-container"},e.images?c.a.createElement(t,null):c.a.createElement("span",null)),c.a.createElement("div",{className:"project-card--text-container"},e.paras?c.a.createElement(a,null):c.a.createElement("span",null)),c.a.createElement("div",{className:"project-card--tech-container"},e.techs?c.a.createElement(n,null):c.a.createElement("span",null)),c.a.createElement("div",{className:"project-card--link-container"},e.github?c.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{icon:k.a,className:"project-card--link"})):c.a.createElement("div",null),e.github?c.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{icon:h.f,className:"project-card--link"})):c.a.createElement("div",null))))},b=[{title:"Quizit",logo:"./assets/img/quizit-logo.png",displayBoth:!1,images:["./assets/img/quizit1.png","./assets/img/quizit3.png"],paras:["QuizIt! was my final project for the Berkeley Coding Camp class. QuizIt! is a social trivia game where players can join in and compete against one another in a social environment.","QuizIt! Is powered by Open Trivia Database\u2019s library of community provided questions and includes a live chat room for in-game communication among the players. The game loop and state machine was designed using a server / client model with Socket.io used as our communication protocal."],techs:["React","Node","Socket.IO"],github:"https://github.com/jfaulstick/QuizIt",demo:"https://fierce-oasis-31783.herokuapp.com/"},{title:"Code Cats",logo:"./assets/img/codecats-logo.jpg",displayBoth:!0,images:["./assets/img/codecats1.jpg"],paras:["Code Cats was my second team project for the Berkeley Coding Camp class. Our goal in creating Code Cats was to create a social space where our cohort could interact outside of class.","The web application includes a 'Facebook-like' timeline with comments and a profile customizer with authentication through Google oAuth."],techs:["Handlebars","Node","MySQL"],github:"https://github.com/jfaulstick/codecatsdotcom",demo:"http://lit-coast-86942.herokuapp.com/"},{title:"Scrape Da News",displayBoth:!1,images:["./assets/img/scrapedanews1.jpg"],paras:["Scrape Da News was an assignment I received where I was instructed to create my own web scraper, using the Cheerio JavaScript library and MongoDB for non-relational storage. I chose Boston.com's News section as the target website. Visitors can scrape new articles, save favorites, and add notes to their saved articles."],techs:["CheerioJS","Node","MongoDB"],github:"https://github.com/jfaulstick/HW-13---ScrapeDaNews",demo:"https://fathomless-harbor-45708.herokuapp.com/"}],y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).incrementProject=function(){n.stepProject(1)},n.decrementProject=function(){n.stepProject(-1)},n.state={projects:b||[],activeProject:0},n}return Object(s.a)(a,[{key:"stepProject",value:function(e){var t=this.state.projects.length;this.state.activeProject+e>t-1?this.setState({activeProject:0}):this.state.activeProject+e<0?this.setState({activeProject:t-1}):this.setState({activeProject:this.state.activeProject+e})}},{key:"render",value:function(){return c.a.createElement(u.Element,{name:"portfolio"},c.a.createElement("div",{className:"page page--portfolio",id:"portfolio-page"},c.a.createElement("div",{className:"chevron-up--container"},c.a.createElement(u.Link,{to:"skills",smooth:!0},c.a.createElement(p.a,{icon:h.e,className:"chevron chevron-primary"}))),c.a.createElement("div",{className:"page--main-content"},c.a.createElement("div",null,c.a.createElement(p.a,{icon:h.c,className:"chevron chevron-primary",onClick:this.decrementProject})),c.a.createElement(N,{title:this.state.projects[this.state.activeProject].title,logo:this.state.projects[this.state.activeProject].logo,displayBoth:this.state.projects[this.state.activeProject].displayBoth,images:this.state.projects[this.state.activeProject].images,paras:this.state.projects[this.state.activeProject].paras,techs:this.state.projects[this.state.activeProject].techs,github:this.state.projects[this.state.activeProject].github,demo:this.state.projects[this.state.activeProject].demo,key:this.state.projects[this.state.activeProject].title}),c.a.createElement("div",null,c.a.createElement(p.a,{icon:h.d,className:"chevron chevron-primary",onClick:this.incrementProject}))),c.a.createElement(j,null)))}}]),a}(c.a.Component),w=(a(41),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){for(var e,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return Object(l.a)(this,a),(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){u.Events.scrollEvent.register("begin",(function(e,t){console.log("begin",arguments)})),u.Events.scrollEvent.register("end",(function(e,t){console.log("end",arguments)})),u.scrollSpy.update()},e.componentWillUnmount=function(){u.Events.scrollEvent.remove("begin"),u.Events.scrollEvent.remove("end")},e.scrollToTop=function(){u.animateScroll.scrollToTop()},e.checkActive=function(e,t){return!!t&&"/"===t.pathname},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(g,null),c.a.createElement(f,null),c.a.createElement(y,null))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4ac8dbbd.chunk.js.map