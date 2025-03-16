import {ClassName, View, ViewProps} from '@tweakpane/core';
import {render} from 'slimdown-js';

interface Config {
	content: string;
	markdown: boolean;
	viewProps: ViewProps;
}

// Create a class name generator from the view name
// ClassName('tmp') will generate a CSS class name like `tp-tmpv`
const className = ClassName('indu');

export class InfodumpView implements View {
	public readonly element: HTMLElement;

	constructor(doc: Document, config: Config) {
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		config.viewProps.bindClassModifiers(this.element);

		const contentElem = doc.createElement('div');
		contentElem.classList.add(className('t'));
		if (config.markdown) {
			contentElem.innerHTML = render(config.content);
		} else {
			contentElem.textContent = config.content;
		}
		this.element.appendChild(contentElem);
	}
}
