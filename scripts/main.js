var numberSquares = 16;
var squareSize = 45;

function randNum(n) {
	return Math.floor(Math.random() * n);
}

function randRGB() {
	return "rgb("+randNum(255)+","+randNum(255)+","+randNum(255)+")";
}

function makeGrid() {
   for (var x = 0; x < numberSquares; x++) {
      for (var y = 0; y < numberSquares; y++) {
         $("<div class='square'></div>").appendTo('.container');
      }
   }
   $('.square').css({'width': squareSize, 'height': squareSize});
}

function clearPad() {
   numberSquares = prompt('How many squares per side would you like? (max 100)');
   if (numberSquares === null) {
      return;
   }
   while (numberSquares > 100 || numberSquares < 1 || isNaN(numberSquares)) {
      numberSquares = prompt('Please enter a correct value (must be a number, max 100)');
      if (numberSquares === null) {
         return;
      }
   }
   $('.container').empty();
   squareSize = 720/numberSquares;
   makeGrid();
}

$(document).ready(function() {
   makeGrid();
   $('.clear').on('click', clearPad);
   $('.container').on('mouseenter', '.square', function() {
      $(this).addClass('square-hover');
		if ($('#pen').is(':checked')) {
			$(this).css({'background-color': 'black'});
		} else if ($('#rainbow').is(':checked')) {
				$(this).css({'background-color': randRGB()});
		}
   });
});
