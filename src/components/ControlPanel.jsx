import tharakam from "/transparent/title.png"

const ControlPanel = ({ showOverlay, toggleOrbit, isOrbitVisible, toggleLabel, isLabelVisible, resetView }) => {

    return (
        <div className="text-white fixed w-screen max-h-[30vh] text-[0.6em] md:text-[1em] md:max-h-screen md:w-auto bottom-0 md:top-0 left-0 
                          flex flex-col gap-3 md:gap-5 items-center bg-[#0005] border-t-2 md:border-r-2 md:border-t-0 p-5 md:p-10">
            <div className="hidden md:flex my-10">
                <img src={tharakam} alt="tharakam logo" className="w-60" />
                <p className="opacity-75 font-mono">2026</p>
            </div>

            {/* <span className="h-30"></span> */}
            <div className="flex md:flex-col flex-wrap items-center justify-center md:gap-5">
                <span className="button button-sm w-30 md:w-50" onClick={showOverlay}>Home</span>
                <span className={`${isOrbitVisible && 'active'} button button-indicator button-sm w-30 md:w-50`} onClick={toggleOrbit}>Orbits</span>
                <span className={`${isLabelVisible && 'active'} button button-indicator button-sm w-30 md:w-50`} onClick={toggleLabel}>Label</span>
                <span className="button button-sm w-30 md:w-50" onClick={resetView}>(WIP)</span>
                <div className="flex flex-col gap-5 border p-5 w-60">
                    <span>Simulation Speed:- (WIP)</span>
                    <input type="range" className="range pr-6 accent-white" />
                </div>
            </div>
            <span className="font-mono opacity-75 md:hidden ">Drag to move around the canvas using your fingers to pan. Use two fingers to zoom or move.</span>
            <span className="hidden font-mono opacity-75 md:flex max-w-60 text-center">Drag the screen using LM to pan. <br /> Use Ctrl + LM to move.<br />  Use Scroll Wheel or two fingers to zoom.</span>
        </div>
    )
}

export default ControlPanel