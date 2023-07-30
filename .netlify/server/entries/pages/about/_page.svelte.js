import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const html = "/_app/immutable/assets/html5-6652.f1d470f0.svg";
const css = "/_app/immutable/assets/css-3-svgrepo-com.fa745604.svg";
const js = "/_app/immutable/assets/js-svgrepo-com.9fd58cef.svg";
const react = "/_app/immutable/assets/react-svgrepo-com.42c08455.svg";
const about = "/_app/immutable/assets/section2about.01033bfb.gif";
const tothenew = "/_app/immutable/assets/tothenew.237c28d8.jpeg";
const secure = "/_app/immutable/assets/secure.4fbd84bc.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#text-column.svelte-d5zfa2{color:var(--color-text)}h1.svelte-d5zfa2{margin-top:2em;color:var(--color-text)}#tech_stack.svelte-d5zfa2{display:flex;flex-direction:row;align-items:center;justify-content:center}.tech.svelte-d5zfa2:nth-child(2){transition-delay:200ms}.tech.svelte-d5zfa2:nth-child(2){transition-delay:400ms}.tech.svelte-d5zfa2:nth-child(3){transition-delay:600ms}.tech.svelte-d5zfa2:nth-child(4){transition-delay:800ms}.tech.svelte-d5zfa2{opacity:0;transform:translateX(-100%);transition:all 1s;margin-top:0em;@media only screen and (max-width: 768px) {\n      width: 4em;\n    }}img.svelte-d5zfa2{width:100%;height:6em;margin-top:2em}.about.svelte-d5zfa2{display:flex;flex-direction:row;color:var(--color-text)}.aboutInfo.svelte-d5zfa2{transition:all 1s;opacity:0;transform:translateY(100%)}.about2.svelte-d5zfa2{display:flex;flex-direction:column}.aboutImg.svelte-d5zfa2{width:60em;height:20em;border-radius:4px;@media only screen and (max-width: 768px) {\n      display: none;\n    }}.hireButton.svelte-d5zfa2{background-color:var(--color-theme-1);color:white;padding:10px 15px;border-radius:4px;@media only screen and (max-width: 768px) {\n      display: none;\n    }}.hireButton.svelte-d5zfa2:hover{text-decoration:none;background-color:rgb(197, 16, 16);color:white}.tothenew.svelte-d5zfa2{height:10em;width:15em;margin-right:20px;border-radius:6px;@media only screen and (max-width: 768px) {\n      display: none;\n    }}ul.svelte-d5zfa2{padding-left:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1tg1fb6_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1tg1fb6_END -->`, ""} <div id="text-column" class="svelte-d5zfa2" data-svelte-h="svelte-1pzhqv"><h1 class="svelte-d5zfa2">Tech Stack</h1> <div id="tech_stack" class="svelte-d5zfa2"><img class="tech svelte-d5zfa2"${add_attribute("src", html, 0)} alt="html"> <img class="tech svelte-d5zfa2"${add_attribute("src", css, 0)} alt="css"> <img class="tech svelte-d5zfa2"${add_attribute("src", js, 0)} alt="js"> <img class="tech svelte-d5zfa2"${add_attribute("src", react, 0)} alt="react"></div> <div class="about svelte-d5zfa2"><div><h1 class="svelte-d5zfa2">About me</h1> <p>As a Front-End Developer, I possess an impressive arsenal of skills in
        HTML, CSS, JavaScript, React, Nextjs, and SCSS. I excel in designing and
        maintaining responsive websites that offer a smooth user experience. My
        expertise lies in crafting dynamic, engaging interfaces through writing
        clean and optimized code and utilizing cutting-edge development tools
        and techniques. I am also a team player who thrives in collaborating
        with cross-functional teams to produce outstanding web applications.</p></div> <img class="aboutImg svelte-d5zfa2"${add_attribute("src", about, 0)} alt="aboutWork"></div> <a class="hireButton svelte-d5zfa2" href="mailto:utkarshshishodiauk@gmail.com">Hire Me</a></div> <div data-svelte-h="svelte-z7oh70"><h1 class="svelte-d5zfa2">Work experience</h1> <div class="about2 svelte-d5zfa2"><div class="about svelte-d5zfa2"><img class="tothenew tech svelte-d5zfa2"${add_attribute("src", tothenew, 0)} alt="tothenew"> <div class="aboutInfo svelte-d5zfa2"><h3>To The New</h3> <h2>Software Engineer</h2> <h4>09-21/Present</h4> <ul class="svelte-d5zfa2"><li>Building stable and maintainable codebase using react and redux.</li> <li>Expanding features, refining code and improving processes, and
            performing a smoother user experience. Reviewing other teammates’
            code and managing pull requests and deployments.</li> <li>Working closely with clients to establish specifications and system
            design, replicating UI design from Adobe XD ensuring to deliver
            pixel-perfect UI.</li> <li>Working in Agile development environment, using tools such as JIRA
            and Git for project management and version control to ensure timely
            delivery.</li> <li>Improving website performance by optimizing, implementing lazy
            loading techniques and dynamic importing.</li> <li>Building PWA&#39;s and also exporting them to Goggle Play store.</li></ul></div></div> <div class="about svelte-d5zfa2"><div class="aboutInfo svelte-d5zfa2"><h3>Secure Meters</h3> <h2>Trainee Software Engineer</h2> <h4>01-21/06-21</h4> <ul class="svelte-d5zfa2"><li>Developed web application using React, HTML, CSS, Redux and
            JavaScript.</li> <li>Developed frontend interface for meter testing tool. Debugging any
            code issues and fixing errors as well as optimizing the code.</li> <li>Improved UI design as well as developed reusable modular components
            for reusing in multiple metrics.</li></ul></div> <img class="tothenew tech svelte-d5zfa2"${add_attribute("src", secure, 0)} alt="secure"></div></div> </div>`;
});
export {
  Page as default
};
