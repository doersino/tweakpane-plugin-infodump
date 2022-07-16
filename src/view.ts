import {ClassName, mapRange, Value, View, ViewProps} from '@tweakpane/core';

interface Config {
	value: Value<string>;
	viewProps: ViewProps;
}

// Create a class name generator from the view name
// ClassName('tmp') will generate a CSS class name like `tp-tmpv`
const className = ClassName('info');

// Custom view class should implement `View` interface
export class PluginView implements View {
	public readonly element: HTMLElement;
	private value_: Value<string>;
	private contentElem_: HTMLElement;

	constructor(doc: Document, config: Config) {
		// Create a root element for the plugin
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		// Bind view props to the element
		config.viewProps.bindClassModifiers(this.element);

		// Receive the bound value from the controller
		this.value_ = config.value;

		// Create child elements
		this.contentElem_ = doc.createElement('div');
		this.contentElem_.classList.add(className('content'));
		this.element.appendChild(this.contentElem_);

		// Apply the initial value
		this.refresh_();

		config.viewProps.handleDispose(() => {
			// Called when the view is disposing
			console.log('TODO: dispose view');
		});
	}

	private refresh_(): void {
		const rawValue = this.value_.rawValue;

		this.contentElem_.textContent = rawValue;
	}

	private onValueChange_() {
		this.refresh_();
	}
}
