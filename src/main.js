import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


import App from './component/app';
import reducer from './reducer/index.js';
import reporter from './lib/redux-reporter.js';
import thunk from './lib/redux-thunk.js';

let store = createStore(reducer, applyMiddleware(thunk, reporter));


class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    );
  }

}

ReactDom.render(<Main/>, document.getElementById('root'));
