var hamSlam = function(piggy) {
  var vowels = ["a","o","i","e","u","y"];
  var wordString = "";
  var count = 0;
  var arraySplit = [];
  var arrayResult = [];
  arraySplit = piggy.split(" ");
  for (var n = 0; n < arraySplit.length; n++) {
    for (var i = 0; i < 6; i++) {
        if (arraySplit[n].charAt(0) === vowels[i] || arraySplit[n].charAt(0) === "y") {
          arrayResult.push(arraySplit[n] + "ay");
          i = 6;
        } else {
          for (var j = 0; j < 6; j++) {
            if (arraySplit[n].charAt(j) !== vowels[i]) {
            } else {
              var firstLetter = arraySplit[n].slice(0,j);
              var otherLetters = arraySplit[n].slice(j);
              wordString = (otherLetters + firstLetter + "ay");
              arrayResult.push(wordString);
              i = 6;
            };
        };
      };
    };
  }
  console.log(arrayResult.join(" "));
  return arrayResult.join(" ");
}

