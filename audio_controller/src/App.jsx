import './App.scss'

// se ejecuta una nueva de instancia de AudioContext solo una vez:
let actx = new AudioContext();

// declaro la salida (audio) del audio:
let out = actx.destination;

// se crea un oscillator (frecuencia de onda) y un gain:
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

// se conecta el oscillator con el gain:
osc1.connect(gain1);

// se conecta el gain con la salida:
gain1.connect(out)

// finalmente se inicializa el audio:
// osc1.start()

function App() {

  return (
    <>
    <h1>Sliders</h1>
    <button onClick={()=> osc1.start()}>Start</button>
    <button onClick={()=> osc1.stop()}>Stop</button>
    </>
  )
}

export default App
