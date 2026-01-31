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
        
        resetView={() => resetView()}
      />
      <OverlayInterface
        isComponentVisible={overlayVisibility}
        closeOverlay={() => setOverlayVisibility(false)}
      />
    </>
  )
}

export default App