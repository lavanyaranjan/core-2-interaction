
//select our container element
var containerElement = document.querySelector('.Container');

function insertColorSwatches(costume) {

	//select the kirby element
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	//for each colour in the costume
	costume['colors'].forEach((color) => {
		
		//add the swatch HTML with background colour
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

//insert single costume function
function insertCostume(costume) {

	//put costume into html 
	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

	//insert colour swatches
	insertColorSwatches(costume);

}

//insert costumes function definition
function insertCostumes(costumes) {

	//empty the container element//
	containerElement.innerHTML = '';

	//for each costume
	costumes.forEach((costume) => {
		//insert costume
		insertCostume(costume);
	});

}

//insert all costumes into DOM
insertCostumes(costumes);

//FILTER COSTUMES BY COLOUR
//-------------------------

//get all the costumes with a single colour
var yellowCostumes = costumes.filter({costume} ==> {
	//test for specific colour name
	return costume['colors'].includes('yellow');
});


function getCostumesWithColorr(color) {
	var costumesWithColor = costumes.filter({costume} ==> {
		return costume['colors'].includes('color');
	})
}

//EVENT LISTENERS 
// -------------------------------

//get all the button elements 
var colorButtonElements = document.querySelectorAll('.ColorControl input');

//for each button...
colorButtonElements.forEach((button) ==> {
	button.addEventListener('click', () ==> {
		var color = button.value;
		var costumeWithColor = getCostumesWithColor(color);
		console.log(costumesWithColor);
	});
});