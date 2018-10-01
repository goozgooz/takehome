// hardcoded rules imported in - two to chose from - higlightsRules.one or highlightsRules.two
const highlightRules = require('./data.js');

let createStyleGuide = module.exports = (highlights, str) => {
  // function is ready to accept a dynamic highlights key will defautl to a hardcoded one if one isn't given as 1st argument
  if(!highlights) {
    highlights = highlightRules.one;
  }

  let styleGuide = [];  
  
  for(let i=0; i < highlights.length; i++){
    let current = highlights[i];  
    let previous = styleGuide[styleGuide.length -1];
  
    // deals with the very first highlight rule since previous = undefined the first time 
    if(i === 0) {
      let difference = current.startOffset - 0;
      
      // difference > 0 means there are unaccounted for offsets before our first given rule
      // first .push() accounts for that - second .push() adds our first given rule
      if(difference > 0) {
        styleGuide.push({
          startOffset: 0,
          endOffset: current.startOffset,
          priority: null,
        });
        styleGuide.push(current);
      }

      if(difference === 0) {
        styleGuide.push(current);
      }
    }
  
    // deals with all other highlight rules after the first iteration
    if(i > 0) {
      let difference = current.startOffset - previous.endOffset;
      
      // handling cases where offsets overlap
      if(difference <= 0) {
        if(current.priority > previous.priority){
          current.startOffset = previous.endOffset;
          styleGuide.push(current);
        } 

        if (current.priority < previous.priority) {
          previous.endOffset = current.startOffset;
          styleGuide.push(current);
        }
      } 
      
      // difference > 0 means there's no overlaps - but there are unaccounted for offsets
      // 1st .push() is for uncovered offsets - 2nd if for our given rule
      if(difference > 0) {
        styleGuide.push({
          startOffset: previous.endOffset,
          endOffset: current.startOffset,
          priority: null,
        });
        styleGuide.push(current);
      } 
    }
    
  }
  
  // check to see if styleGuide will stop short of string's end
  // if styleGuide ends early - find the # of offsets missing and push a new rule to styleGuide
  let lastRule = styleGuide[styleGuide.length -1];
  if(lastRule.endOffset < str.length){
    let startOffset = lastRule.endOffset;
    let endOffset = str.length; 

    styleGuide.push({
      startOffset: startOffset,
      endOffset: endOffset,
      priority: null,
    });
  }
  
  return styleGuide;
};



