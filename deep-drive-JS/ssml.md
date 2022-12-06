import React, {useState} from 'react';
import {Container, Segment} from "semantic-ui-react";
import {useSpeechSynthesis} from "react-speech-kit"
import "./App.css"

function App() {
  const [text, setText] = useState('');
  const {speak} = useSpeechSynthesis();

  const handleOnClick =() => {
    speak({text:text})
  }

  <Container>
  <Segment>
  <h1>Text to speech converter in React</h1>
  <textarea className="textAreaStyle" onChange={(e) =>{setText(e.target.value)}}></textarea>
  <button className="buttonStyle" onClick={() => {handleOnClick()}}> Listen</button>
  </Segment>
  </Container>
}

// install npm i react-speech-kit