const ControlPanel = () => {
    return (
        <div className="fixed h-screen top-0 left-0 flex flex-col items-center bg-black">
            <span className="button button-sm">Toggle Orbits</span>
            <span className="button button-sm">Toggle Label</span>
            <div>
                <span>Speed</span>
                <input type="range" />
            </div>
        </div>
    )
}

export default ControlPanel