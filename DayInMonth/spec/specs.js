// describe('nextWeek', function() {
//   it('Return a date 7 days from the given day', function(){
//     nextWeek("friday").should.equal("7/18/2014")
//   });
// });

describe('nextWeek', function() {
  it('Return a date 7 days from the given day', function() {
    nextWeek("friday", "january").should.eql(["1/3/2014","1/10/2014","1/17/2014","1/24/2014","1/31/2014"]);
  });
});
