import {TweakpaneInfodumpPlugin} from './plugin';

// The identifier of the plugin bundle.
export const id = 'infodump';

// This plugin template injects a compiled CSS by @rollup/plugin-replace
// See rollup.config.js for details
export const css = '__css__';

// Export your plugin(s) as constant `plugins`
export const plugins = [TweakpaneInfodumpPlugin];
