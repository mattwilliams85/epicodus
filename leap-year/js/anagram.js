var array1 = [];

var isAnagram = function (string, list) {
 var anagram = string.split("").sort().join("");
 list.forEach(function(sorty) {
  if (anagram === (sorty.split("").sort().join(""))) {
    array1.push(sorty);
    }
  });
  return array1;
};
