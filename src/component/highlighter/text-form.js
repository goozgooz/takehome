import './_highlighter.scss';
import React from 'react';

const emptyState = {
  string: '',
  highlights: [],
};

class TextForm extends React.Component {
  constructor(props){
    super(props);

    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
  };
  
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    // this.props.formSubmit(this.state);
  }

  render(){
    return (
      <form
        className='input-form'
        onSubmit={this.handleSubmit}
      >
        <input
          className='string-input'
          type='text'
          name='string'
          value={this.state.string}
          onChange={this.handleChange}
        />

        <button 
          type='submit'
          className='submit-button'
        >
          Highlight!
        </button>
      </form> 
    )
  }
};

export default TextForm;