function trocar(imagem) {
	document.getElementById('icone').src = imagem;
}
function calculaTotal(){
	var qtd = parseInt(document.getElementById('campoQtd').value);
	total = qtd * 1500;
	document.getElementById('campoPreco').value = total;
}