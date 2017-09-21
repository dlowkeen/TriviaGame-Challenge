// Variables
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
	// {	name: "Acorn Squash",
	// 	image: "<img src='assets/images/acorn-squash.jpg'>",
	// 	answerOptions: ["5", "45", "14", "55"],
	// 	hint: "Valentine's Day",
	// 	answer: "14"
	// 	},
	// {	name: "Cantaloupe",
	// 	image: "<img src='assets/images/cantaloupe.png'>",
	// 	answerOptions: ["4", "69", "12", "36"],
	// 	hint: "Cantaloupe Sex",
	// 	answer: "69"
	// 	},
	// {	name: "Beefsteak Tomatoes",
	// 	image: "<img src='assets/images/beefsteak-tomato.jpg'>",
	// 	answerOptions: ["5", "31", "73", "77"],
	// 	hint: "'The Year Dark Side of The Moon' was released",
	// 	answer: "73"
	// 	},
	// {	name: "Strawberries",
	// 	image: "<img src='assets/images/Strawberry.jpg'>",
	// 	answerOptions: ["2", "1", "3", "4"],
	// 	hint: "How many 'e's?",
	// 	answer: "2"
	// 	},
	// {	name: "Seedless Cucumbers",
	// 	image: "<img src='assets/images/seedlesscucumber.jpg'>",
	// 	answerOptions: ["4", "87", "78", "90"],
	// 	hint: "The year Robocop was released",
	// 	answer: "87"
	// 	},
	// {	name: "Bananas",
	// 	image: "<img src='assets/images/bananas.jpg'>",
	// 	answerOptions: ["2", "4", "3", "7"],
	// 	hint: "1, 2, __",
	// 	answer: "3"
	// 	},
	// {	name: "Cucumbers",
	// 	image: "<img src='assets/images/cucumbers.jpg'>",
	// 	answerOptions: ["9", "44", "4", "7"],
	// 	hint: "Cucmbers __ everyone!",
	// 	answer: "4"
	// 	},
	// {	name: "Limes",
	// 	image: "<img src='assets/images/limes.jpg'>",
	// 	answerOptions: ["8", "49", "21", "9"],
	// 	hint: "Kobe's first jersey",
	// 	answer: "8"
	// 	},
	// {	name: "Mangoes",
	// 	image: "<img src='assets/images/mango.jpg'>",
	// 	answerOptions: ["17", "89", "9", "5"],
	// 	hint: "lower case g's look like a __",
	// 	answer: "9"
	// 	},
	// {	name: "Green Peppers",
	// 	image: "<img src='assets/images/green-pepper.jpg'>",
	// 	answerOptions: ["10", "12", "11", "51"],
	// 	hint: "How many fingers do you have?",
	// 	answer: "10"
	// 	},
	// {	name: "Iceberg Lettuce",
	// 	image: "<img src='assets/images/iceberg-lettuce.jpg'>",
	// 	answerOptions: ["12", "31", "13", "33"],
	// 	hint: "Unlucky number",
	// 	answer: "13"
	// 	},
	// {	name: "Pineapples",
	// 	image: "<img src='assets/images/pineapple.jpg'>",
	// 	answerOptions: ["18", "81", "11", "88"],
	// 	hint: "Coming of age",
	// 	answer: "18"
	// 	},
	// {	name: "Organic Bananas",
	// 	image: "<img src='assets/images/organic-bananas.jpg'>",
	// 	answerOptions: ["33", "41", "116", "22"],
	// 	hint: "Taylor Swift is feeling __",
	// 	answer: "22"
	// 	},
	// {	name: "Zucchini",
	// 	image: "<img src='assets/images/zucchini.jpg'>",
	// 	answerOptions: ["143", "101", "127", "107"],
	// 	hint: "James Franco ___ Hours",
	// 	answer: "127"
	// 	},
	// {	name: "Tomatillos",
	// 	image: "<img src='assets/images/tomatillos.jpg'>",
	// 	answerOptions: ["72", "96", "27", "22"],
	// 	hint: "Cut the T in half, count the l's",
	// 	answer: "72"
	// 	},
	// {	name: "Vine Tomatoes",
	// 	image: "<img src='assets/images/vine-tomatoes.jpg'>",
	// 	answerOptions: ["5", "6", "7", "16"],
	// 	hint: "# of letters divided by 2",
	// 	answer: "6"
	// 	},
	// {	name: "Honeydew Melons",
	// 	image: "<img src='assets/images/honeydew.jpg'>",
	// 	answerOptions: ["18", "8", "9", "88"],
	// 	hint: "o+o",
	// 	answer: "88"
	// 	},
	// {	name: "Grape Fruit",
	// 	image: "<img src='assets/images/grapefruit.jpg'>",
	// 	answerOptions: ["142", "138", "134", "101"],
	// 	hint: "Freeway to Pasadena",
	// 	answer: "134"
	// 	},
	{	name: "Yellow Squash",
		image: "<img src='assets/images/yellow-squash.jpg'>",
		answerOptions: ["131", "167", "14", "130"],
		hint: "One Flirty",
		answer: "130"
		}
];

