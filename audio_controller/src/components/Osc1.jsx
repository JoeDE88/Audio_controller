export default function Osc1({changeSettings, settings}){
  return (
    <div className="control">
        <h1>Osc 1</h1>
        <div className="param">
            <h3>frequency</h3>
        <input value={settings.frequency} onChange={changeSettings} type="range" id="frequency" max='5000'/>
        </div>
        <div className="param">
            <h3>detune</h3>
        <input value={settings.detune} onChange={changeSettings} type="range" id="detune" max='100'/>
        </div>
    </div>
  )
}