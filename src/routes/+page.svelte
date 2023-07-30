<script>
  // @ts-nocheck

  import github from "../lib/socials/github.svg";
  import linkedIn from "../lib/socials/linkedin.svg";
  import mail from "../lib/socials/mail.svg";
  import user from "../lib/images/work.png";
  import About from "./about/+page.svelte";
  import Contact from "./contact/+page.svelte";
  import Project from "./project/+page.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
      });
    });

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="home" class="hidden home">
  <div>
    <h1>Front-End Developer</h1>
    <p>
      Hi, I am Utkarsh Shishodia. A passionate Front-end web developer based in
      Noida, India 👋
    </p>

    <div class="socials">
      <a href="https://github.com/Dante26us" target="_blank">
        <img src={github} alt="github" /></a
      >
      <a
        href="https://www.linkedin.com/in/utkarsh-shishodia-2ab7b720b/"
        target="_blank"><img src={linkedIn} alt="linkedIn" /></a
      >
      <a href="mailto:utkarshshishodiauk@gmail.com" target="_blank"
        ><img src={mail} alt="mail" /></a
      >
    </div>
  </div>
  <div>
    <img id="user" src={user} alt="user" />
  </div>
</section>
<section id="about" class="hidden">
  <About />
</section>
<section id="projects" class="hidden">
  <Project />
</section>
<section id="contact" class="hidden">
  <Contact />
</section>

<style>
  section {
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    /* flex: 1; */
    color: var(--color-text);
  }
  .home {
    display: flex;
    flex-direction: row;
  }
  .hidden {
    opacity: 0;
    transform: scale(0.8);
    filter: blur(5px);
    transition: all 1s;
    transition-delay: 100ms;
  }
  h1 {
    width: 100%;
    font-weight: bolder;
    @media only screen and (max-width: 768px) {
      text-align: start;
    }
  }

  .socials {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  a {
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    margin-inline: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 38px;
    height: 42px;
    padding: 2px 6px;
  }
  #user {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
</style>
