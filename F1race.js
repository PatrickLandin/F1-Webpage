$(document).ready(function() {

  function Driver(name, speed, skill) {
    this.name = name;
    this.speed = speed;
    this.skill = skill;
    this.position = 0;
    this.isSkilled = function() {
      return Math.floor(Math.random() * 10) < this.skill;
    };
    this.advance = function() {
      if (this.isSkilled()) {
        this.position += this.speed;
        
        $(this.name).css("left", this.position);
        console.log(this.position);
      }
    };
	}

  var hamilton = new Driver ("Lewis Hamilton", 8, 8);
  var rosberg = new Driver ("Nico Rosberg", 8, 8);
  var alonso = new Driver ("Fernando Alonso", 7, 8);
  var vettel = new Driver ("Sebastian Vettel", 7, 8);
  var meters = 3050;

  $("#RaceButtonText").click(function() {
    if (hamilton.position < meters && rosberg.position < meters && alonso.position < meters && vettel.position < meters) {
      hamilton.advance();
      rosberg.advance();
      alonso.advance();
      vettel.advance();
    } else {


    var WINNER;
 	  if (hamilton.position >= meters) {
 		 WINNER = "Lewis wins!";
 	  }
 	  else if (rosberg.position >= meters) {
 		 WINNER = "Rosberg wins. Booooo.";
 	  }
 	  else if (alonso.position >= meters) {
 		 WINNER = "Alonso wins. Wow! That never happens.";
 	  }
 	  else  {
 	  	WINNER = "Seb wins! Is it 2012 again???";
  	}
      
      $("#RaceButtonText").html("<b>AND THE WINNER IS:<p>" + WINNER + "!!!</p></b>");
      $("#announcer").html("<h1>WINNER: " + WINNER + "!!</h1>");

  }
 });
});