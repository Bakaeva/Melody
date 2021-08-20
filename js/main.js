$(document).ready(function () {
	var currentFloor = 2;
	var floorPath = $(".home-image path");
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");
	
	floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor");
		currentFloor = $(this).attr('data-floor');
		$(".counter").text(currentFloor);
	});
	// floorPath.on("left", function () {
  //// toDo: добавить подсветку этажа, на котором находилась мышь, когда её убрали с изображения дома (того этажа, который выведен в .counter)
	// });

	counterUp.on("click", function () {
		if (currentFloor < 18) {
			currentFloor++;
			useCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
			$(".counter").text(useCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${useCurrentFloor}]`).toggleClass("current-floor");
		}
	});

	counterDown.on("click", function () {
		if (currentFloor > 2) {
			currentFloor--;
			useCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
			$(".counter").text(useCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${useCurrentFloor}]`).toggleClass("current-floor");
		}
	});
});