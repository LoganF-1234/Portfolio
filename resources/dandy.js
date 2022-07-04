var dandy = document.getElementsByClassName('path1');

const flightPath = {
	curviness: 1.25,
	values: [
		{x: 100, y: -20}
	]
}

for(var i = 0; i <dandy.length; i++) {
	dandy[i].addEventListener('mouseover', mouseOverEffect);
}


function mouseOverEffect() {
	this.classList.add("seed-visible");
}
