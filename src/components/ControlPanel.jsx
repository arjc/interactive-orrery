import tharakam from "/transparent/title.png"

const ControlPanel = () => {

    return (
        <div className="text-white fixed h-screen top-0 left-0 flex flex-col gap-5 items-center bg-black border-r-2 p-10">
            <img src={tharakam} alt="tharakam logo" className="w-60" />
            <span className="h-30"></span>
            <span className="button button-sm">Home</span>
            <span className="button button-sm">Toggle Orbits</span>
            <span className="button button-sm">Toggle Label</span>
            <div className="flex flex-col gap-5 border p-5">
                <span>Speed</span>
                <input type="range" className="range pr-6 accent-yellow-500"  />
            </div>
        </div>
    )
}

export default ControlPanel