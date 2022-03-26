const tabItems = document.querySelectorAll('.tab-item');
const tabConteudoItems = document.querySelectorAll('.tab-conteudo-item');

function selecionarItem(e) {
	removerBorder();
	removerShow();
	this.classList.add('tab-border');

	const tabConteudoItem = document.querySelector(`#${this.id}-conteudo`);
	
	tabConteudoItem.classList.add('show');
}

function removerBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	})
}
function removerShow() {
	tabConteudoItems.forEach(item => {
		item.classList.remove('show');
	})
}

tabItems.forEach(item => {
	item.addEventListener('click', selecionarItem);
});