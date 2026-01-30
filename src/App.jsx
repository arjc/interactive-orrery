import Hero from "./components/Hero.jsx"
import OrreryCanvas from "./components/OrreryCanvas.jsx"

function App() {
  return (
    <>
      <OrreryCanvas className="-z-1"/>
      <Hero className="z-99"/>
    </>
  )
}

export default App