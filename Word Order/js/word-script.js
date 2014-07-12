var wordOrder = function(words) {
  var words = words.toLowerCase().split(" ");
  var wordCount = [];
  var uniqueWords = [];
  var combined = [];
  words.forEach(function(entry) {
   var entryIndex = uniqueWords.indexOf(entry);
   if (entryIndex === -1) {
   uniqueWords.push(entry);
   wordCount.push(1);
   }
   else {
   wordCount[entryIndex] += 1;
   };
  });
  var test = [];
 for (var i = 0; i < uniqueWords.length; i++) {
  combined[i] = wordCount[i] + uniqueWords[i]; }
  combined.sort().reverse();
  combined.forEach(function(entry) {
  test.push(entry.slice(1));
  })
  console.log(test);
  return test;
}


$(document).ready(function() {
  $("form#text-convert-form").submit(function(event) {
    var input = $("input#textFromUser").val();
    var convertedSentence = stringTitle(input);

    $(".convertedSentence").text(convertedSentence);



    $("#result").show();

    event.preventDefault();
  });
});
