import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.2b130cb8.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/_page.b6625995.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.852a935a.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/github.2505a563.js"];
export const stylesheets = ["_app/immutable/assets/_page.43f82d3b.css"];
export const fonts = [];
