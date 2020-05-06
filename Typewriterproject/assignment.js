var sum = "";
var divs;
var delbtn = document.getElementById("del");
var shiftbtn;
var reversebtn;
var adddel;
var space;
var passwdbtn;
var topbox = document.getElementById("top_box");
var y = topbox.textContent;

var capbtn = document.getElementById("caps").children[0];
var shiftbtn = document.getElementById("caps").children[1];
var passwdbtn = document.getElementById("caps").children[2];
var cleanbtn = document.getElementById("caps").children[3];
var reversebtn = document.getElementById("caps").children[4];

var spacebtn = document.getElementById("black_box");
var numbtn = document.getElementById("number_buttons").children;

var c = 0;
var r = 0;
var p = 0;
var s = 0;
var clean = 0;

var offensivewrd = [
	"ass",
	"anal",
	"asshole",
	"anus",
	"babeland",
	"bastard",
	"bastardo",
	"blowjob",
	"fuck",
	"boob"
];
var cleanword = [
	"a*s",
	"a**l",
	"a*****e",
	"a**s",
	"b******d",
	"b*****d",
	"b******o",
	"b*****b",
	"f**k",
	"b**b"
];

//function to add all divs of character and number  to event listner
function add() {
	divs = document.querySelectorAll(".center_text");
	for (i = 0; i < divs.length; i++) {
		divs[i].addEventListener("click", displaytopbox);
	}
	for (j = 0; j < numbtn.length - 1; j++) {
		numbtn[j].removeEventListener("click", displaytopbox);
	}

	for (k = 0; k < numbtn.length - 1; k++) {
		numbtn[k].addEventListener("click", displaynumbers);
	}

	var topbox = document.getElementById("top_box");
	topbox.removeEventListener("click", displaytopbox);

	var del = document.getElementById("del");
	del.removeEventListener("click", displaytopbox);
}
add();

//function to display text in top_box for characters/alphabets
function displaytopbox() {
	if (c % 2 != 0) {
		if (event.target.textContent == "CAPS") {
			topbox.innerHTML = sum;
		} else {
			sum = sum + event.currentTarget.textContent.toUpperCase();
			topbox.innerHTML = sum;
		}
	} else {
		if (event.target.textContent == "CAPS") {
			topbox.innerHTML = sum;
		} else {
			sum = sum + event.currentTarget.textContent.toLowerCase();
			topbox.innerHTML = sum;
		}
	}
}

//Function for del btn
function adddel() {
	var y = document.getElementById("top_box");
	var z = y.textContent.split("");
	z.pop();
	sum = z.join("");
	y.innerHTML = z.join("");
}
delbtn.addEventListener("click", adddel);

shiftbtn.addEventListener("click", addshift);

//Function for passwd
function addpaswd() {
	var pswdstr = "";
	p++;
	if (p % 2 != 0) {
		passwdbtn.style.color = "green";
		for (j = 0; j < sum.length - 1; j++) {
			pswdstr = pswdstr + "*";
		}
		console.log(pswdstr);
		pswdstr = pswdstr + sum[sum.length - 1];
		if (event.target.textContent == "PASSWD") {
			topbox.innerHTML = pswdstr;
		} else {
			sum = sum + event.currentTarget.textContent;
			topbox.innerHTML = sum;
		}
	} else {
		passwdbtn.style.color = "black";
		if (event.target.textContent == "PASSWD") {
			topbox.innerHTML = sum;
		} else {
			sum = sum + event.currentTarget.textContent;
			topbox.innerHTML = sum;
		}
	}
}
passwdbtn.addEventListener("click", addpaswd);

//Function for reverse
function addreverse() {
	r++;
	var str = "";
	if (r % 2 != 0) {
		reversebtn.style.color = "green";
		for (i = sum.length - 1; i >= 0; i--) {
			str = str + sum[i];
		}

		if (event.target.textContent == "REV") {
			topbox.innerHTML = str;
		} else {
			sum = sum + event.currentTarget.textContent;
			topbox.innerHTML = str;
		}
	} else {
		reversebtn.style.color = "black";
		if (event.target.textContent == "REV") {
			topbox.innerHTML = sum;
		} else {
			sum = sum + event.currentTarget.textContent;
			topbox.innerHTML = sum;
		}
	}
}
reversebtn.addEventListener("click", addreverse);

//Function to add space
function addspace() {
	sum = sum + " ";
}
spacebtn.addEventListener("click", addspace);

//Function for capslock
function caps() {
	c++;

	if (c % 2 != 0) {
		capbtn.style.color = "green";
		displaytopbox();
	} else {
		capbtn.style.color = "black";
		displaytopbox();
	}
}
capbtn.addEventListener("click", caps);

//Function to display numbers and special characters
function displaynumbers() {
	if (s == 0) {
		sum = sum + event.currentTarget.textContent[1];
		topbox.innerHTML = sum;
	} else {
		s = 0;
		sum = sum + event.currentTarget.textContent[0];
		topbox.innerHTML = sum;
		shiftbtn.style.color = "black";
	}
}
//Function for shift
function addshift() {
	shiftbtn.style.color = "green";
	s++;
}
shiftbtn.addEventListener("click", addshift);

//Function for clean and to check all substr
function addclean() {
	var arr = [];
	var indexarri = [];
	var indexarrj = [];
	var karr = [];
	var clean_str = "";
	clean++;
	cleanbtn.style.color = "green";
	if (clean % 2 != 0) {
		for (i = 0; i <= sum.length; i++) {
			for (j = i + 1; j <= sum.length; j++) {
				substr = sum.slice(i, j);
				for (k = 0; k < offensivewrd.length; k++) {
					if (offensivewrd[k] === substr) {
						arr.push();
						indexarri.push(i);
						indexarrj.push(j);
						karr.push(k);
					}
				}
			}
		}
		console.log(karr);
		console.log(indexarri, indexarrj);
		console.log(cleanword[karr[0]]);

		for (i = 0; i < karr.length; i++) {
			if (i == 0) clean_str = sum.slice(0, indexarri[i]) + cleanword[karr[i]];
			else {
				clean_str =
					clean_str +
					sum.slice(indexarrj[i - 1], indexarri[i]) +
					cleanword[karr[i]];
			}
		}
		console.log(sum.length);

		if (sum.length != clean_str.length) {
			clean_str =
				clean_str + sum.slice(indexarrj[indexarrj.length - 1], sum.length + 1);
		}
		console.log(clean_str);
		topbox.innerHTML = clean_str;
	} else {
		topbox.innerHTML = sum;
		cleanbtn.style.color
	}
}
cleanbtn.addEventListener("click", addclean);
