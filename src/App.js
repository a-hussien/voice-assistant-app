import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='app'>
      <div className='controls'>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      </div>
      {
          listening && (
            <span className='listening'>
              Listening: {listening ? 'On' : 'Off'}
            </span>
          ) 
      }
      
      <p className='App-header'>
       {transcript}
      </p>
    </div>
  );
};

export default App;
