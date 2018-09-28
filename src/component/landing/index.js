import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Highlighter from '../highlighter';

import creatStyleGuide from '../../highlight/index.js';
const stringShort = 'You will deliver new technology with an adorable puppy. Perfect!';
const stringLong = 'You will deliver new technology with an adorable puppy. Perfect! You will deliver new technology with an adorable puppy. Perfect!';

class Landing extends React.Component{
  constructor(props){
    super(props);
    
    this.renderText = this.renderText.bind(this);
  }
  
  
  renderText(string) { 
    let styleGuide = creatStyleGuide(null, string);

    return Object.keys(styleGuide).map((index,i) => {
      let rule = styleGuide[index];
      let chars = rule.endOffset - rule.startOffset ;

      if(rule.priority === null) {
        return (
          <p key={i}> 
            {string.substr(rule.startOffset, chars)} 
          </p>);
      } 
      
      if(rule.priority !== null) {
        return(
          <p key={i} style={{backgroundColor: rule.color}}> 
            {string.substr(rule.startOffset, chars)}
          </p>
        );
      }
    });
  }
  
  
  render(){
    return(
      <div className='landing-wrapper'>
        <Highlighter />
        <div className='highlighted-text'>
          {this.renderText(stringLong)}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
