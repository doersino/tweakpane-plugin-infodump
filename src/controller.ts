import {
	constrainRange,
	Controller,
	PointerHandler,
	PointerHandlerEvent,
	Value,
	ViewProps,
} from '@tweakpane/core';

import {PluginView} from './view';

interface Config {
	value: Value<string>;
	viewProps: ViewProps;
}

// Custom controller class should implement `Controller` interface
export class PluginController implements Controller<PluginView> {
	public readonly value: Value<string>;
	public readonly view: PluginView;
	public readonly viewProps: ViewProps;

	constructor(doc: Document, config: Config) {

		// Receive the bound value from the plugin
		this.value = config.value;

		// and also view props
		this.viewProps = config.viewProps;
		this.viewProps.handleDispose(() => {
			// Called when the controller is disposing
			console.log('TODO: dispose controller');
		});

		// Create a custom view
		this.view = new PluginView(doc, {
			value: this.value,
			viewProps: this.viewProps,
		});
	}
}
