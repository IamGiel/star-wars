

darthAttack = 0;
jediAttack = 0;
lukeAttack = 0;
villainAttack = 0;
// set variables, each character will get a life value
var char1Life = " hp: " + 200 + "<br>" + "Attack Points = " + darthAttack;
var char2Life = " hp: " + 180 + "<br>" + "Attack Points = " + jediAttack;
var char3Life = " hp: " + 150 + "<br>" + "Attack Points = " + lukeAttack;
var char4Life = " hp: " + 120 + "<br>" + "Attack Points = " + villainAttack;
//these will chose random attack level from attack arrays
var darth = '<img id="darth" class="life1" src="assets/images/darth.jpeg" />';
var jedi = '<img id="jedi" class="life2" src="assets/images/jedi.jpg" />';
var luke = '<img id="luke" class="life3" src="assets/images/luke.jpg" />';
var villain = '<img id="villain" class="life4" src="assets/images/villain.jpg" />';


//initialize characters to their respective thumb divs on row 1:

	//row1
	
	var r1col1 = $("#character1").prepend(darth);
	$(".life1").html("HP:  " + char1Life);

	var r1col2 = $("#character2").prepend(jedi);
	$(".life2").html("HP:  " + char2Life);

	var r1col3 = $("#character3").prepend(luke);
	$(".life3").html("HP:  " + char3Life);

	var r1col4 = $("#character4").prepend(villain);
	$(".life4").html("HP:  " + char4Life);

	//row2
	var r2col1 = $("#notChosen1").prepend(darth);
	$(".life1").html("HP:  " + char1Life);

	var r2col2 = $("#notChosen2").prepend(jedi);
	$(".life2").html("HP:  " + char2Life);

	var r2col3 = $("#notChosen3").prepend(luke);
	$(".life3").html("HP:  " + char3Life);

	var r2col4 = $("#notChosen4").prepend(villain);
	$(".life4").html("HP:  " + char4Life);

	$("#selectYourCharacter").text("Select Your Character");


	//row3
	var r3col1 = $("#opponentSection1").prepend(darth);
	$(".life1").html(char1Life);

	var r3col2 = $("#opponentSection2").prepend(jedi);
	$(".life2").html(char2Life);

	var r3col3 = $("#opponentSection3").prepend(luke);
	$(".life3").html(char3Life);

	var r3col4 = $("#opponentSection4").prepend(villain);
	$(".life4").html(char4Life);

	$("#selectYourCharacter").text("Select Your Character");
	
	var rowsAndCols = [r1col1, r1col2, r1col3, r1col4, r2col1, r2col2, r2col3, r2col3, r2col4, r3col1, r3col2, r3col3, r3col4];

	function onload() {
	
		
		for (var i = 0; i < rowsAndCols.length; i++) {
			test = rowsAndCols[i];
			test.hide();
		}
		 char1Life = 200;
		 char2Life = 180;
		 char3Life = 150;
		 char4Life = 120;

		$("#selectYourCharacter").hide();
		$("#selectYourCharacter").hide();
		$("#selectYourOpponent").hide();

		$("#Banner1").text("You Selected: ").hide();
		$("#Banner2").text("You Selected: ").hide();
		$("#Banner3").text("You Selected: ").hide();
		$("#Banner4").text("You Selected: ").hide();

		$("#OpBanner1").text("Click to attack").hide();
		$("#OpBanner2").text("Click to attack").hide();
		$("#OpBanner3").text("Click to attack").hide();
		$("#OpBanner4").text("Click to attack").hide();
		$(".r1").css('background', 'teal')
		$("#clicker1").hide();
		$("#clicker2").hide();
		$("#clicker3").hide();
		$("#clicker4").hide();
		$("character1").on("click");
		$("character2").on("click");
		$("character3").on("click");
		$("character4").on("click");
	}

		onload();
		

$("#reset").on("click", function(){		
	location.reload();
});

function setScores(){
		var char1Life = 200;
		var char2Life = 180;
		var char3Life = 150;
		var char4Life = 120;
}


