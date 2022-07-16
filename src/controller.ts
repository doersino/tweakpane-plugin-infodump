import {BladeController, createBlade, ViewProps} from '@tweakpane/core';

import {InfodumpView} from './view';

interface Config {
	lineCount: number;
	title: string;
	viewProps: ViewProps;
}

// Custom controller class should implement `Controller` interface
export class InfodumpController extends BladeController<InfodumpView> {
	constructor(doc: Document, config: Config) {
		super({
			blade: createBlade(),
			view: new InfodumpView(doc, config),
			viewProps: config.viewProps,
		});
	}
}
