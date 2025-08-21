console.log("Main.js loaded")

let clicks = 0;

function add(){
	clicks++;
	document.getElementById("clickcount").innerHTML = clicks;
};