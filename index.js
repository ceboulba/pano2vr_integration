// Import stylesheets
import "./style.css";

//import other files
import "./pano2vr_player.js";
import {pano2vrSkin} from ".skin.js";
import"./webvr/three.min.js";
import "./webvr/webvr-polyfill.min.js";

const container = document.querySelector("#container");

const pano = new pano2vrPlayer("container");
const skin = new pano2vrSkin(pano);

		window.addEventListener("load", function() {
				pano.readConfigUrlAsync("./pano.xml");
			});  

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
