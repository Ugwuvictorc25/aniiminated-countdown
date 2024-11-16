const replayButton = document.querySelector(".finalButton");
const allSpan = document.querySelectorAll(".numbs span");
const countDown = document.querySelector(".countdown");
const final = document.querySelector(".final");

changeStyle();

function changeStyle() {
	allSpan.forEach((span, idx) => {
		span.addEventListener("animationend", (e) => {
			const spanLenght = allSpan.length - 1;
			if (e.animationName === "goIn" && idx !== spanLenght) {
				span.classList.remove("in");
				span.classList.add("out");
			} else if (e.animationName === "goOut" && span.nextElementSibling) {
				span.nextElementSibling.classList.add("in");
			} else {
				countDown.classList.add("hide");
				final.classList.add("show");
			}
		});
	});
}

function reset() {
	allSpan.forEach((span) => (span.classList.value = ""));

	if (!allSpan[0].classList.contains("in")) {
		allSpan[0].classList.add("in");
	}
}

replayButton.addEventListener("click", () => {
	countDown.classList.remove("hide");
	final.classList.remove("show");
	reset();
	changeStyle();
});
