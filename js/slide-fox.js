/**
 * Represents an element that slides into view when it's scrolled into viewport.
 *
 * @module SlideFox
 * @version v2.1.0
 *
 * @author Andy Gutsche
 * @refactoring Sebastian Fitzner
 */

import App from 'app';
import AppModule from 'app-module';

const $ = App.$;
const Helpers = App.Helpers;

class SlideFox extends AppModule {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			visibleClass: 'is-visible'
		};

		super(obj, options);
		App.registerModule && App.registerModule(SlideFox.info, this.el);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			name: 'SlideFox',
			version: '2.1.0',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	bindEvents() {
		let fnRender = this.render.bind(this);

		App.Vent.on(App.EVENTS.scroll, fnRender);
	}

	showSlideFox() {
		this.$el.addClass(this.options.visibleClass);
	}

	hideSlideFox() {
		this.$el.removeClass(this.options.visibleClass);
	}

	render() {
		Helpers.isInViewport(this.el) ? this.showSlideFox() : this.hideSlideFox();
	}
}

// Returns the constructor
export default SlideFox;