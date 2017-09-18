var produce = [
	{	name: "Avocados",
		image: "<img src='assets/images/avocados.jpg'>",
		answerOptions: ["13", "2", "1", "3"],
		hint: "I'm Number __!",
		answer: "1"
		}, 
	{	name: "Celery",
		image: "<img src='assets/images/Celery.jpg'>",
		answerOptions: ["19", "22", "4", "66"],
		hint: "Turn the 'e's upside down",
		answer: "66"
		}, 
	{	name: "Roma Tomatoes",
		image: "<img src='assets/images/romas.jpg'>",
		answerOptions: ["7", "45", "54", "55"],
		hint: "Cut the 'T' in half",
		answer: "7"
		},
	{	name: "Acorn Squash",
		image: "<img src='assets/images/acorn-squash.jpg'>",
		answerOptions: ["5", "45", "14", "55"],
		hint: "Valentine's Day",
		answer: "14"
		},
	{	name: "Cantaloupe",
		image: "<img src='assets/images/cantaloupe.png'>",
		answerOptions: ["4", "69", "12", "36"],
		hint: "hint5",
		answer: "69"
		},
	{	name: "Beefsteak Tomatoes",
		image: "<img src='assets/images/beefsteak-tomato.jpg'>",
		answerOptions: ["5", "31", "73", "77"],
		hint: "hint4",
		answer: "73"
		},
	{	name: "Strawberries",
		image: "<img src='assets/images/Strawberry.jpg'>",
		answerOptions: ["2", "1", "3", "4"],
		hint: "hint4",
		answer: "2"
		},
	{	name: "Seedless Cucumbers",
		image: "<img src='assets/images/seedlesscucumber.jpg'>",
		answerOptions: ["4", "87", "78", "90"],
		hint: "hint4",
		answer: "87"
		},
	{	name: "Bananas",
		image: "<img src='assets/images/bananas.jpg'>",
		answerOptions: ["2", "4", "3", "7"],
		hint: "hint4",
		answer: "3"
		},
	{	name: "Cucumbers",
		image: "<img src='assets/images/cucumbers.jpg'>",
		answerOptions: ["9", "44", "4", "8"],
		hint: "hint4",
		answer: "4"
		},
	{	name: "Limes",
		image: "<img src='assets/images/limes.jpg'>",
		answerOptions: ["8", "49", "21", "9"],
		hint: "hint4",
		answer: "8"
		},
	{	name: "Mangoes",
		image: "<img src='assets/images/mango.jpg'>",
		answerOptions: ["17", "89", "9", "5"],
		hint: "hint4",
		answer: "9"
		},
	{	name: "Green Peppers",
		image: "<img src='assets/images/green-pepper.jpg'>",
		answerOptions: ["10", "12", "11", "51"],
		hint: "hint4",
		answer: "10"
		},
	{	name: "Iceberg Lettuce",
		image: "<img src='assets/images/iceberg-lettuce.jpg'>",
		answerOptions: ["12", "31", "13", "33"],
		hint: "hint4",
		answer: "13"
		},
	{	name: "Pineapples",
		image: "<img src='assets/images/pineapple.jpg'>",
		answerOptions: ["18", "81", "11", "88"],
		hint: "hint4",
		answer: "18"
		},
	{	name: "Organic Bananas",
		image: "<img src='assets/images/organic-bananas.jpg'>",
		answerOptions: ["33", "41", "116", "22"],
		hint: "hint4",
		answer: "22"
		},
	{	name: "Zucchini",
		image: "<img src='assets/images/zucchini.jpg'>",
		answerOptions: ["143", "101", "127", "107"],
		hint: "hint4",
		answer: "127"
		},
	{	name: "Tomatillos",
		image: "<img src='assets/images/tomatillos.jpg'>",
		answerOptions: ["72", "96", "27", "22"],
		hint: "hint4",
		answer: "72"
		},
	{	name: "Vine Tomatoes",
		image: "<img src='assets/images/vine-tomatoes.jpg'>",
		answerOptions: ["5", "6", "7", "16"],
		hint: "hint4",
		answer: "6"
		},
	{	name: "Honeydew Melons",
		image: "<img src='assets/images/honeydew.jpg'>",
		answerOptions: ["18", "8", "9", "88"],
		hint: "hint4",
		answer: "88"
		},
	{	name: "Grape Fruit",
		image: "<img src='assets/images/grapefruit.jpg'>",
		answerOptions: ["142", "138", "134", "101"],
		hint: "hint4",
		answer: "134"
		},
	{	name: "Yellow Squash",
		image: "<img src='assets/images/yellow-squash.jpg'>",
		answerOptions: ["130", "167", "14", "130"],
		hint: "hint4",
		answer: "130"
		}
];

