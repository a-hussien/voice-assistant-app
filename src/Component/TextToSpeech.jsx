import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SpeechRecognition from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const { speak, speaking, cancel, voices } = useSpeechSynthesis();

    useEffect(() => {
        SpeechRecognition.abortListening();
    }, []);

  return (
    <div className='app'>

        <textarea 
        rows="15" 
        className='textRec'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        >

        </textarea>

        {
            !speaking ? (
              
                <button onClick={() => speak({ text: value, voice: voices[4] })}>Speak</button>
                
            )
            :
            (
                <button type="button" onClick={ cancel }> Stop </button>
            )
        }
        
        <button className="btn"
        onClick={ () => {
            navigate('/')
        }}
        > Back</button> 
    </div>

  )
}

export default TextToSpeech;