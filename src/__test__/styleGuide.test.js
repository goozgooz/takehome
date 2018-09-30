const styleGuide = require('../highlight/createStyleGuide.js');
const testHighlight = require('./lib/test-highlights.js');

const string = 'Potatoes! Boil em, mash em, stick em in a stew!';
let testGuide = styleGuide(testHighlight.one, string);
let testGuideTwo = styleGuide(testHighlight.two, string);
let testGuideNoHighlights = styleGuide(null, string);

describe('created styleGuide', () => {
  test('should use hardcoded highlights rule if one isnt given as 1st argument', () => {
    expect(testGuideNoHighlights[0].endOffset).toBe(4);
  });
  test('should start start at 0 if a rule is given to start there or not', () => {
    expect(testGuide[0].startOffset).toBe(0);
    expect(testGuideTwo[0].startOffset).toBe(0);
  });
  test('should account for offsets prior to first rule', () => {
    expect(testGuide[0].startOffset).toBe(0);
    expect(testGuide[0].endOffset).toBe(testHighlight.one[0].startOffset);
    expect(testGuide[0].priority).toBe(null);
  });
  test('should handle overlaps when current rule has less priority', () => {
    expect(testGuide[2].startOffset).toBe(testGuide[1].endOffset);
  });
  test('should handle overlaps when current rule has higher priority', () => {
    expect(testGuide[2].endOffset).toBe(testGuide[3].startOffset);
  });
  
  test('should account offsets with no highlight rules after the first rule', () => {
    expect(testGuide[4].startOffset).toBe(testGuide[3].endOffset);
    expect(testGuide[4].endOffset).toBe(testGuide[5].startOffset);
  });
  
  test('should account for string offsets past last rule give', () => {
    expect(testGuide[6].endOffset).toBe(string.length);
  });
});

