var display_box = document.getElementById("display_search");

window.addEventListener("load", function () {
	display_box.setAttribute("class", "d-none");
	get_data_for_batman();
	get_data_for_lordoftherings();
	get_data_for_superman();
	get_data_for_avenger();
	for (k = 0; k <= 7; k++) {
		get_data_for_mostpopular();
	}
});

var batman = 0;
var ironman = 0;
var superman = 0;
var avenger = 0;
var a = 0;
var divs;
var flag = false;
var div_del;
var search_counter__title = 0;

//Function to load all the data from api to web page as the page loads for most popular  movies
function get_data_for_mostpopular() {
	if (k == 0) {
		key = "godfather";
	} else if (k == 1) {
		key = "pretty woman";
	} else if (k == 2) {
		key = "the devil's advocate";
	} else if (k == 3) {
		key = "jurassic park";
	} else if (k == 4) {
		key = "The Wolf of Wall Street";
	} else if (k == 5) {
		console.log("lion");
		key == "lion king";
	} else if (k == 6) {
		key == "inception";
	}
	var xhr = new XMLHttpRequest();
	var url = "http://www.omdbapi.com/?apikey=ede4d490&s=";
	xhr.open("GET", url + key);
	xhr.send();
	xhr.onload = function () {
		if (xhr.status == 200) {
			var response = JSON.parse(xhr.response).Search;
			var title = response[0].Title;
			var year = response[0].Year;
			var data = response[0].Poster;
			display_data_most_popular(data, title, year);
		} else {
			alert("Error code is" + xhr.sta);
		}
	};
}

//Function to display all the data from api to web page as the page loads for most popular movies
function display_data_most_popular(data, title, year) {
	var card = document.getElementsByClassName("most_popular")[a];
	card.setAttribute("class", "pr-3");
	console.log(a);
	var output = title + " " + "(" + year + ")";

	var image = document.createElement("img");
	image.setAttribute("src", data);
	image.setAttribute("class", "img-fluid");
	image.setAttribute("class", "float-left");
	image.setAttribute("width", "140px");

	var p = document.createElement("p");
	p.setAttribute("class", "float-right");
	p.setAttribute("class", "ml-1");
	p.textContent = output;
	p.setAttribute("class", "font-weight-bold");

	card.appendChild(p);
	card.appendChild(image);
	a++;
}

//Function to load all the data from api to web page as the page loads foor batman movies
function get_data_for_batman() {
	var xhr = new XMLHttpRequest();
	var url = "http://www.omdbapi.com/?apikey=ede4d490&s=";
	var key = "batman";
	xhr.open("GET", url + key);
	xhr.send();
	xhr.onload = function () {
		if (xhr.status == 200) {
			var response = JSON.parse(xhr.response).Search;
			for (i = 0; i < 4; i++) {
				var data = response[i].Poster;
				display_data_batman(data);
			}
		} else {
			alert("Error code is" + xhr.status);
		}
	};
}

//Function to dispaly all the data from api to web page as the page loads batman movies
function display_data_batman(data) {
	var batman_div = document.getElementById("batman_poster");
	var d = batman_div.children;
	var image = document.createElement("img");
	image.setAttribute("src", data);
	image.setAttribute("class", "img-fluid");
	d[batman].appendChild(image);
	batman++;
}

//Function to load all the data from api to web page as the page loads for lord of the rings movies
function get_data_for_lordoftherings() {
	var xhr = new XMLHttpRequest();
	var url = "http://www.omdbapi.com/?apikey=ede4d490&s=";
	var key = "lord of the rings";
	xhr.open("GET", url + key);
	xhr.send();
	xhr.onload = function () {
		if (xhr.status == 200) {
			var response = JSON.parse(xhr.response).Search;
			for (i = 0; i < 4; i++) {
				var data = response[i].Poster;
				display_data_lordoftherings(data);
			}
		} else {
			alert("Error code is" + xhr.sta);
		}
	};
}

//Function to display all the data from api to web page as the page loads for lord of the rings movies
function display_data_lordoftherings(data) {
	var batman_div = document.getElementById("ironman_poster");
	var d = batman_div.children;
	var image = document.createElement("img");
	image.setAttribute("src", data);
	image.setAttribute("class", "img-fluid");
	d[ironman].appendChild(image);
	ironman++;
}

