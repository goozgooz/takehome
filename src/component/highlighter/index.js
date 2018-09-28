import './_highlighter.scss';
import React from 'react';

import TextForm from './text-form';

import creatStyleGuide from '../../highlight/index.js';
const stringShort = 'You will deliver new technology with an adorable puppy. Perfect!';
const stringLong = 'You will deliver new technology with an adorable puppy. Perfect! You will deliver new technology with an adorable puppy. Perfect!';

const emptyState = {
  text: '',
};

class Highlighter extends React.Component {
  constructor(props){
    super(props);
    
    this.state = emptyState;
    
    this.renderText = this.renderText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(input){
    this.setState({text: input.string});
  }
  
  renderText(string) { 
    let styleGuide = creatStyleGuide(null, string);

    return Object.keys(styleGuide).map((index,i) => {
      let rule = styleGuide[index];
      let chars = styleGuide[index].endOffset - styleGuide[index].startOffset ;
      let stringChunk = string.substr(rule.startOffset, chars);

      if(rule.priority === null) {
        return (
          <React.Fragment key={i}> 
            {stringChunk} 
          </React.Fragment>);
      } 
      
      if(rule.priority !== null) {
        return(
          <React.Fragment key={i}>
            <em style={{backgroundColor: rule.color}}>
              {stringChunk}
            </em>
          </React.Fragment>
        );
      }
    });
  }
  
  render(){
    return(
      <div className='highlight-wrapper'>
        <TextForm 
          onSubmit={this.onSubmit}
        />
        
        <p className='highlighted-text'>
          {this.renderText(this.state.text)}
        </p>
      </div>
    );
  }
};

export default Highlighter;