import OverlayInterface from "./components/OverlayInterface.jsx"
import OrreryCanvas from "./components/OrreryCanvas.jsx"
import ControlPanel from "./components/ControlPanel.jsx"

function App() {
  return (
    <>
      <OrreryCanvas />
      <ControlPanel />
      <OverlayInterface />
    </>
  )
}

export default App