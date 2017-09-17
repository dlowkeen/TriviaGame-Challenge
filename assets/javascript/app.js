// Array of variables
var produce = [
	{	name: "Avocados",
		image: "<img src='assets/images/avocados.jpg'>",
		answerOptions: ["<button>13</button>", "<button>2</button>", "<button>1</button>", "<button>3</button>"],
		hint: "I'm Number __!",
		answer: "1"
		}, 
	{	name: "Celery",
		image: "<img src='assets/images/Celery.jpg'>",
		answerOptions: ["19", "22", "4", "16"],
		hint: "Drive a car at this age",
		answer: "16"
		}, 
	{	name: "Roma Tomatoes",
		image: "<img src='assets/images/romas.jpg'>",
		answerOptions: ["5", "45", "54", "55"],
		hint: "Count your fingers on one hand",
		answer: "5"
		},
	{	name: "Iceberg Lettuce",
		image: "",
		answerOptions: ["5", "45", "54", "55"],
		hint: "Count your fingers on one hand",
		answer: "5"
		},
	{	name: "Russet Potatoes",
		image: "",
		answerOptions: ["5", "45", "54", "55"],
		hint: "Count your fingers on one hand",
		answer: "5"
		}

]

	



	$("#main").hide();
	$("#hint-display").hide();

// Hide "Play" button when clicked
	$("#play").on("click", function(event){
		$(this).hide();
		$("#main").show();
		});
	

// first question appears
	// Question is displayed
		// answer options displayed
	// When answer is clicked, move on to next question
	for (var i = 0; i < produce.length; i++) {
		console.log(produce[i].name);
		$("#question").html(produce[0].name);
		$("#image").html(produce[0].image);
		$("#answer").html(produce[0].answerOptions);
		$("#hint-display").html(produce[0].hint);
	}

	

// Display Hint in Hint Box
	$("#hint").on("click", function(event){
		$("#hint-display").show();
	})



// At the end of the game, total up: correct, incorrect and give a grade