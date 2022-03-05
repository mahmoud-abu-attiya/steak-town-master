// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	Array.prototype.forEach.call(elementsToShow, function (element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});

	scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
			(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight))
	);
}

var typed = new Typed("#typed", {
	strings: ["A STEAK", "A BREAK"],
	// typing speed
	typeSpeed: 60,
	// time before typing starts
	startDelay: 500,
	// backspacing speed
	backSpeed: 60,
	// time before backspacing
	backDelay: 2000,
	// loop
	loop: true,
	// false = infinite
	loopCount: Infinity,
	// show cursor
	showCursor: false,
});

//  vegitables position  //
let fixedone = document.querySelector(".fixed1");
let fixedtwo = document.querySelector(".fixed2");
let header = document.querySelector("#carouselExampleControls");
let about = document.querySelector(".about");
let products = document.querySelector(".products");
let pepper = document.querySelector(".pepper");
let menuOD = document.querySelector(".menuoftheday");
let tomato = document.querySelector(".tomato2");
let tomatoOne = document.querySelector(".tomato");
// let fixed1 = document.querySelector(".fixed1")

const pepperPosition = () => {
	let totalHeightForPepper =
		header.offsetHeight +
		about.offsetHeight +
		products.offsetHeight +
		fixedone.offsetHeight +
		fixedtwo.offsetHeight +
		pepper.offsetHeight +
		200;
	if(window.outerWidth < 670){totalHeightForPepper = totalHeightForPepper + 100}
	pepper.style.top = `${totalHeightForPepper}px`;
};
// window.addEventListener("resize",pepperPosition)
const tomatoPosition = () => {
	let totalHeightForTomato =
		header.offsetHeight +
		about.offsetHeight +
		products.offsetHeight +
		fixedone.offsetHeight +
		fixedtwo.offsetHeight -
		tomato.offsetHeight;
	if(window.outerWidth < 670){totalHeightForTomato = totalHeightForTomato + 30}
	tomato.style.top = `${totalHeightForTomato}px`;
};
const tomatoOnePosition = () => {
	let totalHeightForTomatoOne =
		header.offsetHeight + about.offsetHeight + tomatoOne.offsetHeight;
	tomatoOne.style.top = `${totalHeightForTomatoOne}px`;
};

pepperPosition();
tomatoPosition();
tomatoOnePosition();

window.addEventListener("load", () => {
	tomatoPosition();
	tomatoOnePosition();
	pepperPosition();
});
