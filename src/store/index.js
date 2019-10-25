import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {
      id: "",
      name: "Boise CodeCamp",
      date: "March 23",
      location: "Boise, Id",
      address: ""
    },
    keynote: {
      speaker: {
        name: "Jerry Nixon",
        title: "Software Evangilist",
        company: "Microsoft",
        img:
          "https://visualstudiomagazine.com/articles/2018/07/17/~/media/ECG/VSLive/2018/chicago/speakers/Nixon_Jerry_2.png"
      },
      title: "Quantum Computing and the Future of Software Development",
      abstract:
        "Developers like you and I need to realize this is inevitable, and we need to recognize that these changes are just starting and we can get in on the ground floor and thrive through integration and simply not resisting.",
      time: "8:30-9:30",
      session: "keynote"
    },
    sessions: [
      {
        name: "Technical SEO for AI Driven Algorithms",
        speaker: {
          name: "Shawn Bailey",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company"
        },
        session: "Session 1",
        time: "9:45-11:00",
        location: "Hatch D",
        abstract:
          "Why should you care about Search Engine Optimization in 2019? The search market has changed drastically in the last 18 months. Contextual Search, Machine Learning, and Artificial Intelligence are plowing their way into how consumers and companies find the information they need and want. Early indications show that while the new tech is promising, it is temporarily widening the gap between humans and computers on a large scale. Using SEO as an example, you will see how search is changing, and how to work with an AI adjusted algorithm.",
        level: "Beginner"
      },
      {
        name: "Introduction to Temporal Tables",
        speaker: {
          name: "Robert Ellis",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Unit Testing Makes Me Faster",
        speaker: {
          name: "Jeremy Clark",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "An Introduction to Running Databases on Docker",
        speaker: {
          name: "Sean Scott",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Troubleshooting SaaS",
        speaker: {
          name: "Scott Golightly",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Prism.Forms 101",
        speaker: {
          name: "Dan Siegel",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Building Data Science Teams",
        speaker: {
          name: "Conrad Kennington",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Software Law",
        speaker: {
          name: "Brad Frazer",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Go North",
        speaker: {
          name: "Mark Ohnsman",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Intro to Lego Mindstorm",
        speaker: {
          name: "FLL Team 1790",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 1",
        time: "9:45-11:00"
      },
      {
        name: "Getting started with TensorFlow",
        speaker: {
          name: "Tsun Mok",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Functional Programming Light",
        speaker: {
          name: "Dylan Paulus",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "How to Build a Succesful Software Business or Startup",
        speaker: {
          name: "Shawn Bailey",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Intro to BimlExpress",
        speaker: {
          name: "Robert Ellis",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Delegates in C#",
        speaker: {
          name: "Jeremy Clark",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Running Databases on Docker",
        speaker: {
          name: "Sean Scott",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "From 0 to IoT in an Hour",
        speaker: {
          name: "Scott Golightly",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Prism Modularity",
        speaker: {
          name: "Dan Siegel",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Meaning in Machines",
        speaker: {
          name: "Casey Kennington",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Android AR",
        speaker: {
          name: "Boise State NASA SUITS Team",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 2",
        time: "11:10-12:25"
      },
      {
        name: "Distributed prime number computing with Raspberry Pis",
        speaker: {
          name: "Priyesh Padmavilasom",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Unity Game",
        speaker: {
          name: "Ben Taylor",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Intro to Graphql + Apollo",
        speaker: {
          name: "Haley Boyle",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Wierd Agile Terms",
        speaker: {
          name: "Joel Robinson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "PowerShell 101",
        speaker: {
          name: "Ryan Coates",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Intro to Source Control",
        speaker: {
          name: "Robert Ellis",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Bootstrap.js - Chart.js - Math.js",
        speaker: {
          name: "Brian Holaday",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Business Agility",
        speaker: {
          name: "Jason Dean",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "Introduction to Azure DevOps Services",
        speaker: {
          name: "Richard Hundhausen",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "ML 101",
        speaker: {
          name: "Nate Monnig",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 3",
        time: "1:40-2:55"
      },
      {
        name: "DevOps: WIIFM?",
        speaker: {
          name: "Miceli & Weers",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Data-Based Decision Making Utilizing UX Tools & Philosophies",
        speaker: {
          name: "Melissa Thompson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "React Native",
        speaker: {
          name: "Tavian Robertson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Programming with Scratch",
        speaker: {
          name: "Scott Schimanski",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name:
          "Locally sourced, hand crafted and sustainable test data to make your testing tasks easier",
        speaker: {
          name: "Aaron Backer",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Introduction to TypeScript",
        speaker: {
          name: "Daniel Breen",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "PowerShell Toolmaking",
        speaker: {
          name: "Ryan Coates",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Linux Networking and Automation",
        speaker: {
          name: "Doug Applegate",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Workplace Readiness",
        speaker: {
          name: "Brian Holaday",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Mathematical Explorations through (Clean) Coding",
        speaker: {
          name: "Joseph Hales",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 4",
        time: "3:05-4:20"
      },
      {
        name: "Vue.js Intro",
        speaker: {
          name: "Scott Henscheid",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Intro to GraphQL",
        speaker: {
          name: "Josh Davidson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Agile at Distance and Scale",
        speaker: {
          name: "Robert Pepka",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: 'What is "this"?',
        speaker: {
          name: "Jedediah Smith",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "How a Web Browser Works",
        speaker: {
          name: "Brice Johnson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Coder's Club Playground",
        speaker: {
          name: "Kim Miller",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Intro to .NET Core",
        speaker: {
          name: "Ryan Thompson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Adventures in Freelancing",
        speaker: {
          name: "Jeremy Zerr",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Intro to Docker",
        speaker: {
          name: "Ryan Coates",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      },
      {
        name: "Dashboards with SignalR and React",
        speaker: {
          name: "Andrew Hanson",
          img: "//placehold.it/80x80",
          title: "Software Developer",
          company: "ABC Company",
        },
        abstract: "An Abstract goes here",
        location: "Hatch B",
        session: "Session 5",
        time: "4:30-5:45"
      }
    ],
    sponsors: [
      {
        name: "Microsoft",
        logo:
          "https://www.stickpng.com/assets/images/58480fd7cef1014c0b5e4943.png",
        url: "https://microsoft.com",
        level: "platinum"
      },
      {
        name: "CodeWorks",
        logo:
          "https://bcw.blob.core.windows.net/public/img/codeworks-circle-colored.png",
        url: "https://boisecodeworks.com",
        level: "platinum"
      },
      {
        name: "Microsoft",
        logo: "https://boisecodeworks.com/assets/img/logo_footer.png",
        url: "https://microsoft.com",
        level: "gold"
      },
      {
        name: "Microsoft",
        logo:
          "https://bcw.blob.core.windows.net/public/img/www/assets/6766727554593956",
        url: "https://microsoft.com",
        level: "gold"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
