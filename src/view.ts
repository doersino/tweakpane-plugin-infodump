import {ClassName, View, ViewProps} from '@tweakpane/core';

interface Config {
	lineCount: number;
	title: string;
	viewProps: ViewProps;
}

// Create a class name generator from the view name
// ClassName('tmp') will generate a CSS class name like `tp-tmpv`
const className = ClassName('indu');

export class InfodumpView implements View {
	public readonly element: HTMLElement;

	constructor(
		doc: Document,
		config: Config,
	) {
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		this.element.style.height = `calc(${config.lineCount} * var(--bld-us))`;
		config.viewProps.bindClassModifiers(this.element);

		const titleElem = doc.createElement('div');
		titleElem.classList.add(className('t'));
		titleElem.textContent = config.title;
		this.element.appendChild(titleElem);
	}
}
