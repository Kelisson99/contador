document.getElementById("contar").addEventListener("click", function() {
	let text = document.getElementById("textC").value;
	let words = text.trim().split(/\s+/).filter(function(word){
		return word.length > 0;
	});

	document.getElementById("words").textContent = `Você digitou ${words.length} palavras`
});
