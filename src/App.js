import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

const App = () => {

  const [lang, setLang] = useState('en-US')

  useEffect(() => {
    SpeechRecognition.startListening({continuous: true, language: lang});
  }, [lang]);

  const commands = [
    {
      command: ['clear', 'امسح'],
      callback: ({resetTranscript}) => resetTranscript(),
    },
    {
      command: 'open *',
      callback: (site) => {
        window.open(`https://${site}.com`)
      }
    },
    {
      command: 'search *',
      callback: (search) => {
        window.open(`https://www.google.com/search?q=${search}`)
      }
    },
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const changeLang = () => {
    lang === 'en-US' ? setLang('ar-EG') : setLang('en-US')
    resetTranscript()
  }

  return (
    <div className='app'>
      <button onClick={ () => changeLang() }>{lang === 'en-US' ? 'AR':'EN'}</button>
      <span className='listening'>
        Listening: {listening ? 'on' : 'off'}
      </span>
      
      <p className='App-header'>
       {transcript}
      </p>

    </div>
  );
};

export default App;
