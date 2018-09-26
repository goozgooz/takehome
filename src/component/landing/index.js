import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

class Landing extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h1> React App Running </h1>
      </React.Fragment>
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
