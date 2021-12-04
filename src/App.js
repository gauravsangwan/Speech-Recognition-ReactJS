import React,{useEffect, useState} from "react"; 
import logo from './logo.svg';
import './App.css';

//>Import Dependency
import * as tf from '@tensorflow/tfjs';
import * as speech from '@tensorflow-models/speech-commands';








function App() {

  //>create model and action states
  const[model,setModel] = useState(null);
  const[action,setAction] = useState(null);
  const[labels,setLabels]= useState(null);
  //>create recognizerr

  const loadModel = async() =>{
    const recognizer = await speech.create("BROWSER_FFT");
    console.log("Model Loaded Successfully !!!")
    await recognizer.ensureModelLoaded()
    console.log(recognizer.wordLabels())
    setModel(recognizer)
    setLabels(recognizer.wordLabels);
  }

  useEffect(()=>{loadModel()},[]);


  //>listen for action

  const recognizeCommands = async ()=>{
    console.log('I am listening for commands ')
    model.listen(result=>{
      console.log(result.scores)
    },{includeSpectrogram:true,probabilityThreshold: 0.9})
  } 




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/*//>display command on screen*/}

      </header>
    </div>
  );
}

export default App;