//Function to load all the data from api to web page as the page loads for superman movies
function get_data_for_superman() {
	var xhr = new XMLHttpRequest();
	var url = "http://www.omdbapi.com/?apikey=ede4d490&s=";
	var key = "superman";
	xhr.open("GET", url + key);
	xhr.send();
	xhr.onload = function () {
		if (xhr.status == 200) {
			var response = JSON.parse(xhr.response).Search;
			for (i = 0; i < 4; i++) {
				var data = response[i].Poster;
				display_data_superman(data);
			}
		} else {
			alert("Error code is" + xhr.sta);
		}
	};
}

//Function to display all the data from api to web page as the page loads for superman movies
function display_data_superman(data) {
	var batman_div = document.getElementById("superman_poster");
	var d = batman_div.children;
	var image = document.createElement("img");
	image.setAttribute("src", data);
	image.setAttribute("class", "img-fluid");
	d[superman].appendChild(image);
	superman++;
}

//Function to load all the data from api to web page as the page loads for avengers movies
function get_data_for_avenger() {
	var xhr = new XMLHttpRequest();
	var url = "http://www.omdbapi.com/?apikey=ede4d490&s=";
	var key = "avengers";
	xhr.open("GET", url + key);
	xhr.send();
	xhr.onload = function () {
		if (xhr.status == 200) {
			var response = JSON.parse(xhr.response).Search;
			for (i = 0; i < 4; i++) {
				var data = response[i].Poster;
				display_data_avenger(data);
			}
		} else {
			alert("Error code is" + xhr.sta);
		}
	};
}

//Function to load all the data from api to web page as the page loads for avenger movies
function display_data_avenger(data) {
	var batman_div = document.getElementById("avenger_poster");
	var d = batman_div.children;
	var image = document.createElement("img");
	image.setAttribute("src", data);
	image.setAttribute("class", "img-fluid");
	d[avenger].appendChild(image);
	avenger++;
}

//Function to to search any random movies or web series
function search_movie() {
	clear_card();
	var xhr = new XMLHttpRequest();
	var url = "http://omdbapi.com/?apikey=ede4d490&s=&s=";
	var input_key = document.getElementById("key_value");
	var key = input_key.value;
	xhr.open("GET", url + key);
	xhr.send();
	input_key.value = "";

	xhr.onload = function () {
		var response = JSON.parse(xhr.response);
		if (xhr.status == 200 && response.Response == "True") {
			response = JSON.parse(xhr.response).Search;
			for (i = 0; i < response.length; i++) {
				console.log("123");

				var data = response[i].Poster;
				var title = response[i].Title;
				var year = response[i].Year;

				display_search_results(data, title, year);
			}
		} else {
			var display_box = document.getElementById("display_search");
			var display_container = document.getElementById("display_container_row");
			display_box.setAttribute("class", "d-block row mt-4");

			divs = document.createElement("div");
			display_container.appendChild(divs);
			divs.setAttribute("class", "col-12 del");

			var p = document.createElement("p");
			p.setAttribute("class", "font-weight-bold");
			p.setAttribute("class", "display-4");

			divs.appendChild(p);
			p.textContent = response.Error;
		}
	};
}
var search_movie_btn = document.getElementById("search_movie");
search_movie_btn.addEventListener("click", search_movie);

//Function to to dispaly data for  any random movies or web series
function display_search_results(data, title, year) {
	var display_box = document.getElementById("display_search");
	var display_container = document.getElementById("display_container_row");
	display_box.setAttribute("class", "d-block row mt-4");

	divs = document.createElement("div");
	display_container.appendChild(divs);

	divs.setAttribute("class", "col-3 del");

	var output = title + " " + "(" + year + ")";
	var image = document.createElement("img");
	image.setAttribute("src", data);
	image.setAttribute("class", "img-fluid");
	image.setAttribute("class", "float-left");
	image.setAttribute("width", "110px");

	var p = document.createElement("p");
	p.setAttribute("class", "float-right");
	p.setAttribute("class", "font-weight-bold");
	p.setAttribute("class", "ml-2");

	p.textContent = output;
	divs.appendChild(image);
	divs.appendChild(p);
}

//Function to clear the card results before the user goes for next search
function clear_card() {
	var col_3 = document.getElementsByClassName("col-3 del");
	var col_12 = document.getElementsByClassName("col-12 del");
	var x = col_3.length;
	var y = col_12.length;
	console.log(col_3, x);
	for (i = 0; i < x; i++) {
		col_3[0].remove();
	}
	for (j = 0; j < y; j++) {
		col_12[0].remove();
	}
}

//Function to take user to home page when he cliks home button
function homepage() {
	window.location.href =
		"file:///home/gaurav/projects/masai/sprint_2/movie.html";
}
var home_btn = document.getElementById("home");
home_btn.addEventListener("click", homepage);

