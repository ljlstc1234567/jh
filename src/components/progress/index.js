import Vue from 'vue';
import progressComponent from './progress';

class Progress {
	constructor(params) {
		this.instance = this.getAnInstance();
	}

	getAnInstance() {
		if (this.instance) {
			return this.instance;
		}
		const progressConstructor = Vue.extend(progressComponent);
		const instance = new progressConstructor({
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
export default new Progress() ;