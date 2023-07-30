import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.d0f2197e.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/_page.7fd4d29d.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.852a935a.js","_app/immutable/chunks/globals.7f7f1b26.js"];
export const stylesheets = ["_app/immutable/assets/_page.0a8dc532.css"];
export const fonts = [];
