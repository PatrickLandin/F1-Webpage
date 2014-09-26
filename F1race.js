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
        
        $(this.name).css('margin-left', this.position + "px");
        console.log(this.position);
      }
    }
	}

  var hamilton = new Driver ("#hamiltonButton", 8, 8);
  var rosberg = new Driver ("#rosbergButton", 8, 8);
  var alonso = new Driver ("#alonsoButton", 7, 8);
  var vettel = new Driver ("#vettelButton", 7, 8);
  var meters = 990;

  $("#RaceButtonText").on('click', function() {
    if (hamilton.position < meters && rosberg.position < meters && alonso.position < meters && vettel.position < meters) {
      hamilton.advance();
      rosberg.advance();
      alonso.advance();
      vettel.advance();
    }


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
 	  else if (vettel.position >= meters) {
 	  	WINNER = "Seb wins! Is it 2012 again???";
  	}  else { 
      WINNER = "None yet!";
    }
      
      $("#announcer").html("<h2>WINNER: " + WINNER + "!!</h2>");
  })
});