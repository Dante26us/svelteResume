import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.9c777076.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.852a935a.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/github.2505a563.js","_app/immutable/chunks/_page.b6625995.js","_app/immutable/chunks/_page.7fd4d29d.js","_app/immutable/chunks/_page.3592785d.js"];
export const stylesheets = ["_app/immutable/assets/2.63ac9f7d.css","_app/immutable/assets/_page.43f82d3b.css","_app/immutable/assets/_page.0a8dc532.css","_app/immutable/assets/_page.5f0daea2.css"];
export const fonts = [];
