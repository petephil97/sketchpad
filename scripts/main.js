$(document).ready(function() {
      $('.clear').on('click', function(){
         $('.container').empty();
         var numberSquares = prompt('How many squares per side would you like? (max 100)');
         var squareSize = 720/numberSquares;
         while (numberSquares > 100 || numberSquares < 1) {
            numberSquares = prompt('Please enter a correct value:');
            squareSize = 720/numberSquares;
         }
         for (var x = 0; x < numberSquares; x++) {
            for (var y = 0; y < numberSquares; y++) {
               $("<div class='square'></div>").appendTo('.container');
            }
         }
         $('.square').css({'width': squareSize, 'height': squareSize});
      });
   for (var x = 0; x < 16; x++) {
      for (var y = 0; y < 16; y++) {
         $("<div class='square'></div>").appendTo('.container');
      }
   }
   $('.container').on('mouseenter', '.square', function() {
      $(this).addClass('square-hover');
   });
});
