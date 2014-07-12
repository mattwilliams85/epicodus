describe('hamSlam', function() {
  it('Adds "ay" to words that begin with a vowel', function() {
    hamSlam("and").should.eql("anday");
  });

  it('Adds "ay" to words that begin with a different vowel', function() {
    hamSlam("end").should.eql("enday");
  });

  it('Removes the first consonant and adds it to the end of the word with "ay"', function() {
    hamSlam("taco").should.eql("acotay");
  });

  it('Removes the first consonant and adds it to the end of the word with "ay"', function() {
    hamSlam("clock").should.eql("ockclay");
  });

  it('Adds "ay" to a word with two vowels', function() {
    hamSlam("aardvark").should.eql("aardvarkay");
  });

  it('Adds "ay" to a word that start with "y"', function() {
    hamSlam("yard").should.eql("yarday");
  });

 it('Converts words with a "y" after the first letter into pig-latin correctly', function() {
    hamSlam("crypt").should.eql("yptcray");
  });

  it('Converts all words in a sentance to pig-latin', function() {
    hamSlam("grope the angry hambeast").should.eql("opegray ethay angryay ambeasthay");
  });
});
