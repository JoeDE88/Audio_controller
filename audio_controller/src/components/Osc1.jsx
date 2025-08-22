export default function Osc1({ changeSettings, settings, changeType }) {
    let { type, frequency, detune } = settings

    return (
        <div className="control">
            <h1>Osc 1</h1>
            <div className="range">
                <div className="param">
                    <h3>frequency</h3>
                    <input value={frequency} onChange={changeSettings} type="range" id="frequency" max='5000' orient='vertical' />
                </div>
                <div className="param">
                    <h3>detune</h3>
                    <input value={detune} onChange={changeSettings} type="range" id="detune" max='100' orient='vertical' />
                </div>
            </div>
            <div className="param">
                <h3>wave</h3>
                <button id="sine" onClick={changeType} className={`${type === "sine" && "active"}`}>sine</button>
                <button id="square" onClick={changeType} className={`${type === "square" && "active"}`}>square</button>
                <button id="sawtooth" onClick={changeType} className={`${type === "sawtooth" && "active"}`}>sawtooth</button>
                <button id="triangle" onClick={changeType} className={`${type === "triangle" && "active"}`}>triangle</button>
            </div>
        </div>
    )
}