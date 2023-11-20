const setasDisponiveis = document.querySelectorAll('.seta');
const paragrafosDisponiveis = document.querySelectorAll('.paragrafo');

const respostas = [
	'O acesso ao curso é feito através desse <a target="_blank" href="https://google.com">link</a>',
	'Não. O curso foi feito especialmente para iniciantes.',
	'De acordo com a lei do consumidor, você tem 7 dias corridos para solicitar o reembolso e receber 100% do seu dinheiro de volta.',
];

setasDisponiveis.forEach((seta, index) => {
	seta.addEventListener('click', () => {
		fecharOutrasSetas(index);
		fecharOutrosTextos(index);
		trocarConteudo(index);
		trocarCorDaSeta(seta);
	});

	function fecharOutrasSetas(index) {
		setasDisponiveis.forEach((outraSeta, outroIndex) => {
			if (outroIndex !== index) {
				outraSeta.setAttribute('src', './images/seta-fechada.png');
				outraSeta.classList.remove('clicada');
			}
		});
	}

	function fecharOutrosTextos(index) {
		paragrafosDisponiveis.forEach((outroTexto, outroIndex) => {
			if (outroIndex !== index) {
				outroTexto.innerHTML = '';
			}
		});
	}

	function trocarCorDaSeta(seta) {
		let atributoSrcAtual = seta.getAttribute('src');
		if (atributoSrcAtual.includes('seta-fechada')) {
			seta.setAttribute('src', './images/seta-aberta.png');
			seta.classList.add('clicada');
		} else {
			seta.setAttribute('src', './images/seta-fechada.png');
			seta.classList.remove('clicada');
		}
	}

	function trocarConteudo(index) {
		let conteudoParagrafo = paragrafosDisponiveis[index];
		paragrafosDisponiveis.forEach((element) => {
			if (conteudoParagrafo.innerHTML === '') {
				conteudoParagrafo.innerHTML = respostas[index];
			} else {
				conteudoParagrafo.innerHTML = '';
			}
		});
	}
});
