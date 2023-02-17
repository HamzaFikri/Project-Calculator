var len = 15;
var resultat = document.getElementById('resultat');
var historicContainer = document.getElementById('historicContainer');
var dispHisto = 0;

function calculer(elem){
	var op = resultat.innerHTML;
	var res = eval(op);
	// op = res;
	resultat.innerHTML = res;
	addHistoric(op, res)

}
function afficherSymbole(elem){
	resultat.innerHTML += elem.innerHTML;
	len = 15;

}
function afficherNum(elem){
	if(len>0){
		if(resultat.innerHTML == "0")
			resultat.innerHTML = "";
		resultat.innerHTML += elem.innerHTML;
		len--;
	}

}
function effacerAll(){
	resultat.innerHTML = "0";
}

function effacerLast(){
	resultat.innerHTML = resultat.innerHTML.substring(0, resultat.innerHTML.length-1);
}

function addHistoric(op, res){
	historicContainer.innerHTML += "<div class=\"histoContent\" onclick=\"histoContentGo(this)\">" + op + " = " + res + "</div>";
}

function histoContentGo(elem){
	var op = elem.innerHTML.split(" = ");
	resultat.innerHTML = op[1];
	displayHistorique();
}
function displayHistorique(){
	if(dispHisto % 2 == 0)
		historicContainer.style.display = "block";
	else
		historicContainer.style.display = "none";
	dispHisto++;
}