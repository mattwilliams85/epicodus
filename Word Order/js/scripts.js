var titleCase = function(str) {
  var firstChr = str.charAt(0).toUpperCase();
  var remainChr = str.substr(1).toLowerCase();
  return firstChr + remainChr;
};



var stringTitle = function(str){
  var words = str.split(" ");
  var newSentence = "";
  var smallWords = ["and","the","etc.","a","an","as","at","but","by","for","in","from","of","or","our","then","than","to","etc"];
  var foundSmallWord = false;

  for (var i = 0; i < words.length; i += 1) {

    for (var j = 0; j < smallWords.length; j += 1) {
      if (words[i].toLowerCase() === smallWords[j]) {
        newSentence += words[i].toLowerCase() + " ";
        foundSmallWord = true;
      };
    };

    if (foundSmallWord === false) {
      var firstChr = words[i].charAt(0).toUpperCase();
      var remainChr = words[i].substr(1).toLowerCase();
      newSentence += firstChr + remainChr + " ";
    };

    foundSmallWord = false;


  };
  newSentence = newSentence.trim();

  var firstLetterCap = newSentence.charAt(0).toUpperCase();
  var remainSentance = newSentence.substr(1);
  newSentence = firstLetterCap + remainSentance;
  return newSentence;
};

$(document).ready(function() {
  $("form#text-convert-form").submit(function(event) {
    var input = $("input#textFromUser").val();
    var convertedSentence = stringTitle(input);

    $(".convertedSentence").text(convertedSentence);



    $("#result").show();

    event.preventDefault();
  });
});



