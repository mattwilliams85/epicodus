describe("anagram", function() {
  it("Finds all of the words listed", function() {
    isAnagram("couch", ["ouch","nan","taco","ho", "chuco"]).should.eql(["chucho","ouch","ho"]);
  });
});
