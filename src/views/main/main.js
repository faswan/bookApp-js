import { AbstractView } from '../../common/view.js';
import { Header } from '../../components/header/header.js';
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
		this.appstate = onChange(appstate, this.appStateHook.bind(this))
		this.setTitle('Поиск книг')
	}

	appStateHook(path) {
		if (path === 'favorites') {
			console.log(path)
		}
	}

	render() {
		this.app.innerHTML = ''
		this.renderHeader()
	}

	renderHeader() {
		const header = new Header(this.appstate).render()
		this.app.prepend(header)
	}
}