import tharakam from "/transparent/title.png"

const ControlPanel = ({ showOverlay, toggleOrbit, isOrbitVisible, toggleLabel, isLabelVisible, resetView }) => {

    return (
        <div className="text-white fixed h-screen top-0 left-0 flex flex-col gap-5 items-center bg-[#0005] border-r-2 p-10">
            <div>
                <img src={tharakam} alt="tharakam logo" className="w-60" />
                <p className="opacity-75 font-mono">2026</p>
            </div>

            <span className="h-30"></span>
            <span className="button button-sm w-50" onClick={showOverlay}>Home</span>
            <span className={`${isOrbitVisible && 'active'} button button-indicator button-sm w-50`} onClick={toggleOrbit}>Orbits</span>
            <span className={`${isLabelVisible && 'active'} button button-indicator button-sm w-50`} onClick={toggleLabel}>Label</span>
            <span className="button button-sm w-50" onClick={resetView}>Reset view</span>
            <div className="flex flex-col gap-5 border p-5 w-60">
                <span>Speed:-</span>
                <input type="range" className="range pr-6 accent-white" />
            </div>
        </div>
    )
}

export default ControlPanel