import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { g as github } from "../../../chunks/github.js";
const site = "/_app/immutable/assets/site.5ad6f035.svg";
const Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-8i5z62{width:60em;height:20em;padding:10px;border-radius:6px;display:flex;justify-content:space-between;text-align:center;transition:all 1s;transform-origin:left top;@media only screen and (max-width: 768px) {\r\n      height: auto;\r\n    }}h2.svelte-8i5z62{font-size:1.6em;font-weight:bolder}.cardInfo.svelte-8i5z62{display:flex;flex-direction:column;max-width:25em}.buttons.svelte-8i5z62{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}a.svelte-8i5z62{display:flex;justify-content:space-between;align-items:center;width:10em;border:2px solid var(--color-text);margin-right:1em;border-radius:6px;color:var(--color-bg-0);background-color:var(--color-bg-3);box-sizing:border-box;@media only screen and (max-width: 768px) {\r\n      width: auto;\r\n      min-width: 20%;\r\n    }}p.svelte-8i5z62{padding:5px 15px;margin:0}.aImg.svelte-8i5z62{padding:2px;background-color:rgb(255, 255, 255);position:relative;left:0px;border-radius:4px}a.svelte-8i5z62:hover{text-decoration:none;cursor:pointer}img.svelte-8i5z62{width:2em}.card_image.svelte-8i5z62{border-radius:8px;display:block;max-width:40em;max-height:15em;width:auto;height:auto;border:1px solid var(--color-text)}@media only screen and (max-width: 768px){.card.svelte-8i5z62{width:100%;margin-bottom:10%;align-items:center;flex-direction:column !important}.card_image.svelte-8i5z62{max-width:15em}.cardInfo.svelte-8i5z62{max-width:20em}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$1);
  return `${item ? `<div class="card svelte-8i5z62" style="${"flex-direction: " + escape(item.id % 2 === 1 ? "row-reverse" : "row", true) + "; transform :translateX(" + escape(item.id % 2 === 1 ? "-100" : "-20", true) + "%)"}"><img class="card_image svelte-8i5z62"${add_attribute("src", item.imglink, 0)}${add_attribute("alt", item.imgalt, 0)}> <div class="cardInfo svelte-8i5z62"><h2 class="svelte-8i5z62">${escape(item.heading)}</h2> <p class="svelte-8i5z62">${escape(item.description)}</p> <h2 class="svelte-8i5z62">${escape(item.technology)}</h2> <div class="buttons svelte-8i5z62">${item.githublink ? `<a${add_attribute("href", item.githublink, 0)} target="_blank" class="svelte-8i5z62"><p class="svelte-8i5z62" data-svelte-h="svelte-vowyyl">code </p><img class="aImg svelte-8i5z62"${add_attribute("src", github, 0)} alt="code"></a>` : ``} ${item.sitelink ? `<a${add_attribute("href", item.sitelink, 0)} target="_blank" class="svelte-8i5z62"><p class="svelte-8i5z62" data-svelte-h="svelte-3t6xpf">Live Demo </p><img class="aImg svelte-8i5z62"${add_attribute("src", site, 0)} alt="site"></a>` : ``}</div></div></div>` : ``}`;
});
const baxa = "/_app/immutable/assets/baxa.3682d432.png";
const svelteResume = "/_app/immutable/assets/svelteResume.0a01a68c.png";
const nextApp = "/_app/immutable/assets/nextDemo.fa89982d.png";
const fireChatApp = "/_app/immutable/assets/fireChatApp.2a72aaec.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project.svelte-16nd83d{color:var(--color-text)}h1.svelte-16nd83d{margin-top:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let obj = [
    {
      id: 1,
      heading: "Bharti AXA Digiserve",
      description: "Digiserve is an online portal for policy holders of Bharti AXA. Built by To The New, I helped build the front-end platform from scratch and implemented various payment related functionalities.",
      githublink: "",
      sitelink: "https://www.bhartiaxa.com/customer-service-login/",
      imglink: baxa,
      technology: "React, Redux, SASS",
      imgalt: "baxa"
    },
    {
      id: 2,
      heading: "Portfolio Website",
      description: "THe current website which was made with the help of svelte and svelte kit.",
      githublink: "https://github.com/Dante26us/svelteResume",
      sitelink: "https://www.bhartiaxa.com/customer-service-login/",
      imglink: svelteResume,
      technology: "Svelte, Svelte Kit, CSS",
      imgalt: "svelteResume"
    },
    {
      id: 3,
      heading: "Live Chat App",
      description: "A live group chat application made with React and firebase. It showcases google Authentication and using Cloud firestore for a live seamless chat as well using zustand as a state management tool",
      githublink: "https://github.com/Dante26us/fireChatApp",
      sitelink: "https://fir-chatapp-1e65f.web.app/",
      imglink: fireChatApp,
      technology: "React, Zustand, Firebase",
      imgalt: "next App"
    },
    {
      id: 4,
      heading: "Full Stack Next App",
      description: "This is a full stack Next js web application, complete with authentication based on JWT token as well as performing various CRUD operations with the help of MongoDB.",
      githublink: "https://github.com/Dante26us/next-demo",
      sitelink: "",
      imglink: nextApp,
      technology: "NextJS, mongoDB, SCSS",
      imgalt: "next App"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1aknjtd_START -->${$$result.title = `<title>Projects</title>`, ""}<meta name="description" content="Projects I've worked on."><!-- HEAD_svelte-1aknjtd_END -->`, ""} <div class="project svelte-16nd83d"><h1 class="svelte-16nd83d" data-svelte-h="svelte-136d6se">Projects</h1> ${each(obj, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}`;
  })} </div>`;
});
export {
  Page as default
};