$("#start").on("click", function(){//on start
	$(".r1").on("click");
		setScores();

	for (var i = 0; i < rowsAndCols.length; i++) {
			test = rowsAndCols[i];

			rowsAndCols[0].show();
			rowsAndCols[1].show();
			rowsAndCols[2].show();
			rowsAndCols[3].show();


			var optionDarth = false;
			var optionJedi = false;
			var optionLuke = false;
			var optionVillain = false;
			var redDarth = false;
			var redJedi = false;
			var redLuke = false;
			var redVillain = false;

		$("#selectYourCharacter").show();
		
		console.log(setScores);
	}
});

var optionDarth = false;
var optionJedi = false;
var optionLuke = false;
var optionVillain = false;

//choosing your character -------------------------------------------------------------//
$("#character1").on("click", function() { 
	$("#character1").off("click");
	r1col2.hide();
	r1col3.hide();
	r1col4.hide();
	$("#selectYourOpponent").show();
	$("#Banner1").show();
	$(this).css('background', '#3a66b2');


	r2col1.hide();
	r2col2.show();
	r2col3.show();
	r2col4.show();

	optionDarth = true;
	if (optionDarth = true){
		alert("You have chosen Darth");
	} else { alert("darth is false"); }

});

//if character 2
$("#character2").on("click", function() { 
	$("#character2").off("click");
		
	r1col1.hide();
	r1col3.hide();
	r1col4.hide();
	$("#selectYourOpponent").show();
	$("#Banner2").show();
	$(this).css('background', '#3a66b2');


	r2col1.show();
	r2col2.hide();
	r2col3.show();
	r2col4.show();
	optionJedi = true;
	if (optionJedi = true){
		alert("You have chosen Jedi");
	} else { alert("darth is false"); }

		
});

$("#character3").on("click", function() { 
	$("#character3").off("click");
	
	
	r1col1.hide();
	r1col2.hide();
	r1col4.hide();
	$("#selectYourOpponent").show();
	$("#Banner3").show();
	$(this).css('background', '#3a66b2');

	r2col1.show();
	r2col2.show();
	r2col3.hide();
	r2col4.show();
	optionLuke = true;	
	if (optionLuke = true){
		alert("You have chosen Luke");
	} else { alert("darth is false"); }


});

$("#character4").on("click", function() { 
	$("#character4").off("click");
	

	r1col1.hide();
	r1col3.hide();
	r1col2.hide();
	$("#selectYourOpponent").show();
	$("#Banner4").show();
	$(".r1").css('background', '#3a66b2');


	r2col1.show();
	r2col2.show();
	r2col3.show();
	r2col4.hide();
	optionVillain = true;
	if (optionVillain = true){
		alert("You have chosen Villain");
	} else { alert("darth is false"); }
	
});

// choosing opponent row  -------------------------------------------------------//
var redDarth = false;
var redJedi = false;
var redLuke = false;
var redVillain = false;


$(r2col1).on("click", function(e) { //darth
	e.preventDefault();
	$("#clicker1").show();
	r2col1.hide(); 
	r1col1.show(2500);//this is the opponent chosen
	$("#OpBanner1").show();
	$(r1col1).css('background', 'red');
	redDarth = true;
	if (redDarth = true){
		alert("Your up against Darth!");
	} else { alert("darth is false"); }	

});

$(r2col2).on("click", function(e) { //jedi
	e.preventDefault();
	$("#clicker2").show();
	r2col2.hide(); 
	r1col2.show(2500);//this is the opponent chosen
	$("#OpBanner2").show();
	$(r1col2).css('background', 'red');
	redJedi = true;
	if (redJedi = true){
		alert("Your up against Jedi!");
	} else { alert("darth is false"); }	
});

$(r2col3).on("click", function(e) { //luke
	e.preventDefault();
	$("#clicker3").show();
	r2col3.hide(); 
	r1col3.show(2500);//this is the opponent chosen
	$("#OpBanner3").show();
	$(r1col3).css('background', 'red')
	redLuke = true;
	if (redLuke = true){
		alert("Your up against Luke!");
	} else { alert("darth is false"); }	
});

