import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Toggle_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-gb7zgs{background:var(--bg-color);border:2px solid var(--text-color);border-radius:50%;color:var(--text-color);padding:10px 15px}button.svelte-gb7zgs:active{background:inherit}@media only screen and (max-width: 768px){button.svelte-gb7zgs{position:fixed;bottom:0;right:0}}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<button class="svelte-gb7zgs">${`<svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path xmlns="http://www.w3.org/2000/svg" d="M9.36077 3.29289C9.6659 3.59801 9.74089 4.06444 9.54678 4.44982C9.04068 5.45468 8.75521 6.59034 8.75521 7.79556C8.75521 11.9097 12.0903 15.2448 16.2044 15.2448C17.4097 15.2448 18.5453 14.9593 19.5502 14.4532C19.9356 14.2591 20.402 14.3341 20.7071 14.6392C21.0122 14.9443 21.0872 15.4108 20.8931 15.7962C19.3396 18.8806 16.1428 21 12.4492 21C7.23056 21 3 16.7694 3 11.5508C3 7.85718 5.11941 4.66038 8.20384 3.10688C8.58923 2.91278 9.05565 2.98777 9.36077 3.29289ZM6.8217 6.66959C5.68637 7.9774 5 9.6843 5 11.5508C5 15.6649 8.33513 19 12.4492 19C14.3157 19 16.0226 18.3136 17.3304 17.1783C16.9611 17.2222 16.5853 17.2448 16.2044 17.2448C10.9858 17.2448 6.75521 13.0142 6.75521 7.79556C6.75521 7.41471 6.77779 7.03895 6.8217 6.66959Z" fill="#0D0D0D"></path></svg>`} </button>`;
});
const Resume = "/_app/immutable/assets/Utkarsh_React_2.91d962af.pdf";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-x9jkh4.svelte-x9jkh4{display:flex;justify-content:space-between;background:var(--color-bg-0);font-family:var(--font-mono);font-weight:bolder;width:100%;position:fixed;z-index:2}.corner.svelte-x9jkh4.svelte-x9jkh4{width:10em;height:3em;color:black;display:flex;align-items:center;justify-content:center;color:var(--color-text);;;@media only screen and (max-width: 768px) {\n			display: none;\n		}}nav.svelte-x9jkh4.svelte-x9jkh4{display:flex;justify-content:space-between;flex-grow:1;width:100%;background:var(--color-bg-0)}ul.svelte-x9jkh4.svelte-x9jkh4{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain;background:var(--color-bg-0)}li.svelte-x9jkh4.svelte-x9jkh4{position:relative;height:100%}li[aria-current='page'].svelte-x9jkh4.svelte-x9jkh4{border-bottom:2px solid var(--color-theme-2);color:var(--color-theme-2) }nav.svelte-x9jkh4 a.svelte-x9jkh4{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear;@media only screen and (max-width: 768px) {\n			font-size: 0.7rem;\n		}}a.svelte-x9jkh4.svelte-x9jkh4:hover{color:var(--color-theme-2)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-x9jkh4"><div class="corner svelte-x9jkh4" data-svelte-h="svelte-1cl9zky">Utkarsh</div> <nav class="svelte-x9jkh4"><ul class="svelte-x9jkh4"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-x9jkh4"><a href="/" class="svelte-x9jkh4" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="svelte-x9jkh4"><a href="/about" class="svelte-x9jkh4" data-svelte-h="svelte-iphxk9">About</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/project" ? "page" : void 0, 0)} class="svelte-x9jkh4"><a href="/project" class="svelte-x9jkh4" data-svelte-h="svelte-e98pgw">Projects</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/contact" ? "page" : void 0, 0)} class="svelte-x9jkh4"><a href="/contact" class="svelte-x9jkh4" data-svelte-h="svelte-1n9jr7">Contact</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/resume" ? "page" : void 0, 0)} class="svelte-x9jkh4"><a${add_attribute("href", Resume, 0)} target="_blank" class="svelte-x9jkh4" data-svelte-h="svelte-10lgolr">Resume</a></li></ul></nav> ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})} </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-8o1gnw">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-8o1gnw">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-8o1gnw" data-svelte-h="svelte-2cd1bs"></footer> </div>`;
});
export {
  Layout as default
};
