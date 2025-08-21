import { useState } from 'react';
import './App.scss'
import Osc1 from './components/Osc1';

// new AudioContext instance started:
let actx = new AudioContext();

// audio output defined:
let out = actx.destination;

// oscillator and gain created:
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

// oscillator connected to gain:
osc1.connect(gain1);

// gain connected to out:
gain1.connect(out)

// starting the oscillator:
// osc1.start()

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value ,
    detune: osc1.detune.value,
    type: osc1.type
  })

  function changeOsc1Settings(e){
    let {value, id} = e.target;
    setOsc1Settings({...osc1Settings, [id]: value})
    osc1[id].value = value
}

  function changeOsc1Type(e){
    let {id} = e.target;
    setOsc1Settings({...osc1Settings, type: id})
    osc1.type = id;
  }

  return (
    <>
    <h1>Sliders</h1>
    <button onClick={()=> osc1.start()}>Start</button>
    <button onClick={()=> osc1.stop()}>Stop</button>
    <Osc1 changeSettings={changeOsc1Settings} settings={osc1Settings} changeType={changeOsc1Type} />
    </>
  )
}

export default App
