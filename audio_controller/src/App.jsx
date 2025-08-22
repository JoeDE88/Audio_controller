import { useState } from 'react';
import './App.scss'
import Osc1 from './components/Osc1';
import Filter from './components/Filter';

// new AudioContext instance started:
let actx = new AudioContext();

// audio output defined:
let out = actx.destination;

// oscillator and gain created:
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

// creating filter
let filter = actx.createBiquadFilter()

// oscillator connected to gain:
osc1.connect(gain1);

// once filter is created, gain1 connects to filter and filter connects to out:
gain1.connect(filter)
filter.connect(out)

// starting the oscillator:
// osc1.start()

function App() {

  // declaring oscillator settings state with freq, detune and type values
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type
  })

  // declaring filter settings state with freq, detune, type, Q and gain values
  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    type: filter.type,
    Q: filter.Q.value,
    gain: filter.gain.value
  })

  // function to change oscillator freq or detune value settings depending on Osc1 id
  function changeOsc1Settings(e) {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  }

  // function to change oscillator wave type depending on Osc1 id
  function changeOsc1Type(e) {
    let { id } = e.target;
    setOsc1Settings({ ...osc1Settings, type: id });
    // type requires a string, not a value:
    osc1.type = id;
  }

  // function to change Filter freq, detune, Q or gain depending on Osc1 
  function changeFilter(e) {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  }

  function changeFilterType(e) {
    let { id } = e.target;
    setFilterSettings({ ...filterSettings, type: id });
    // type requires a string, not a value:
    filter.type = id;
  }

  return (
    <>
      <h1 className='center'>Sliders</h1>
      <div className="center">
        <button onClick={() => osc1.start()}>Start</button>
        <button onClick={() => osc1.stop()}>Stop</button>
      </div>
      <Osc1 changeSettings={changeOsc1Settings} settings={osc1Settings} changeType={changeOsc1Type} />
      <Filter change={changeFilter} changeType={changeFilterType} settings={filterSettings} />
    </>
  )
}

export default App