var correct = 0;
var incorrect = 0;
var questionCounter = 0;
var clockRunning = false;
var timer = 10;
var intervalId;
var delayButtonAlert;
	

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

	function run() {
		intervalId = setInterval(decrement, 1000);
	}

	function decrement() {
		if (timer > 0) {
			timer--;
		}
		if (timer === 0) {
			timeOutLoss();
			timer = 10;
		}	
		$("#timer").html("Seconds Remaining: " + timer);
	}

	function stop() {
		clearInterval(intervalId);
	}

	function win(){
		console.log("You Win!");
		correct++;	
		wait();
			var showAnswerCorrect = $("#result").html("You choose the right answer!");
				showAnswerCorrect.show();
				delayButtonAlert = setTimeout(function() {
       		  	showAnswerCorrect.hide();
       		 }, 2000);
		$("#hint-display").hide();
	}

	function lose(){
		console.log("You Lose!");
		incorrect++;
		wait();
			var showAnswerIncorrect = $("#result").html("The correct answer was " + produce[questionCounter - 1].answer);
				showAnswerIncorrect.show();
				delayButtonAlert = setTimeout(function() {
       		   	showAnswerIncorrect.hide();
       		 }, 2000);
		$("#hint-display").hide();		
	}

	function timeOutLoss(){
		console.log("You Timed Out!");
		incorrect++;
		wait();
		var showAnswerTimeOut = $("#result").html("You didn't pick an answer!");
				showAnswerTimeOut.show();
				delayButtonAlert = setTimeout(function() {
       		   	showAnswerTimeOut.hide();
       		 }, 1000);
		$("#hint-display").hide();
	}

	function wait() {
		questionCounter++;
	if (questionCounter < produce.length) {
		// displayCorrectAnswer();
		displayHTML();
		timer = 15;
		stop();
		run();
	}
	else  
		finalPage();
	}

// At the end of the game, total up: correct, incorrect and give a grade
	function finalPage() {
		$("#main").html("Grade: " + Math.round(correct / (correct+incorrect) *100) + "%" + "<br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "<a id='finalButton' href='index.html'><button class='display' id='reset'>Play Again</button></a>");
		stop();
	}
        

// Begin game
	$("#main").hide();
	$("#hint-display").hide();

// Hide "Play" button when clicked
	$("#play").on("click", function(event){
		$(this).hide();
		$("#main").show();
		displayHTML();
		run();
	});	

// When answer is clicked, move on to next question
$(".answer").on("click", function(event){
	
	var selectedAnswer = $(this).text();

		if (selectedAnswer === produce[questionCounter].answer) {
			win();
			timer = 15;
		}

		else {
			lose();
			timer = 15;
		}

});

// Display Hint in Hint Box
	$("#hint").on("click", function(event){
		$("#hint-display").show();
	})
