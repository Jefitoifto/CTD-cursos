let i=0, j=0, l=0, texto, chave, cifrado="", alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','v','x','y','z'];

texto=window.prompt('Informe o texto a ser cifrado:');
chave=Number(window.prompt('Informe a chave para a cifragem:'));

for(i=0;i<texto.length;i++) {
	for(j=0;j<alfabeto.length;j++) {
		if(texto.charAt(i) == alfabeto[j]) {
			cifrado+=alfabeto[(j+chave)%26]
			l++
		}
	}
};

window.alert(cifrado);