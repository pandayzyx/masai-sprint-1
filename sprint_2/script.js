var riceadder = document.getElementById("addrice");
var pulseadder = document.getElementById("addpulse");
var sugaradder = document.getElementById("addsugar");

var deductrice = document.getElementById("deductrice");
var deductpulse = document.getElementById("deductpulse");
var deductsugar = document.getElementById("deductsugar");

var displayrice = document.getElementById("showremainingrice");
var displaypulse = document.getElementById("showremainingpulse");
var displaysugar = document.getElementById("showremainingsugar");

var c;
var stock = [0, 0, 0];
var bodyElem = document.querySelector("body");
var sum = 0;
var main = document.getElementById("count");

//Function for storing rice,pulse && sugar

function storerice() {
	var riceadder = document.getElementById("addrice");
	var x = document.getElementById("enterrice").value;
	stock[0] = stock[0] + Number(x);
	x.style.color = "white";
}

riceadder.addEventListener("click", storerice);

function storepulse() {
	var pulseadder = document.getElementById("addpulse");
	var y = document.getElementById("enterpulse").value;
	console.log(y);
	stock[1] = stock[1] + Number(y);
}
pulseadder.addEventListener("click", storepulse);

function storesugar() {
	var sugaradder = document.getElementById("addsugar");
	var z = document.getElementById("entersugar").value;
	stock[2] = stock[2] + Number(z);
}
sugaradder.addEventListener("click", storesugar);

//Function for deducting rice pulse && sugar aftersale

function deduct_rice() {
	var deductrice = document.getElementById("deductrice");
	var x = document.getElementById("enterrice").value;
	stock[0] = stock[0] - Number(x);
}
deductrice.addEventListener("click", deduct_rice);

function deduct_pulse() {
	var deductpulse = document.getElementById("deductpulse");
	var y = document.getElementById("enterpulse").value;
	stock[1] = stock[1] - Number(y);
}
deductpulse.addEventListener("click", deduct_pulse);

function deduct_sugar() {
	var deductsugar = document.getElementById("deductsugar");
	var z = document.getElementById("entersugar").value;
	stock[2] = stock[2] - Number(z);
}
deductsugar.addEventListener("click", deduct_sugar);

// Function for Displaying the current stock values

function display_rice() {
	var displayrice = document.getElementById("showremainingrice");

	var displaying1 = document.getElementById("displayingrice");
	var displaying2 = document.getElementById("displayingpulse");
	var displaying3 = document.getElementById("displayingsugar");
	displaying1.innerHTML = "Stock of Rice is" + " " + stock[0] + " " + "Kg";
	displaying2.textContent = "Stock of Pulse is" + " " + stock[1] + " " + "Kg";
	displaying3.textContent = "Stock of Sugar is" + " " + stock[2] + " " + "Kg";
}
displayrice.addEventListener("click", display_rice);

//Function for displaying alert if any item falls below 10

// function display_alert() {
// 	var alert = document.getElementById("alert");
// 	for (i = 0; i < stock.length; i++) {
// 		if (stock[i] < 10) {
// 			c++;
// 		}
// 	}
// 	if (c > 0) {
// 		alert.innerHTML = "You are running out of stock!!!!!";
// 		alert.style.color = "red";
// 		alert.style.fontSize = "20px";
// 	} else {
// 		alert.innerHTML = "";
// 	}
// 	c = 0;
// 	display_alert(stock);
// }
// main.addEventListener("mouseover", display_alert);
