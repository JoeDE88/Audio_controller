export default function Osc1({changeFreq, freq,changeDetune, detune}){
  return (
    <div className="control">
        <h1>Osc 1</h1>
        <div className="param">
            <h3>frequency</h3>
        <input value={freq} onChange={changeFreq} type="range" id="frequency" max='5000'/>
        </div>
        <div className="param">
            <h3>detune</h3>
        <input value={detune} onChange={changeDetune} type="range" id="detune" max='100'/>
        </div>
    </div>
  )
}