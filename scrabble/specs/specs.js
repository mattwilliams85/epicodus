describe('scrabScore', function() {
  it('Gives the correct point value for a single letter', function() {
    scrabScore("BAC").should.eql(7);
    scrabScore("J").should.equal(8);
  });
  it('Gives the correct point value for sting of letters', function() {
    scrabScore("SCRABBLE").should.eql(14);
  });
   it('Gives the correct point value for other cases', function() {
    scrabScore("QuiZ").should.eql(22);
  });
});
