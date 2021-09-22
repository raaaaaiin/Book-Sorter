var mainpage = "<div><br><br><br><br><br><br><br><br><br><br><center><hr style='width:600px'><br><span class='sub'><u>Libro Ni</u></span><br><span class='maintext'>Reynyir</span><br><span class='message'>Halikana't tuklasin ang ibat ibang pamamaraan <br> ni raineer, sa pag aayos  <br>at pag susunod sunod ng kanyang mga libro.</span><br><br><a href='#' class='rainbow-button' alt='Pindot mo ko'></a><br><hr style='width:600px'></center></div>";
var addbooks ="<div class='addbooks'><h2>Dagdag ka libro?</h2><form><input id='title' type='text' placeholder='Titulo ng libro' /><input id='author' type='text' placeholder='Ang nag sulat' /><center><a id='submitbook' href='#' class='rainbow-button' alt='Palag na yan' onClick='suicide()'></a><br><hr style='width:200px'></center></form></div>";
var showbooks ="";
var bookinfo={Title:"eh",Author:"Eh"}
var books= [['a','b']];
var dummy = [['a','b']];
var flipped = [['a','b']];
var sort = [['a','b']];
var globalcounter = 0;
var addBookIsClicked = false;
var selected='';
var previousaddbook='';
function showmain(){
	saveaddbook();
	selected='main'
	document.getElementById("interchange").innerHTML =  mainpage;
}

function builder(){

}
function addbook(){
if (globalcounter==0){
	books[0][0] = bookinfo.Title;
	books[0][1] = bookinfo.Author;
globalcounter++;
}else{
	books.push([bookinfo.Title,bookinfo.Author]);
globalcounter++;
}
document.getElementById("interchange").innerHTML +=  addbooks;
}


function suicide(){
	var bookt = document.getElementById("title").value;
	var bookauth = document.getElementById("author").value;
	bookinfo.Title=bookt;
	bookinfo.Author=bookauth;
	document.getElementById("title").disabled = true;
	document.getElementById("author").disabled = true;
	document.getElementById("title").setAttribute("placeholder", bookt);
	document.getElementById("author").setAttribute("placeholder", bookauth);
	document.getElementById("submitbook").setAttribute("alt", "na add ko na");
	document.getElementById("submitbook").setAttribute( "onClick", "javascript: sayNull();" );
	document.getElementById("submitbook").id='dispose';
	document.getElementById("title").id = 'dispose';
	document.getElementById("author").id = 'dispose';
	addbook();

}

function sayNull(){
	alert("Already pressed");
}
function addbooktab(){
	selected = 'booktab'
	if(addBookIsClicked == false){
		document.getElementById("interchange").innerHTML =  addbooks;
		addBookIsClicked = true;
	}else{
		document.getElementById("interchange").innerHTML = previousaddbook;
	}
	
}
function saveaddbook(){
	if(selected == "booktab"){
		previousaddbook = document.getElementById("interchange").innerHTML
	}
	
}

function flip(){
	dummy = books;
	flipped = dummy.reverse();
}
function sorte(){
	dummy = books;
	flipped = dummy.sort();
}
function orig(){
	dummy = books;
}
function original(){
	saveaddbook();

	selected = 'original'
	orig();
	document.getElementById("interchange").innerHTML = "";
for (i = 0; i < dummy.length; i++) {
	createbook(dummy[i][0],dummy[i][1]);
}

}
function sortshow(){
	saveaddbook();

	selected = 'sortshow'
	sorte();
	document.getElementById("interchange").innerHTML = "";
for (i = 0; i < flipped.length; i++) {
	createbook(flipped[i][0],flipped[i][1]);
}
}
function flipshow(){
	saveaddbook();

	selected = 'flipshow'
	flip();
	document.getElementById("interchange").innerHTML = "";
for (i = 0; i < flipped.length; i++) {
	createbook(flipped[i][0],flipped[i][1]);
}
}


function createbook(x,y){
	var tll = x;
	var autt = y
	var interbook ="<div class='showbooks'><center><h2 class='h2head'>"+tll+"</h2><form><div class='bookimg' style='background-image:url(images/adidadis.jpg);'></div><br><hr style='width:200px'><br><h2 class='footer'>Author:"+autt+"</h2></center></form></div>" 
	document.getElementById("interchange").innerHTML += interbook; 
}
