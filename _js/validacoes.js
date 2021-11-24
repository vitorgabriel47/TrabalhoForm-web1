/*##############
Verificação de campos de formulario
*/

function verificar() {
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;
	var cpf = document.getElementById('Cpf').value;
	var fone = document.getElementById('fone').value;

	if (!nome || !email || !cpf || !fone) {
		alert("Campos não preenchidos, favor preencê-los");
	} else {
		alert("Campos preenchidos com sucesso");
	}
}

/*##############
início: Mascara de telefone
*/

function maskFone() {
	var numeroAtual = document.getElementById('fone').value;
	const isCelular = numeroAtual.length === 11;
	const isFone = numeroAtual.length === 10;
	let numeroAjustado;
	if (isCelular) {
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,7);
		const part3 = numeroAtual.slice(7,11);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	} else if (isFone) {
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,6);
		const part3 = numeroAtual.slice(6,10);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	} else {
		numeroAtual.value = ' ';
		alert("Número informado é incorreto, favor verificar!")
	}
	fone.value = numeroAjustado;
}
