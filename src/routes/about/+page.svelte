<script>
  // @ts-nocheck

  import html from "../../lib/images/html5-6652.svg";
  import css from "../../lib/images/css-3-svgrepo-com.svg";
  import js from "../../lib/images/js-svgrepo-com.svg";
  import react from "../../lib/images/react-svgrepo-com.svg";
  import about from "../../lib/images/section2about.gif";
  import tothenew from "../../lib/images/tothenew.jpeg";
  import secure from "../../lib/images/secure.jpg";

  import { onMount } from "svelte";
  /**
   * @type {number[]}
   */

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("techShow");
        } else {
          entry.target.classList.remove("techShow");
        }
      });
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aboutShow");
        } else {
          entry.target.classList.remove("aboutShow");
        }
      });
    });

    const elements = document.querySelectorAll(".tech");
    elements.forEach((el) => observer.observe(el));

    const elements2 = document.querySelectorAll(".aboutInfo");
    elements2.forEach((el) => observer2.observe(el));
  });
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>
<div id="text-column">
  <h1>Tech Stack</h1>
  <div id="tech_stack">
    <img class="tech" src={html} alt="html" />
    <img class="tech" src={css} alt="css" />
    <img class="tech" src={js} alt="js" />
    <img class="tech" src={react} alt="react" />
  </div>
  <div class="about">
    <div>
      <h1>About me</h1>
      <p>
        As a Front-End Developer, I possess an impressive arsenal of skills in
        HTML, CSS, JavaScript, React, Nextjs, and SCSS. I excel in designing and
        maintaining responsive websites that offer a smooth user experience. My
        expertise lies in crafting dynamic, engaging interfaces through writing
        clean and optimized code and utilizing cutting-edge development tools
        and techniques. I am also a team player who thrives in collaborating
        with cross-functional teams to produce outstanding web applications.
      </p>
    </div>
    <img class="aboutImg" src={about} alt="aboutWork" />
  </div>
  <a class="hireButton" href="mailto:utkarshshishodiauk@gmail.com">Hire Me</a>
</div>
<div>
  <h1>Work experience</h1>
  <div class="about2">
    <div class="about">
      <img class="tothenew tech" src={tothenew} alt="tothenew" />
      <div class="aboutInfo">
        <h3>To The New</h3>
        <h2>Software Engineer</h2>
        <h4>09-21/Present</h4>
        <ul>
          <li>
            Building stable and maintainable codebase using react and redux.
          </li>
          <li>
            Expanding features, refining code and improving processes, and
            performing a smoother user experience. Reviewing other teammates’
            code and managing pull requests and deployments.
          </li>
          <li>
            Working closely with clients to establish specifications and system
            design, replicating UI design from Adobe XD ensuring to deliver
            pixel-perfect UI.
          </li>
          <li>
            Working in Agile development environment, using tools such as JIRA
            and Git for project management and version control to ensure timely
            delivery.
          </li>
          <li>
            Improving website performance by optimizing, implementing lazy
            loading techniques and dynamic importing.
          </li>
          <li>Building PWA's and also exporting them to Goggle Play store.</li>
        </ul>
      </div>
    </div>
    <div class="about">
      <div class="aboutInfo">
        <h3>Secure Meters</h3>
        <h2>Trainee Software Engineer</h2>
        <h4>01-21/06-21</h4>
        <ul>
          <li>
            Developed web application using React, HTML, CSS, Redux and
            JavaScript.
          </li>
          <li>
            Developed frontend interface for meter testing tool. Debugging any
            code issues and fixing errors as well as optimizing the code.
          </li>
          <li>
            Improved UI design as well as developed reusable modular components
            for reusing in multiple metrics.
          </li>
        </ul>
      </div>
      <img class="tothenew tech" src={secure} alt="secure" />
    </div>
  </div>
</div>

<style>
  #text-column {
    color: var(--color-text);
  }
  h1 {
    margin-top: 2em;
    color: var(--color-text);
  }
  #tech_stack {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .tech:nth-child(2) {
    transition-delay: 200ms;
  }
  .tech:nth-child(2) {
    transition-delay: 400ms;
  }

  .tech:nth-child(3) {
    transition-delay: 600ms;
  }

  .tech:nth-child(4) {
    transition-delay: 800ms;
  }
  .tech {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s;
    margin-top: 0em;
    @media only screen and (max-width: 768px) {
      width: 4em;
    }
  }
  img {
    width: 100%;
    height: 6em;
    margin-top: 2em;
  }
  .about {
    display: flex;
    flex-direction: row;
    color: var(--color-text);
  }
  .aboutInfo {
    transition: all 1s;
    opacity: 0;
    transform: translateY(100%);
  }

  .about2 {
    display: flex;
    flex-direction: column;
  }
  .aboutImg {
    width: 60em;
    height: 20em;
    border-radius: 4px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .hireButton {
    background-color: var(--color-theme-1);
    color: white;
    padding: 10px 15px;
    border-radius: 4px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .hireButton:hover {
    text-decoration: none;
    background-color: rgb(197, 16, 16);
    color: white;
  }
  .tothenew {
    height: 10em;
    width: 15em;
    margin-right: 20px;
    border-radius: 6px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  ul {
    padding-left: 1em;
  }
</style>
