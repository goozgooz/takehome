// You will deliver new technology with an adorable puppy. Perfect!

import './_highlighter.scss';
import React from 'react';
import TextForm from './text-form';  

import * as _ from '../../lib/util';  // renderIf function
import creatStyleGuide from '../../highlight/createStyleGuide.js';

const emptyState = {
  text: '',
};

class Highlighter extends React.Component {
  constructor(props){
    super(props);
    
    this.state = emptyState;
    
    this.renderText = this.renderText.bind(this);
    this.onTextFormSubmit = this.onTextFormSubmit.bind(this);
  }
  
  onTextFormSubmit(input){
    this.setState({text: input.string});
  }
  
  renderText(string) { 
    // create styleGuide that accounts for every portion of given string
    let styleGuide = creatStyleGuide(null, string);
    // console.log(styleGuide, string.length);
    return Object.keys(styleGuide).map((index,i) => {
      let rule = styleGuide[index];
      // needs chars variable to tell substr() how many chars to grab and store in stringChunk variable
      let chars = styleGuide[index].endOffset - styleGuide[index].startOffset ;
      let stringChunk = string.substr(rule.startOffset, chars);

      if((rule.startOffset + chars) > string.length) {
        chars = (string.length - rule.startOffset)
        stringChunk = string.substr(rule.startOffset, chars);
      }

      if(rule.startOffset > string.length) {
        return;
      }

      // if no highlight is needed
      if(rule.priority === null) {
        return (
          <React.Fragment key={i}> 
            {stringChunk} 
          </React.Fragment>);
      } 
      
      // if highlight is needed
      if(rule.priority !== null) {
        return(
          <React.Fragment key={i}>
            <span style={{backgroundColor: rule.color}}>
              {stringChunk}
            </span>
          </React.Fragment>
        );
      }
    });
  }
  
  render(){
    return(
      <div className='highlight-container'>

        
        {_.renderIf(this.state.text, 
          <div className='highlighted-text'>
            {this.renderText(this.state.text)}
          </div>
        )}

        <TextForm 
          onSubmit={this.onTextFormSubmit}
        />

      </div>
    );
  }
};

export default Highlighter;