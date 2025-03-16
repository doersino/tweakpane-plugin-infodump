import {
	BaseBladeParams,
	BladeApi,
	BladePlugin,
	createPlugin,
	parseRecord,
} from '@tweakpane/core';

import {InfodumpController} from './controller';

export interface InfodumpBladeParams extends BaseBladeParams {
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
export const TweakpaneInfodumpPlugin: BladePlugin<InfodumpBladeParams> =
	createPlugin({
		id: 'infodump',

		// type: The plugin type.
		// - 'input': Input binding
		// - 'monitor': Monitor binding
		type: 'blade',

		accept(params: Record<string, unknown>) {
			// Parse parameters object
			const r = parseRecord(params, (p) => ({
				content: p.required.string,
				markdown: p.optional.boolean,
				view: p.required.constant('infodump'),
			}));
			return r ? {params: r} : null;
		},

		controller(args) {
			// Create a controller for the plugin
			return new InfodumpController(args.document, {
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
	});