$(r2col4).on("click", function(e) { //villain
	e.preventDefault();
	$("#clicker4").show();
	r2col4.hide(); 
	r1col4.show(2500);//this is the opponent chosen
	$("#OpBanner4").show();
	$(r1col4).css('background', 'red')
	redVillain = true;
	if (redVillain = true){
		alert("Your up against Villain!");
	} else { alert("darth is false"); }	
});

// if opponenet is selected disable chosen player
$('.r2').on("click", function(){
  $(".r1").off("click");
});

//row three preventDefault
$(r3col1).on("click", function(e) { 
	e.preventDefault();

});
$(r3col2).on("click", function(e) { 
	e.preventDefault();
});
$(r3col3).on("click", function(e) { 
	e.preventDefault();
});
$(r3col4).on("click", function(e) { 
	e.preventDefault();
});




	var darthAttack;
	var jediAttack;
	var lukeAttack;
	var villainAttack;

//attak point randomizer
function getRandomDarth() {
  var min = 17, max =50;
  darthAttack = Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomJedi() {
  var min = 15, max =50;
  jediAttack = Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomLuke() {
  var min = 20, max =45;
  lukeAttack = Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomVillain() {
  var min = 0, max =60;
  villainAttack = Math.floor(Math.random() * (max - min + 1)) + min;
}

// $(".life1").html(char1Life);
// $(".life2").html(char2Life);									
// $(".life3").html(char3Life);
// $(".life4").html(char4Life);

/////////////////////////////*********************** MARKER FOR BATTLE CODES *********************************/////////////////

$("#clicker1").on("click", function() { //defender darth ------------------------



	$(".life1").html(" hp: " + char1Life + "<br>" + "Attack Points = " + darthAttack);
	$(".life2").html(" hp: " + char2Life + "<br>" + "Attack Points = " + jediAttack);
	$(".life3").html(" hp: " + char3Life + "<br>" + "Attack Points = " + lukeAttack);
	$(".life4").html(" hp: " + char4Life + "<br>" + "Attack Points = " + villainAttack);

	$("#whosBattle").html("Battle in progress... jedi vs darth");

	getRandomDarth();
	getRandomJedi();

	if  ((redDarth == true) && (optionJedi == true)) {

		// $("#battleUpdate").html("Darth attacked with " + darthAttack + " damage points! " + "<br>" + "Jedi fought back with " + jediAttack + " damage points!");
		
		
		if (darthAttack > jediAttack) {
			char2Life -= darthAttack - jediAttack;
			console.log("jedi " + char2Life);
			console.log("darth " + char1Life);
		} else if (darthAttack < jediAttack) {
			char1Life -= jediAttack - darthAttack;
			console.log("darth " + char1Life);
			console.log("jedi " + char2Life);
		
		} 

		if (char2Life <= 0) {//jedi
			$(r1col2).hide(3000);
			$("#clicker1").off("click");
			$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
			$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
			r2col3.hide();//hide other characters
			r2col4.hide();
			optionJedi = false;
		}
		if (char1Life <= 0) {//defender with clicker
			$(r1col1).hide(3000);
			$("#clicker1").off("click");
			$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
			$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
			$("#OpBanner1").hide();
		}
	} 

});

$("#clicker1").on("click", function() { //defender darth ------------------------

	$("#whosBattle").html("Battle in progress... luke vs darth");

	if ((redDarth == true) && (optionLuke == true)) {

			getRandomDarth();
			getRandomLuke();
			console.log("darth attack: " + darthAttack);
			console.log("luke attack: " + lukeAttack);
	
		// $("#battleUpdate").html("Darth attacked with " + darthAttack + " damage points! " + "<br>" + "Luke fought back with " + lukeAttack + " damage points!");

		if (darthAttack > lukeAttack) {
			char3Life -= darthAttack - lukeAttack;
			console.log("Luke " + char3Life);
			console.log("darth " + char1Life);
		} else if (darthAttack < lukeAttack) {
			char1Life -= lukeAttack - darthAttack;
			console.log("Luke life left: " + char3Life);
			console.log("darth life left: " + char1Life);
		} 

		if (char3Life <= 0) {//luke
			$(r1col3).hide(3000);
			$("#clicker1").off("click");
			$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
			$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
			r2col2.hide();//hide other characters
			r2col4.hide();
			optionLuke = false;
		}
		if (char1Life <= 0) {//defender with clicker
			$(r1col1).hide(3000);
			$("#clicker1").off("click");
			$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
			$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
			$("#OpBanner1").hide();
		}
	}
});

$("#clicker1").on("click", function() { //defender darth ------------------------

	$("#whosBattle").html("Battle in progress... villain vs darth");

	if ((redDarth == true) && (optionVillain == true)) {

			getRandomDarth();
			getRandomVillain();
			console.log("darth attack: " + darthAttack);
			console.log("villain attack: " + villainAttack);
	
			// $("#battleUpdate").html("Darth attacked with " + darthAttack + " damage points! " + "<br>" + "Villain fought back with " + villainAttack + " damage points!");

		if (darthAttack > villainAttack) {
				char4Life -= darthAttack - villainAttack;
				console.log("villain " + char4Life);
				console.log("darth " + char1Life);
			} else if (darthAttack < villainAttack) {
				char1Life -= villainAttack - darthAttack;
				console.log("villain life left: " + char4Life);
				console.log("darth life left: " + char1Life);
			} 

		if (char4Life <= 0) {//villain
			$(r1col4).hide(3000);
			$("#clicker1").off("click");
			$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
			$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
			r2col2.hide();//hide other characters
			r2col3.hide();
			optionVillain = false;
		}
		if (char1Life <= 0) {//defender with clicker
			$(r1col1).hide(3000);
			$("#clicker1").off("click");
			$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
			$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
			$("#OpBanner1").hide();
		}
	}
});

$("#clicker2").on("click", function() { //defender jedi ------------------------

	$(".life1").html(" hp: " + char1Life + "<br>" + "Attack Points = " + darthAttack);
	$(".life2").html(" hp: " + char2Life + "<br>" + "Attack Points = " + jediAttack);
	$(".life3").html(" hp: " + char3Life + "<br>" + "Attack Points = " + lukeAttack);
	$(".life4").html(" hp: " + char4Life + "<br>" + "Attack Points = " + villainAttack);

	//chosen darth
	$("#whosBattle").html("Battle in progress... darth vs jedi");


		if ((redJedi == true) && (optionDarth == true)) {

			getRandomDarth();
			getRandomJedi();
			console.log("jedi attack: " + jediAttack);
			console.log("darth attack: " + darthAttack);
			
			// $("#battleUpdate").html("Jedi attacked with " + jediAttack + " damage points! " + "<br>" + "Jedi fought back with " + jediAttack + " damage points!");

			if (jediAttack > darthAttack) {
					char1Life -= jediAttack - darthAttack;//chosen character life
					console.log("darth " + char1Life);
					console.log("jedi " + char2Life);
				} else if (jediAttack < darthAttack) {
					char2Life -= darthAttack - jediAttack;//defender life
					console.log("darth life left: " + char1Life);
					console.log("jedi life left: " + char2Life);
				} 
			

			if (char1Life <= 0) {//darth (1)
					$(r1col1).hide(3000);
					$("#clicker2").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					r2col3.hide();//hide other characters
					r2col4.hide();
					optionDarth = false;
			}
			if (char2Life <= 0) {//defender with clicker jedi (2)
					$(r1col2).hide(3000);
					$("#clicker2").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					$("#OpBanner2").hide();
			}

		}

});

$("#clicker2").on("click", function() { //defender jedi ------------------------

	//chosen luke
	$("#whosBattle").html("Battle in progress... luke vs jedi");

	if ((redJedi == true) && (optionLuke == true)) {

		getRandomLuke();
		getRandomJedi();
		console.log("jedi attack: " + jediAttack);
		console.log("luke attack: " + lukeAttack);
		
		// $("#battleUpdate").html("Jedi attacked: with " + jediAttack + " damage points! " + "<br>" + "Luke fought back with " + lukeAttack + " damage points!");

			if (jediAttack > lukeAttack) {
					char3Life -= jediAttack - lukeAttack;//chosen character life
					console.log("luke " + char3Life);
					console.log("jedi " + char2Life);
				} else if (jediAttack < lukeAttack) {
					char2Life -= lukeAttack - jediAttack;//defender life
					console.log("luke life left: " + char3Life);
					console.log("jedi life left: " + char2Life);
				}

			if (char3Life <= 0) {//luke (3)
					$(r1col3).hide(3000);
					$("#clicker2").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					r2col1.hide();//hide other characters
					r2col4.hide();
					optionLuke = false;
			}
			if (char2Life <= 0) {//defender with clicker jedi (2)
					$(r1col2).hide(3000);
					$("#clicker2").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					$("#OpBanner2").hide();
			} 
	}
});

$("#clicker2").on("click", function() { //defender jedi ------------------------

	//chosen villain
	$("#whosBattle").html("Battle in progress... villain vs jedi");

	if ((redJedi == true) && (optionVillain == true)) {

		getRandomVillain();
		getRandomJedi();
		console.log("jedi attack: " + jediAttack);
		console.log("villain attack: " + villainAttack);
		
		// $("#battleUpdate").html("Jedi attacked with " + jediAttack + " damage points! " + "<br>" + "Villain fought back with " + villainAttack + " damage points!");

			if (jediAttack > villainAttack) {
					char4Life -= jediAttack - villainAttack;//chosen character life
					console.log("villain " + char4Life);
					console.log("jedi " + char2Life);
				} else if (jediAttack < villainAttack) {
					char2Life -= villainAttack - jediAttack;//defender life
					console.log("villain life left: " + char4Life);
					console.log("jedi life left: " + char2Life);
				} 

			if (char4Life <= 0) {//villain (4)
					$(r1col4).hide(3000);
					$("#clicker2").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					r2col1.hide();//hide other characters
					r2col3.hide();
					optionVillain = false;
			}
			if (char2Life <= 0) {//defender with clicker jedi (2)
					$(r1col2).hide(3000);
					$("#clicker2").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					$("#OpBanner2").hide();
			} 
	}
});
// darth char1Life 
// jedi char2Life
// luke char3Life
// villain char4Life

$("#clicker3").on("click", function() { //defender luke ------------------------

	$(".life1").html(" hp: " + char1Life + "<br>" + "Attack Points = " + darthAttack);
	$(".life2").html(" hp: " + char2Life + "<br>" + "Attack Points = " + jediAttack);
	$(".life3").html(" hp: " + char3Life + "<br>" + "Attack Points = " + lukeAttack);
	$(".life4").html(" hp: " + char4Life + "<br>" + "Attack Points = " + villainAttack);

	//chosen darth
	$("#whosBattle").html("Battle in progress... darth vs luke");

	if ((redLuke == true) && (optionDarth == true)) {

		getRandomDarth();
		getRandomLuke();
		console.log("luke attack: " + lukeAttack);
		console.log("darth attack: " + darthAttack);
		
		// $("#battleUpdate").html("Darth attacked with " + darthAttack + " damage points! " + "<br>" + "Luke fought back with " + lukeAttack + " damage points!");

		if (lukeAttack > darthAttack) {
				char1Life -= lukeAttack - darthAttack;//chosen character life
				console.log("darth " + char1Life);
				console.log("luke " + char3Life);
			} else if (lukeAttack < darthAttack) {
				char3Life -= darthAttack - lukeAttack;//defender life
				console.log("darth life left: " + char1Life);
				console.log("luke life left: " + char3Life);
			}

			if (char1Life <= 0) {//darth (1)
					$(r1col1).hide(3000);
					$("#clicker3").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					r2col2.hide();//hide other characters
					r2col4.hide();
					optionDarth=false;
			}
			if (char3Life <= 0) {//defender with clicker luke (3)
					$(r1col3).hide(3000);
					$("#clicker3").off("click");
					$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
					$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
					$("#OpBanner3").hide();
			} 


	}
});

$("#clicker3").on("click", function() { //defender luke ------------------------

//chosen jedi
$("#whosBattle").html("Battle in progress... jedi vs luke");

if ((redLuke == true) && (optionJedi == true)) {

	getRandomJedi();
	getRandomLuke();
	console.log("luke attack: " + lukeAttack);
	console.log("jedi attack: " + jediAttack);
	
	// $("#battleUpdate").html("Luke attacked with " + lukeAttack + " damage points! " + "<br>" + "Jedi fought back with " + jediAttack + " damage points!");

	if (lukeAttack > jediAttack) {
			char2Life -= lukeAttack - jediAttack;//chosen character life
			console.log("jedi " + char2Life);
			console.log("luke " + char3Life);
		} else if (lukeAttack < jediAttack) {
			char3Life -= jediAttack - lukeAttack;//defender life
			console.log("jedi life left: " + char2Life);
			console.log("luke life left: " + char3Life);
		} 

		if (char2Life <= 0) {//jedi (2)
				$(r1col2).hide(3000);
				$("#clicker3").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				r2col1.hide();//hide other characters
				r2col4.hide();
				optionJedi = false;
		}
		if (char3Life <= 0) {//defender with clicker luke (3)
				$(r1col3).hide(3000);
				$("#clicker3").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				$("#OpBanner3").hide();
		}
	}
});

$("#clicker3").on("click", function() { //defender luke ------------------------

//chosen villain
	$("#whosBattle").html("Battle in progress... villain vs luke");

	if ((redLuke == true) && (optionVillain == true)) {

		getRandomVillain();
		getRandomLuke();
		console.log("luke attack: " + lukeAttack);
		console.log("villain attack: " + villainAttack);
		
		// $("#battleUpdate").html("Luke attacked with " + lukeAttack + " damage points! " + "<br>" + "Villain fought back with " + villainAttack + " damage points!");

		if (lukeAttack > villainAttack) {
				char4Life -= lukeAttack - villainAttack;//chosen character life
				console.log("villain " + char4Life);
				console.log("luke " + char3Life);
			} else if (lukeAttack < villainAttack) {
				char3Life -= villainAttack - lukeAttack;//defender life
				console.log("villain life left: " + char4Life);
				console.log("luke life left: " + char3Life);
			}

		if (char4Life <= 0) {//villain (4)
				$(r1col4).hide(3000);
				$("#clicker3").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				r2col1.hide();//hide other characters
				r2col2.hide();
				optionVillain = false;
		}
		if (char3Life <= 0) {//defender with clicker luke (3)
				$(r1col3).hide(3000);
				$("#clicker3").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				$("#OpBanner3").hide();
		} 
	}
});

$("#clicker4").on("click", function() { //defender villain ------------------------

	$(".life1").html(" hp: " + char1Life + "<br>" + "Attack Points = " + darthAttack);
	$(".life2").html(" hp: " + char2Life + "<br>" + "Attack Points = " + jediAttack);
	$(".life3").html(" hp: " + char3Life + "<br>" + "Attack Points = " + lukeAttack);
	$(".life4").html(" hp: " + char4Life + "<br>" + "Attack Points = " + villainAttack);

	//chosen darth
	$("#whosBattle").html("Battle in progress... darth vs villain");

	if ((redVillain == true) && (optionDarth == true)) {

		getRandomDarth();
		getRandomVillain();
		console.log("villain attack: " + villainAttack);
		console.log("darth attack: " + darthAttack);
		
		// $("#battleUpdate").html("Darth attacked with " + darthAttack + " damage points! " + "<br>" + "Villain fought back with " + villainAttack + " damage points!");

		if (villainAttack > darthAttack) {
				char1Life -= villainAttack - darthAttack;//chosen character life
				console.log("darth " + char1Life);
				console.log("villain " + char4Life);
			} else if (villainAttack < darthAttack) {
				char4Life -= darthAttack - villainAttack;//defender life
				console.log("darth life left: " + char1Life);
				console.log("villain life left: " + char4Life);
			} 

		if (char1Life <= 0) {//darth (1)
				$(r1col1).hide(3000);
				$("#clicker4").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				r2col3.hide();//hide other characters
				r2col2.hide();
				optionDarth = false;
		}
		if (char4Life <= 0) {//defender with clicker villain (4)
				$(r1col4).hide(3000);
				$("#clicker4").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				$("#OpBanner4").hide();
		}
	}
});

$("#clicker4").on("click", function() { //defender villain ------------------------

	//chosen jedi
	$("#whosBattle").html("Battle in progress... jedi vs villain");

	if ((redVillain == true) && (optionJedi == true)) {

		getRandomJedi();
		getRandomVillain();
		console.log("villain attack: " + villainAttack);
		console.log("jedi attack: " + jediAttack);
		
		// $("#battleUpdate").html("Villain attacked with " + villainAttack + " damage points! " + "<br>" + "Jedi fought back with " + jediAttack + " damage points!");

		if (villainAttack > jediAttack) {
				char2Life -= villainAttack - jediAttack;//chosen character life
				console.log("jedi " + char2Life);
				console.log("villain " + char4Life);
			} else if (villainAttack < jediAttack) {
				char4Life -= jediAttack - villainAttack;//defender life
				console.log("jedi life left: " + char2Life);
				console.log("villain life left: " + char4Life);
			} 
		if (char2Life <= 0) {//jedi (2)
				$(r1col2).hide(3000);
				$("#clicker4").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				r2col3.hide();//hide other characters
				r2col2.hide();
				optionJedi = false;
		}
		if (char4Life <= 0) {//defender with clicker villain (4)
				$(r1col4).hide(3000);
				$("#clicker4").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				$("#OpBanner4").hide();
		}
	}
});

$("#clicker4").on("click", function() { //defender villain ------------------------

	//chosen luke
$("#whosBattle").html("Battle in progress... luke vs villain");

if ((redVillain == true) && (optionLuke == true)) {

	getRandomLuke();
	getRandomVillain();
	console.log("villain attack: " + villainAttack);
	console.log("luke attack: " + lukeAttack);
	
	// $("#battleUpdate").html("villain attacked with " + villainAttack + " damage points! " + "<br>" + "Luke fought back with " + lukeAttack + " damage points!");

	if (villainAttack > lukeAttack) {
			char3Life -= villainAttack - lukeAttack;//chosen character life
			console.log("luke " + char3Life);
			console.log("villain " + char4Life);
		} else if (villainAttack < lukeAttack) {
			char4Life -= lukeAttack - villainAttack;//defender life
			console.log("luke life left: " + char3Life);
			console.log("villain life left: " + char4Life);
		} 

		if (char3Life <= 0) {//luke (3)
				$(r1col3).hide(3000);
				$("#clicker4").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Click Reset to play again." + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				r2col1.hide();//hide other characters
				r2col2.hide();
				optionLuke = false;
		}
		if (char4Life <= 0) {//defender with clicker villain (4)
				$(r1col4).hide(3000);
				$("#clicker4").off("click");
				$("#battleUpdate").replaceWith("<h2>" + "Well Done! Whos next?" + "</h2>");
				$("#whosBattle").replaceWith("<h2>" + "Fierce Battle!" + "</h2>");
				$("#OpBanner4").hide();
		}
	}
});


	//if charlife = 0; fade out the card make it disappear
	

// darth char1Life 
// jedi char2Life
// luke char3Life
// villain char4Life


// function getRandomIntInclusive() {
//   var min = 0, max =9;
//   alert(Math.floor(Math.random() * (max - min + 1)) + min);
// }










