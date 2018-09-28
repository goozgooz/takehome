import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Highlighter from '../highlighter';

class Landing extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
    return(
      <div className='landing-container'>
        <Highlighter />
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
