describe ('wordOrder', function() {
  it('All unique words used appear only once and in order by number of appearance', function () {
    wordOrder("Have you noticed you can do what you not have").should.
    eql(["you","have","what","noticed","not","do","can"]);
  });
  it('Puts each unique word into array only once', function () {
    wordOrder("you you do have have have").should.eql(["have","you","do"]);
  });
});
