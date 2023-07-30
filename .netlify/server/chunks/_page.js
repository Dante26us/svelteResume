import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
import { g as github } from "./github.js";
const linkedIn = "/_app/immutable/assets/linkedin.df094597.svg";
const mail = "/_app/immutable/assets/mail.77b04fce.svg";
const mobile = "/_app/immutable/assets/mobile.48ff3ae6.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contact.svelte-m1cl2v{color:var(--color-text)}h1.svelte-m1cl2v{margin-top:2em}h2.svelte-m1cl2v{text-align:center;font-weight:bold;font-size:1.6em}.socials.svelte-m1cl2v{display:flex;flex-direction:row;justify-content:center}.card_image.svelte-m1cl2v{border-radius:8px;display:block;width:5em;height:5em;margin-inline:20px;border-radius:12px;background-color:rgb(255, 255, 255);@media only screen and (max-width: 768px) {\r\n    width: 2em;\r\n    height: 2em;\r\n    margin-inline: 10px;\r\n  }}.hidden.svelte-m1cl2v{opacity:0;transform:translateX(100%);transition:all 1s}.hidden.svelte-m1cl2v:nth-child(2){transition-delay:200ms}.hidden.svelte-m1cl2v:nth-child(2){transition-delay:400ms}.hidden.svelte-m1cl2v:nth-child(3){transition-delay:600ms}.hidden.svelte-m1cl2v:nth-child(4){transition-delay:800ms}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xbrkyp_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="description" content="contact details"><!-- HEAD_svelte-1xbrkyp_END -->`, ""} <div class="contact svelte-m1cl2v" data-svelte-h="svelte-1lccf2p"><h1 class="svelte-m1cl2v">Contact</h1> <h2 class="svelte-m1cl2v">Hit me up!</h2> <div class="socials svelte-m1cl2v"><a class="hidden svelte-m1cl2v" href="https://github.com/Dante26us" target="_blank"><img class="card_image svelte-m1cl2v"${add_attribute("src", github, 0)} alt="github"></a> <a class="hidden svelte-m1cl2v" href="https://www.linkedin.com/in/utkarsh-shishodia-2ab7b720b/" target="_blank"><img class="card_image svelte-m1cl2v"${add_attribute("src", linkedIn, 0)} alt="linkedIn"></a> <a class="hidden svelte-m1cl2v" href="mailto:utkarshshishodiauk@gmail.com" target="_blank"><img class="card_image svelte-m1cl2v"${add_attribute("src", mail, 0)} alt="mail"></a> <a class="hidden svelte-m1cl2v" href="tel:+918700764804" target="_blank"><img class="card_image svelte-m1cl2v"${add_attribute("src", mobile, 0)} alt="mobile"></a></div> </div>`;
});
export {
  Page as P,
  linkedIn as l,
  mail as m
};
