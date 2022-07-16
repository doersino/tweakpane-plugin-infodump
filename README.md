# Tweakpane plugin template
Plugin template of an input binding for [Tweakpane][https://github.com/cocopon/tweakpane/].

TODO obrien reference https://www.youtube.com/watch?v=XU-8Mh2iHEk
TODO markdown styling not complete as my use case just involves basic text formatting - file an issue if you want more
TODO re. markdown: recommend putting multiline into backtick strings, but any code snippets need escaping
TODO heavily based on https://github.com/cocopon/tweakpane/blob/a4786be6dae7cad58dbbfe2f047ca097954c4f1f/packages/tweakpane/src/doc/ts/placeholder-plugin.ts as mentioned on https://github.com/cocopon/tweakpane/issues/397


# For plugin developers
TODO: Delete this section before publishing your plugin.


## Quick start
- Install dependencies:
  ```
  % npm install
  ```
- Build source codes and watch changes:
  ```
  % npm start
  ```
- Open `test/browser.html` to see the result.
- Cutting a release: `npm run assets`.


## File structure
```
|- src
|  |- sass ............ Plugin CSS
|  |- index.ts ........ Entrypoint
|  |- plugin.ts ....... Plugin
|  |- controller.ts ... Controller for the custom view
|  `- view.ts ......... Custom view
|- dist ............... Compiled files
`- test
   `- browser.html .... Plugin labo
```


# For plugin users


## Installation


### Browser
```html
<script src="tweakpane.min.js"></script>
<script src="tweakpane-plugin-template.min.js"></script>
<script>
  const pane = new Tweakpane.Pane();
  pane.registerPlugin(TweakpaneTemplatePlugin);
</script>
```


### Package
```js
import {Pane} from 'tweakpane';
import * as TemplatePlugin from 'tweakpane-plugin-template';

const pane = new Pane();
pane.registerPlugin(TemplatePlugin);
```


## Usage
```js
const params = {
  prop: 3,
};

// TODO: Update parameters for your plugin
pane.addInput(params, 'prop', {
  view: 'dots',
}).on('change', (ev) => {
  console.log(ev.value);
});
```

