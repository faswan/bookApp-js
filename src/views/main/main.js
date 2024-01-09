import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

export class MainView extends AbstractView {
	state = {
		list: [],
		loading: false,
		searchQuery: undefined,
		offset: 0
	}
	
	constructor(appstate) {
		super()
		this.appstate = appstate
		this.appstate = onChange(this.appstate, this.appStateHook.bind(this))	
		this.setTitle('Поиск книг')
	}

	appStateHook(path) {
		if (path === 'favorites') {
			this.render()
		}
	}

	render() {
		const main = document.createElement('div')
		main.innerHTML = `Всего книг: ${this.appstate.favorites.length}`
		this.app.innerHTML = ''
		this.app.append(main)
	}
}