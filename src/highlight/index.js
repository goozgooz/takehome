let string = 'You will deliver new technology with an adorable puppy. Perfect!';

const highlights = [
  {
    startOffset: 4,
    endOffset: 31,
    color: '#45b5e6', //blue
    priority: 0,
  },
  {
    startOffset: 28,
    endOffset: 49,
    color: '#fa8926',  //orange 
    priority: 1,
  },
  {
    startOffset: 58,
    endOffset: 70,
    color: '#e8e8e8',  //grey 
    priority: 2,
  },
  {
    startOffset: 65,
    endOffset: 80,
    color: '#97c728', //green
    priority: 1,
  },
];

// this will contain the master style guide for every chunk of the string
let styleGuide = [];  

//iterate through all the rules given in 'highlights'
for(let i=0; i < highlights.length; i++){
  let current = highlights[i];
  let previous = styleGuide[styleGuide.length -1];

  // deals with the very first highlight rule we get - accounts for space before
  if(i === 0) {
    let difference = current.startOffset - 0;
    if(difference > 0) {
      let offset = difference - 1;
      styleGuide.push({
        startOffset: 0,
        endOffset: offset,
        priority: null,
      });

      styleGuide.push(current);
    }
  }

  if(i > 0) {
    let difference = current.startOffset - previous.endOffset;
    if(difference < 0) {
      if(current.priority > previous.priority){
        current.startOffset -= difference - 1;
        styleGuide.push(current);
      } else if (current.priority < previous.priority) {
        previous.endOffset -= difference -1;
        styleGuide.pop();
        styleGuide.push(previous);
        styleGuide.push(current);
      } 
    } 
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

console.log(styleGuide);
