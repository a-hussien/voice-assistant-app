import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SpeechRecognition from 'react-speech-recognition';

const TextToSpeech = () => {

    const navigate = useNavigate();

    useEffect(() => {
        SpeechRecognition.abortListening();
    }, []);

  return (
    <div>
        This is a TextToSpeech page
        <button className="btn"
        onClick={ () => {
            navigate('/')
        }}
        > Back</button> 
    </div>

  )
}

export default TextToSpeech;