angular.module('myApp')
  .filter('capitalize', function() {
    return function(input, char) {
      if (isNaN(input)) {
        // If the input data is not a number, perform the operations to capitalize the correct letter.
        var char = char - 1 || 0;
        var letter = input.charAt(char).toUpperCase();
        var out = [];

        for (var i = 0; i < input.length; i++) {
          if (i == char) {
            out.push(letter);
          } else {
            out.push(input[i]);
          }
        }
        return out.join('');
      } else {
        return input;
      }
    }
  })
