describe('nextWeek', function() {
  it('Return a date 7 days from the given day', function(){
    nextWeek("friday").should.equal("7/18/2014")
  });
});
