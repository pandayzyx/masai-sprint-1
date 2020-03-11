alert("working");
var attach_all_div;
var divs;
var i = 1;
var grid_box = document.getElementById("grid_box");
var c = 0;
var counter = 0;
var x;
var bdy = document.querySelector("body");
var display_result1 = document.getElementById("diplay_result1");

//Function to create div for making table(boxmaking for grid)
function create_div() {
	for (i = 1; i < 10; i++) {
		var divs = document.createElement("div");
		divs.setAttribute("class", "class1");
		divs.setAttribute("id", "id" + i);
		divs.addEventListener("click", change_things);
		divs.addEventListener("click", check_winner);
		divs.addEventListener("click", check_draw);
		grid_box.appendChild(divs);
		divs.style.height = "100px";
	}
}
create_div();
//Function to take input from user(to store x and 0)
function user_input(x, y) {
	if (y % 2 != 0) {
		x.innerHTML = "X";
		x.style.color = "Black";
	} else {
		x.innerHTML = "0";
		x.style.color = "White";
	}
}

//Funtion to capture a particular box of table(div)
function change_things(event) {
	//event.currentTarget.style.backgroundColor = "blue";
	event.currentTarget.style.fontSize = "80px";
	c++;
	user_input(event.currentTarget, c);
	event.currentTarget.removeEventListener("click", change_things);
}

//Function to check winner and Looser

function check_winner() {
	var z = document.getElementsByClassName("class1");
	//console.log(z);
	var p1 = document.getElementById("player1").value;
	var p2 = document.getElementById("player2").value;
	//p1.style.color = "red";
	//p2.style.color = "red";
	//console.log(p1, p2);

	//console.log(z);
	if (
		z[0].textContent == z[1].textContent &&
		z[1].textContent == z[2].textContent &&
		z[1].textContent != ""
	) {
		if (z[0].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[0].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[3].textContent == z[4].textContent &&
		z[4].textContent == z[5].textContent &&
		z[3].textContent != ""
	) {
		if (z[3].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[3].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[6].textContent == z[7].textContent &&
		z[7].textContent == z[8].textContent &&
		z[6].textContent != ""
	) {
		if (z[6].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[6].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[0].textContent == z[3].textContent &&
		z[3].textContent == z[6].textContent &&
		z[0].textContent != ""
	) {
		if (z[0].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[0].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[1].textContent == z[4].textContent &&
		z[4].textContent == z[7].textContent &&
		z[1].textContent != ""
	) {
		if (z[1].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[1].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[2].textContent == z[5].textContent &&
		z[5].textContent == z[8].textContent &&
		z[2].textContent != ""
	) {
		if (z[2].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[2].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[2].textContent == z[4].textContent &&
		z[4].textContent == z[6].textContent &&
		z[2].textContent != ""
	) {
		if (z[2].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[2].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else if (
		z[0].textContent == z[4].textContent &&
		z[4].textContent == z[8].textContent &&
		z[0].textContent != ""
	) {
		if (z[0].textContent === "X") {
			if (p1 == "") {
				display_result1.innerHTML = "Player1" + " " + "You Won";
			} else {
				display_result1.innerHTML = p1 + " " + "You Won";
			}
		} else if (z[0].textContent === "0") {
			if (p2 == "") {
				display_result1.innerHTML = "Player2" + " " + "You Won";
			} else {
				display_result1.innerHTML = p2 + " " + "You Won";
			}
		}
	} else {
		counter++;
	}
	check_draw(counter);
}
//console.log(counter)

//Function to predict draw
function check_draw(a) {
	var b = 0;
	var w = document.getElementsByClassName("class1");
	for (i = 0; i < w.length; i++) {
		if (w[i].textContent != "") {
			b++;
		}
	}
	console.log(b, a);
	if (b == w.length && a == w.length) {
		display_result1.innerHTML = "DRAW";
	}
	b = 0;
}
