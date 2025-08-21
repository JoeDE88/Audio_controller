export default function Osc1({changeFreq, freq}){
  return (
    <div>
        <input value={freq} onChange={changeFreq} type="range" id="frequency" max='5000'/>
    </div>
  )
}