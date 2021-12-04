import React,{useEffect, useState} from "react"; 
import logo from './logo.svg';
import './App.css';

//>Import Dependency
import * as tf from '@tensorflow/tfjs';
import * as speech from '@tensorflow-models/speech-commands';








const App = () => {

  //>create model and action states
  const[model,setModel] = useState(null);
  const[action,setAction] = useState(null);
  const[labels,setLabels]= useState(null);
  //>create recognizerr
  //>listen for action
  //>display command on screen

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
