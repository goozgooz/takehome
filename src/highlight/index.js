const highlightRules = require('./data.js');

const string = 'You will deliver new technology with an adorable puppy. Perfect! You will deliver new technology with an adorable puppy. Perfect!';


let createStyleGuide = module.exports = (highlights, str) => {
  if(!highlights) {
    highlights = highlightRules.one;
  }
  // this will be the master style guide for every offset of the string
  let styleGuide = [];  
  
  // iterating through all the rules given in 'highlights' array
  for(let i=0; i < highlights.length; i++){
    let current = highlights[i];  
    let previous = styleGuide[styleGuide.length -1];
  
    // deals with the very first highlight rule we get since previous = undefined
    if(i === 0) {
      let difference = current.startOffset - 0;
      
      // are there non highlighted offsets before our first rule? 
      if(difference > 0) {
        let endOffset = difference - 1;
        styleGuide.push({
          startOffset: 0,
          endOffset: endOffset,
          priority: null,
        });
        styleGuide.push(current);
      }
      
      if(difference === 0) {
        styleGuide.push(current);
      }
    }
  
    // deals with all other highlight rules after the first
    if(i > 0) {
      let difference = current.startOffset - previous.endOffset;
      
      // handling offset overlaps
      if(difference <= 0) {
        if(current.priority > previous.priority){
          current.startOffset -= difference - 1;
          styleGuide.push(current);
        } 
        if (current.priority < previous.priority) {
          // could add a check for the edge case that a previous rule would be completely overlapped / replaced
          previous.endOffset += difference - 1;
          styleGuide.push(current);
        }
        
        if(current.priority === previous.priority){
          // deal with this edge case later
        }
      } 
      
      // handling no offset overlaps 
      if(difference > 0) {
        let endOffset = current.startOffset - 1;
        let startOffset = previous.endOffset + 1;
        styleGuide.push({
          startOffset: startOffset,
          endOffset: endOffset,
          priority: null,
        });
        styleGuide.push(current);
      } 
  
    }
  }
  
  //check to see if styleGuide will stop short of string's end
  let lastRule = styleGuide[styleGuide.length -1];
  if(lastRule.endOffset < str.length){
    let startOffset = lastRule.endOffset + 1;
    let endOffset = startOffset + (str.length - 1 - startOffset);
    styleGuide.push({
      startOffset: startOffset,
      endOffset: endOffset,
      priority: null,
    });
  }
  
  let result = {
    highlights : styleGuide,
    length: styleGuide[styleGuide.length-1].endOffset,
  };
  
  return result;
};

// createStyleGuide(highlightRules.one, string);
console.log(createStyleGuide(null, string));


