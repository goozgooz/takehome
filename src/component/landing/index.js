import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import styleGuide from '../../highlight/index.js';
console.log(styleGuide);
const string = 'You will deliver new technology with an adorable puppy. Perfect!';
console.log(string.indexOf('upp'));

class Landing extends React.Component{
  constructor(props){
    super(props);
    
    this.renderText = this.renderText.bind(this);
  }
  
  
  renderText() { 
    return Object.keys(styleGuide).map((index,i) => {
      let rule = styleGuide[index];
      let chars = rule.endOffset - rule.startOffset + 1;
      
      if(rule.priority === null) {
        return (
          <p key={i}> {string.substr(rule.startOffset, chars)} </p>);
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
        <div className='highlighted-text'>
          {this.renderText()}
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
