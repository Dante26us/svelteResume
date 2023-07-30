export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3ba553e9.js","app":"_app/immutable/entry/app.a52cc9ba.js","imports":["_app/immutable/entry/start.3ba553e9.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/singletons.fc4f3236.js","_app/immutable/entry/app.a52cc9ba.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.852a935a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
