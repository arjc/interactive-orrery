import { useEffect, useState } from "react";

import OverlayInterface from "./components/OverlayInterface.jsx"
import OrreryCanvas from "./components/OrreryCanvas.jsx"
import ControlPanel from "./components/ControlPanel.jsx"


function App() {
  const [overlayVisibility, setOverlayVisibility] = useState(true);
  const [orbitVisibility, setOrbitVisibility] = useState(true);
  const [labelVisibility, setLabelVisibility] = useState(true);

  // useEffect(() => {
  // }, [ OverlayInterface ])

  return (
    <>
      <marquee className="fixed t-0 l-0 w-screen text-white z-10 font-mono opacity-60">
        Work in progress. Planetary revolution, rotation, and eliptical orbits will be implemented later on.
      </marquee>
      <OrreryCanvas
        isOrbitVisible={orbitVisibility}
        isLabelVisible={labelVisibility}
        resetCamera={() => pass} // jan 31 26 ==================================
      />
      <ControlPanel
        showOverlay={() => setOverlayVisibility(true)}

        toggleOrbit={() => setOrbitVisibility(c => !c)}
        isOrbitVisible={orbitVisibility}
        toggleLabel={() => setLabelVisibility(c => !c)}
        isLabelVisible={labelVisibility}

        resetView={() => pass} // jan 29 26 ====================================
      />
      <OverlayInterface
        isComponentVisible={overlayVisibility}
        closeOverlay={() => setOverlayVisibility(false)}
      />
    </>
  )
}

export default App