var correct = 0;
var incorrect = 0;
var questionCounter = 0;
	

	$("#main").hide();
	$("#hint-display").hide();

// Hide "Play" button when clicked
	$("#play").on("click", function(event){
		$(this).hide();
		$("#main").show();
		displayHTML();
	});	

// Displays questions, answers, hints in main section
	function displayHTML() {
		$("#question").html(produce[questionCounter].name);
		$("#image").html(produce[questionCounter].image);
		$("#answer1").html(produce[questionCounter].answerOptions[0]);
		$("#answer2").html(produce[questionCounter].answerOptions[1]);
		$("#answer3").html(produce[questionCounter].answerOptions[2]);
		$("#answer4").html(produce[questionCounter].answerOptions[3]);
		$("#hint-display").html(produce[questionCounter].hint);

	}

	function finalPage() {
		$("#main").html("Finished");
	}

// When answer is clicked, move on to next question
$(".answer").on("click", function(event){

	var selectedAnswer = $(this).text();

		if (selectedAnswer === produce[questionCounter].answer) {
			console.log("You Win!");
			questionCounter++;
			correct++;
			displayHTML();
			$("#hint-display").hide();
		}

		else {
			console.log("You Lose!");
			questionCounter++;
			incorrect++;
			displayHTML();
			$("#hint-display").hide();
	}
	console.log(questionCounter);

});

// Display Hint in Hint Box
	$("#hint").on("click", function(event){
		$("#hint-display").show();
	})


// At the end of the game, total up: correct, incorrect and give a grade

	if (questionCounter === produce.length) {
			console.log("Final");
	}




// function finalScreen() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
// 	$(".mainArea").html(gameHTML);
// }

















// //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

// $("body").on("click", ".start-button", function(event){
// 	event.preventDefault();  // added line to test issue on GitHub Viewer
// 	clickSound.play();
// 	generateHTML();

// 	timerWrapper();

// }); // Closes start-button click

// $("body").on("click", ".answer", function(event){
// 	//answeredQuestion = true;
// 	clickSound.play();
// 	selectedAnswer = $(this).text();
// 	if(selectedAnswer === correctAnswers[questionCounter]) {
// 		//alert("correct");

// 		clearInterval(theClock);
// 		generateWin();
// 	}
// 	else {
// 		//alert("wrong answer!");
// 		clearInterval(theClock);
// 		generateLoss();
// 	}
// }); // Close .answer click

// $("body").on("click", ".reset-button", function(event){
// 	clickSound.play();
// 	resetGame();
// }); // Closes reset-button click

// });  //  Closes jQuery wrapper

// function generateLossDueToTimeOut() {
// 	unansweredTally++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000);  //  change to 4000 or other amount
// }


// function wait() {
// 	if (questionCounter < 7) {
// 	questionCounter++;
// 	generateHTML();
// 	counter = 30;
// 	timerWrapper();
// 	}
// 	else {
// 		finalScreen();
// 	}
// }

// function timerWrapper() {
// 	theClock = setInterval(thirtySeconds, 1000);
// 	function thirtySeconds() {
// 		if (counter === 0) {
// 			clearInterval(theClock);
// 			generateLossDueToTimeOut();
// 		}
// 		if (counter > 0) {
// 			counter--;
// 		}
// 		$(".timer").html(counter);
// 	}
// }

// function finalScreen() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
// 	$(".mainArea").html(gameHTML);
// }

// function resetGame() {
// 	questionCounter = 0;
// 	correctTally = 0;
// 	incorrectTally = 0;
// 	unansweredTally = 0;
// 	counter = 30;
// 	generateHTML();
// 	timerWrapper();
// }


// var theClock;
// var unansweredTally = 0;
