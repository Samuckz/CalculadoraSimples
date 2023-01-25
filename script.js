var value1 = '0'
var value2 = '0'
var resultado
var ordem = true
var operacao = ''


function digitaTexto(letra){

	if (value1 == resultado && value2 != '' && ordem == true){
		limparDisplay()
	}
	
	if(ordem == true){
		value1.trim()
		value1 = document.getElementById('display').value += letra
		
	}

	else{
		
		value2.trim()
		value2 = document.getElementById('display').value += letra
		
	}

	
			
}

function defineOperacao(sinal){

	document.getElementById('display').value = ''
	value2 = ''

	if(sinal == '+'){
		operacao = sinal
	}

	else if(sinal == '-'){
		operacao = sinal
	}

	else if(sinal == 'x'){
		operacao = sinal
	}

	else if(sinal == ':'){
		operacao = sinal
	}

	console.log('Valor 1: ' + value1)
	console.log('Operação ' + operacao)
	console.log('-----')

	ordem = false


}

function realizarOperacao(){
	if(operacao == '+'){
		resultado = (Number(value1) + Number(value2)).toFixed(5)
	}

	else if(operacao == '-'){
		resultado = (Number(value1) - Number(value2)).toFixed(5)
	}

	else if(operacao == 'x'){
		resultado = (Number(value1) * Number(value2)).toFixed(5)
	}

	else if(operacao == ':'){
		resultado = (Number(value1) / Number(value2)).toFixed(5)
	}

	console.log('Valor 1: ' + value1)
	console.log('Operação ' + operacao)
	console.log('Valor 2: ' + value2)
	console.log('Resultado: ' + resultado)
	console.log('-----')

	
	document.getElementById('display').value = resultado
	document.getElementById('display').value
	ordem = true
	value1 = resultado
	

}

function limparDisplay(){
	ordem = true
	value1 = ''
	value2 = ''
	document.getElementById('display').value = ''

}

//Sugestão, use o comando eval() para que determinada String seja lida pelo compilador JS, ao inves de ficar substituindo os valores toda hora
