import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { g as github } from "../../chunks/github.js";
import { l as linkedIn, m as mail, P as Page$3 } from "../../chunks/_page.js";
import Page$1 from "./about/_page.svelte.js";
import Page$2 from "./project/_page.svelte.js";
const user = "/_app/immutable/assets/work.b777efc8.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-3c7vy7{transition:transform 0.3s ease-in-out;justify-content:center;align-items:center;width:100%;min-height:100vh;color:var(--color-text)}.home.svelte-3c7vy7{display:flex;flex-direction:row}.hidden.svelte-3c7vy7{opacity:0;transform:scale(0.8);filter:blur(5px);transition:all 1s;transition-delay:100ms}h1.svelte-3c7vy7{width:100%;font-weight:bolder;@media only screen and (max-width: 768px) {\n      text-align: start;\n    }}.socials.svelte-3c7vy7{display:flex;justify-content:start;align-items:center}a.svelte-3c7vy7{background-color:rgb(255, 255, 255);border-radius:50%;margin-inline:2px;display:flex;justify-content:center;align-items:center}img.svelte-3c7vy7{width:38px;height:42px;padding:2px 6px}#user.svelte-3c7vy7{width:400px;height:400px;border-radius:50%;@media only screen and (max-width: 768px) {\n      display: none;\n    }}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-8gb88t_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-8gb88t_END -->`, ""} <section id="home" class="hidden home svelte-3c7vy7" data-svelte-h="svelte-zo8o0h"><div><h1 class="svelte-3c7vy7">Front-End Developer</h1> <p>Hi, I am Utkarsh Shishodia. A passionate Front-end web developer based in
      Noida, India 👋</p> <div class="socials svelte-3c7vy7"><a href="https://github.com/Dante26us" target="_blank" class="svelte-3c7vy7"><img${add_attribute("src", github, 0)} alt="github" class="svelte-3c7vy7"></a> <a href="https://www.linkedin.com/in/utkarsh-shishodia-2ab7b720b/" target="_blank" class="svelte-3c7vy7"><img${add_attribute("src", linkedIn, 0)} alt="linkedIn" class="svelte-3c7vy7"></a> <a href="mailto:utkarshshishodiauk@gmail.com" target="_blank" class="svelte-3c7vy7"><img${add_attribute("src", mail, 0)} alt="mail" class="svelte-3c7vy7"></a></div></div> <div><img id="user"${add_attribute("src", user, 0)} alt="user" class="svelte-3c7vy7"></div></section> <section id="about" class="hidden svelte-3c7vy7">${validate_component(Page$1, "About").$$render($$result, {}, {}, {})}</section> <section id="projects" class="hidden svelte-3c7vy7">${validate_component(Page$2, "Project").$$render($$result, {}, {}, {})}</section> <section id="contact" class="hidden svelte-3c7vy7">${validate_component(Page$3, "Contact").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
