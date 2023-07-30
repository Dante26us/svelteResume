import * as universal from '../entries/pages/project/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/project/+page.js";
export const imports = ["_app/immutable/nodes/5.42a93870.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/_page.3592785d.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.852a935a.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/github.2505a563.js"];
export const stylesheets = ["_app/immutable/assets/_page.5f0daea2.css"];
export const fonts = [];
