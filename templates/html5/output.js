var $lime_init = (function ($hx_exports, $global) { "use strict"; var $hx_script = (function (exports, global) { ::SOURCE_FILE::
});::if false::
/*
	Don't insert or remove any line breaks in the code above this line!

	::SOURCE_FILE:: must start on the first line.

	Breakpoints in debug builds won't work if this file's line numbers don't
	match the .js.map file's expected line numbers exactly.

	Additionally, the }); after ::SOURCE_FILE:: must appear on the next line
	to avoid it getting ignored in a // comment at the end of ::SOURCE_FILE::.
*/
::end::
	if (typeof self !== "undefined" && self.constructor.name.includes("Worker")) {
		// No need for exports in a worker context, just initialize statics.
		$hx_script({}, $global);
	} else {
		$hx_exports.lime = $hx_exports.lime || {};
		$hx_exports.lime.$scripts = $hx_exports.lime.$scripts || {};
		$hx_exports.lime.$scripts["::APP_FILE::"] = $hx_script;
		$hx_exports.lime.embed = function (projectName) {
			var exports = {};
			var script = $hx_exports.lime.$scripts[projectName];
			if (!script) throw Error("Cannot find project name \"" + projectName + "\"");
			script(exports, $global);
			for (var key in exports) $hx_exports[key] = $hx_exports[key] || exports[key];
			var lime = exports.lime || window.lime;
			if (lime && lime.embed && this !== lime.embed) lime.embed.apply(lime, arguments);
			return exports;
		};
	}

	if (typeof define === "function" && define.amd) {
		define([], function () { return $hx_exports.lime; });
		define.__amd = define.amd;
		define.amd = null;
	}
})

$lime_init(typeof exports !== "undefined" ? exports : typeof define === "function" && define.amd ? {} : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this,
typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : this);

::if embeddedLibraries::::foreach embeddedLibraries::
::__current__::::end::::end::

if (typeof define === "function" && define.__amd) {
	define.amd = define.__amd;
	delete define.__amd;
}
