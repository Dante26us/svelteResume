<script>
    // @ts-nocheck
  
    import Card from "../../components/Card.svelte";
    import baxa from "../../lib/images/baxa.png";
    import svelteResume from "../../lib/images/svelteResume.png";
    import nextApp from "../../lib/images/nextDemo.png";
    import fireChatApp from "../../lib/images/fireChatApp.jpg"
    import { onMount } from "svelte";
    let obj = [
      {
        id: 1,
        heading: "Bharti AXA Digiserve",
        description:
          "Digiserve is an online portal for policy holders of Bharti AXA. Built by To The New, I helped build the front-end platform from scratch and implemented various payment related functionalities.",
        githublink: "",
        sitelink: "https://www.bhartiaxa.com/customer-service-login/",
        imglink: baxa,
        technology: "React, Redux, SASS",
        imgalt: "baxa",
      },
      {
        id: 2,
        heading: "Portfolio Website",
        description:
          "THe current website which was made with the help of svelte and svelte kit.",
        githublink: "https://github.com/Dante26us/svelteResume",
        sitelink: "https://jocular-bombolone-5c483a.netlify.app/",
        imglink: svelteResume,
        technology: "Svelte, Svelte Kit, CSS",
        imgalt: "svelteResume",
      },
      {
        id: 3,
        heading: "Live Chat App",
        description:
          "A live group chat application made with React and firebase. It showcases google Authentication and using Cloud firestore for a live seamless chat as well using zustand as a state management tool",
        githublink: "https://github.com/Dante26us/fireChatApp",
        sitelink: "https://fir-chatapp-1e65f.web.app/",
        imglink: fireChatApp,
        technology: "React, Zustand, Firebase",
        imgalt: "next App",
      },
      {
        id: 4,
        heading: "Full Stack Next App",
        description:
          "This is a full stack Next js web application, complete with authentication based on JWT token as well as performing various CRUD operations with the help of MongoDB.",
        githublink: "https://github.com/Dante26us/next-demo",
        sitelink: "",
        imglink: nextApp,
        technology: "NextJS, mongoDB, SCSS",
        imgalt: "next App",
      },
    ];
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("showCards");
          else entry.target.classList.remove("showCards");
        });
      });
  
      const elements = document.querySelectorAll(".card");
      elements.forEach((el) => observer.observe(el));
    });
  </script>
  
  <svelte:head>
    <title>Projects</title>
    <meta name="description" content="Projects I've worked on." />
  </svelte:head>
  
  <div class="project">
    <h1>Projects</h1>
  
    {#each obj as item}
      <Card {item} />
    {/each}
  </div>
  
  <style>
    .project {
      color: var(--color-text);
    }
    h1 {
      margin-top: 2em;
    }
  </style>
  