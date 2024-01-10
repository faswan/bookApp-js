import { DivComponent } from '../../common/div-component';
import './search.css'

export class Search extends DivComponent {
	constructor(state) {
		super()
		this.state = state
	}

	render() {
		this.el.classList.add('search-input')
		this.el.innerHTML = `
		<form class="form-search">
			<div class="wrapper-search-input">
				<img class="input-search-img" src="static/img/search-input.svg" alt="search">
				<input class="search-input-place" type="text" value="${this.state.searchQuery ?? ''}" placeholder="Найти книгу или автора">
			</div>
			<button class="btn-search"><img src="static/img/search-button.svg" alt="search"></button>
		</form>
		`
		return this.el
	}
}