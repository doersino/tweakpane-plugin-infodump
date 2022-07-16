import {
	BaseBladeParams,
	BaseInputParams,
	BladeApi,
	BladePlugin,
	ParamsParsers,
	parseParams,
} from '@tweakpane/core';

import {InfodumpController} from './controller';

export interface InfodumpBladeParams extends BaseBladeParams {
	border?: boolean;
	content: string;
	markdown?: boolean;
	view: 'infodump';
}

// NOTE: You can see JSDoc comments of `InputBindingPlugin` for details about each property
//
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
//
export const TweakpaneInfodumpPlugin: BladePlugin<InfodumpBladeParams> = {
	id: 'infodump',

	// type: The plugin type.
	// - 'input': Input binding
	// - 'monitor': Monitor binding
	type: 'blade',

	// This plugin template injects a compiled CSS by @rollup/plugin-replace
	// See rollup.config.js for details
	css: '__css__',

	// TODO transfer more comments from below
	accept(params) {
		// Parse parameters object
		const p = ParamsParsers;
		const r = parseParams(params, {
			border: p.optional.boolean,
			content: p.required.string,
			markdown: p.optional.boolean,
			view: p.required.constant('infodump'),
		});
		return r ? {params: r} : null;
	},

	controller(args) {
		// Create a controller for the plugin
		return new InfodumpController(args.document, {
			border: args.params.border ?? false,
			content: args.params.content,
			markdown: args.params.markdown ?? false,
			viewProps: args.viewProps,
		});
	},

	api(args) {
		if (!(args.controller instanceof InfodumpController)) {
			return null;
		}
		return new BladeApi(args.controller);
	},
};
