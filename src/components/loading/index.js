import Vue from 'vue';
import loadingComponent from './loading';

class Loading {
	constructor(params) {
		this.instance = this.getAnInstance();
	}

	getAnInstance() {
		if (this.instance) {
			return this.instance;
		}
		const loadingConstructor = Vue.extend(loadingComponent);
		const instance = new loadingConstructor({
			el: document.createElement("div")
		});
		document.body.appendChild(instance.$el);
		return instance;
	}

	show() {
		this.instance.show();
	}

	hide() {
		this.instance.hide();
	}
}
export default new Loading() ;