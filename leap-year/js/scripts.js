var titleCase = function(string) {
  var words = string.toLowerCase().split(" ");
  var capWords = [];
  words.forEach(function(entry) {
    if (entry.match(/^(the|and|but|to|a)$/i)) {
      capWords.push(entry.charAt(0).toLowerCase() + entry.slice(1));
    } else { capWords.push(entry.charAt(0).toUpperCase() + entry.slice(1));
    }
  });
  capWords[0] = (capWords[0].charAt(0).toUpperCase() + capWords[0].slice(1));
  return capWords.join(" ");
};
