const styleGuide = require('../highlight/createStyleGuide.js');
const testHighlight = require('./lib/test-highlights.js');
const shortString = 'Cool beans!';
const longString = 'Potatoes! Boil em, mash em, stick em in a stew!';

let testGuideShort = styleGuide(testHighlight, shortString);
let testGuideLong = styleGuide(testHighlight, longString);


describe('created styleGuide', () => {
  test('should only account for string length', () => {
    expect(testGuideShort[testGuideShort.length-1].endOffset).toEqual(shortString.length);
  });
});

