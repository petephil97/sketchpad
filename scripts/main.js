function clearPad() {
   $('.container').empty();
}

function createGrid() {
   var numberSquares = prompt('How many squares per side would you like? (max 100)');
   var squareSize = 720/numberSquares;
   while (typeof numberSquares !== 'number' || numberSquares > 100 || numberSquares < 1) {
      numberSquares = prompt('Please enter a correct value:');
      squareSize = 720/numberSquares;
   }

$(document).ready(function() {
   for (var x = 0; x < 16; x++) {
      for (var y = 0; y < 16; y++) {
         $("<div class='square'></div>").appendTo('.container');
      }
   }
   $('.square').hover(function() {
      $(this).addClass('square-hover');
   });
});