//Function to search amovie by title/year/type as per the user requirement
function send_request_by_year_title() {
	clear_card();
	var xhr = new XMLHttpRequest();
	var url = "http://omdbapi.com/?apikey=ede4d490&s=&s=";
	var input_key = document.getElementById("key_value");
	var title_input = document.getElementById("title_input");
	var year_input = document.getElementById("year_input");
	var select_btn = document.querySelector("select");

	var changing_key =
		"http://www.omdbapi.com/?apikey=ede4d490&plot=short&t=" + title_input.value;

	if (
		select_btn.value == "movie" ||
		select_btn.value == "series" ||
		(select_btn.value == "episode" && year_input.value.length != 0)
	) {
		changing_key =
			"http://www.omdbapi.com/?apikey=ede4d490&plot=short&t=" +
			title_input.value +
			"&type=" +
			select_btn.value +
			"&y=" +
			year_input.value;
	} else if (select_btn.value == "empty" && year_input.value.length !== 0) {
		console.log("12");
		//console.log(select_btn.value)
		changing_key =
			"http://www.omdbapi.com/?apikey=ede4d490&plot=short&t=" +
			title_input.value +
			"&y=" +
			year_input.value;
		console.log(changing_key);
	} else if (
		select_btn.value == "movie" ||
		select_btn.value == "series" ||
		(select_btn.value == "episode" && year_input.value.length == 0)
	) {
		changing_key =
			"http://www.omdbapi.com/?apikey=ede4d490&plot=short&t=" +
			title_input.value +
			"&type=" +
			select_btn.value;
	} else {
		changing_key =
			"http://www.omdbapi.com/?apikey=ede4d490&plot=short&t=" +
			title_input.value;
	}

	var key = changing_key;
	xhr.open("GET", key);
	title_input.value = "";
	year_input.value = "";
	xhr.send();

	xhr.onload = function () {
		var response = JSON.parse(xhr.response);
		console.log(xhr.status);
		if (xhr.status == 200 && response.Response == "True") {
			var response = JSON.parse(xhr.response);
			var poster = response.Poster;
			var title = response.Title;
			var released = response.Released;
			var runtime = response.Runtime;
			var imdbrating = response.imdbRating;
			var genre = response.Genre;
			var cast = response.Actors;
			var plot = response.Plot;

			display_year_title(
				response,
				poster,
				title,
				released,
				runtime,
				genre,
				cast,
				plot
			);
		} else {
			var display_box = document.getElementById("display_search");
			var display_container = document.getElementById("display_container_row");
			display_box.setAttribute("class", "d-block row mt-4");

			divs = document.createElement("div");
			display_container.appendChild(divs);
			divs.setAttribute("class", "col-12 del");

			var p = document.createElement("p");
			p.setAttribute("class", "font-weight-bold");
			p.setAttribute("class", "display-4");

			divs.appendChild(p);
			p.textContent = response.Error;
		}
	};
}
var search_title_btn = document.getElementById("search_movie_title");
search_title_btn.addEventListener("click", send_request_by_year_title);

//Function to dispaly a movie by title/year/type as per the user requirement
function display_year_title(title) {
	var output = "";

	output =
		"Title" +
		":" +
		" " +
		title.Title +
		"\n" +
		"Release" +
		":" +
		" " +
		title.Released +
		"\n" +
		"Runtime" +
		":" +
		" " +
		title.Runtime +
		"\n" +
		"IMDB Rating:" +
		" " +
		title.imdbRating +
		"\n" +
		"Genre" +
		":" +
		" " +
		title.Genre +
		"\n" +
		"Cast:" +
		" " +
		title.Actors +
		"\n" +
		"Plot :" +
		" " +
		title.Plot;
	console.log(title.imdbRating);
	var display_box = document.getElementById("display_search");
	var display_container = document.getElementById("display_container_row");
	display_box.setAttribute("class", "d-block row mt-4");

	divs = document.createElement("div");
	display_container.appendChild(divs);
	divs.setAttribute("class", "col-12 del");

	var image = document.createElement("img");
	image.setAttribute("src", title.Poster);
	console.log(title);
	image.setAttribute("class", "img-fluid");
	image.setAttribute("class", "float-left");
	image.setAttribute("width", "230px");

	var p = document.createElement("p");
	p.setAttribute("class", "float-right");
	p.setAttribute("class", "ml-2");
	p.textContent = output;

	p.setAttribute("class", "font-weight-bold");
	divs.append(image, p);
}
