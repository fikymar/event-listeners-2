const button1 = document.getElementById("first");
const button2 = document.getElementById("second");
const button3 = document.getElementById("third");
const buttons = document.querySelectorAll(".colorBTN");
const inputColor = document.getElementById("colorInput");
const label = document.querySelector("label");
const container = document.querySelector(".container");
const hidden = document.querySelector(".hidden");
let inputValue;

function changeColorAsInput(element) {
	inputValue = inputColor.value;
	element.style.backgroundColor = inputValue;
	element.innerHTML = "My background was changed";

	if (element == button2) {
		document.body.style.backgroundColor = inputValue;
		button2.innerHTML = "Only me changed body background";
	}

	if (element == button3) {
		button3.innerHTML = "Only me changed my parent";
		button3.style.filter = "hue-rotate(90deg)";
		container.style.backgroundColor = inputValue;
		container.style.filter = "hue-rotate(120deg)";

		hidden.style.display = "block";
		console.log(inputValue);
	}
}

buttons.forEach((btn) => {
	btn.addEventListener("click", () => changeColorAsInput(btn));
});

inputColor.addEventListener("change", () => {
	inputValue = inputColor.value;
	document.body.style.backgroundColor = "black";
	container.style.backgroundColor = "white";
	label.style.textDecorationColor = inputValue;
	container.style.filter = "none";
	hidden.style.display = "none";
	buttons.forEach((btn) => {
		btn.innerHTML = "Click me";
		btn.style.backgroundColor = "white";
	});
});
