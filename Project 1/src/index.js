import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function Greeting() {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
