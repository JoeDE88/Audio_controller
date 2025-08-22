
export default function Filter({ change, settings, changeType }) {
    let { frequency, detune, Q, gain, type } = settings

    return (
        <div className="control">
            <h1>Filter</h1>
            <div className="range">
                <div className="params">
                    <h3>frequency</h3>
                    <input value={frequency} onChange={change} type="range" id="frequency" max='10000' orient='vertical' />
                </div>
                <div className="params">
                    <h3>detune</h3>
                    <input value={detune} onChange={change} type="range" id="detune" orient='vertical' />
                </div>
                <div className="params">
                    <h3>Q</h3>
                    <input value={Q} onChange={change} type="range" id="Q" max='10' orient='vertical' disabled={type === 'lowshelf' || type === 'highshelf'} />
                </div>
                <div className="params">
                    <h3>gain</h3>
                    <input value={gain} onChange={change} type="range" id="gain" max='10' orient='vertical' disabled={type === 'lowpass' || type === 'highpass'} />
                </div>
            </div>
            <div className="param">
                <h3>type</h3>
                <button id="lowpass" onClick={changeType} className={`${type === "lowpass" && "active"}`}>lowpass</button>
                <button id="highpass" onClick={changeType} className={`${type === "highpass" && "active"}`}>highpass</button>
                <button id="notch" onClick={changeType} className={`${type === "notch" && "active"}`}>notch</button>
                <button id="lowshelf" onClick={changeType} className={`${type === "lowshelf" && "active"}`}>lowshelf</button>
                <button id="highshelf" onClick={changeType} className={`${type === "highshelf" && "active"}`}>highshelf</button>
            </div>
        </div>
    )
}

