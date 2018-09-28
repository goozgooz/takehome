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
    this.clearText = this.clearText.bind(this);
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
  };
  
  clearText(){
    this.setState(emptyState);
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(emptyState);
  }

  render(){
    return (
      <form
        className='input-form'
        onSubmit={this.handleSubmit}
      >
        <input
          autoComplete='off'
          className='string-input'
          type='text'
          name='string'
          value={this.state.string}
          onChange={this.handleChange}
          placeHolder='Enter Text Here!'
        />
        
        <div className='form-buttons'>
          <button type='submit' className='submit-button'>
            Highlight
          </button>
          
          <button type='submit' className='submit-button'onClick={this.clearText}>
            Clear Text
          </button>
        </div>
      </form> 
    );
  }
};

export default TextForm;