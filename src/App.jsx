import Hero from "./components/Hero.jsx"
import { Canvas } from "@react-three/fiber"
import { Html, Line, Sphere, Ring, OrbitControls } from "@react-three/drei"

function PlanetPath({ rad, col }) {
  const points = []
  const nLineSegments = 64
  for (let i = 0; i <= nLineSegments; i++) {
    const theta = (i / nLineSegments) * Math.PI * 2
    points.push([Math.cos(theta) * rad, 0, Math.sin(theta) * rad])
  }
  return <Line points={points} color={col} lineWidth={1} transparent opacity={0.3} />
}

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 50, near: 0.1, far: 1000 }}
        className="w-screen h-screen bg-black cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} />

        {/* Suryan */}
        <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#fff" />
        </Sphere>



        <PlanetPath rad={3.9} col={'#ff0'} />
        {/* Mercury */}
        <Sphere args={[0.0035, 32, 32]} position={[3.9, 0, 0]}>
          <meshStandardMaterial color="#ff0" />
        </Sphere>

        <PlanetPath rad={7.2} col={'#aa3'} />
        {/* Andi (Venus) */}
        <Sphere args={[0.0087, 32, 32]} position={[7.2, 0, 0]}>
          <meshStandardMaterial color="#aa3" />
        </Sphere>

        <PlanetPath rad={10} col={'#00f'} />
        {/* Bhoomi */}
        <Sphere args={[0.0092, 32, 32]} position={[10, 0, 0]}>
          <meshStandardMaterial color="#00f" />
        </Sphere>

        <PlanetPath rad={15.2} col={'#00f'} />
        {/* MARZ */}
        <Sphere args={[0.0049, 32, 32]} position={[15.2, 0, 0]}>
          <meshStandardMaterial color="#f00" />
        </Sphere>

        <PlanetPath rad={52} col={'#00f'} />
        {/* Joopiter mazhanayam */}
        <Sphere args={[0.1, 32, 32]} position={[52, 0, 0]}>
          <meshStandardMaterial color="#431" />
        </Sphere>

        <Html position={[3, 0.5, 0]} center>
          <div style={{ color: 'white', fontSize: '14px', whiteSpace: 'nowrap', zIndex: -5 }} className="">
            Mercury
          </div>
        </Html>

        <PlanetPath rad={95.4} col={'#00f'} />
        {/* Saturn */}
        <Sphere args={[0.084, 32, 32]} position={[95.4, 0, 0]}>
          <meshStandardMaterial color="#666" />
        </Sphere>

        <PlanetPath rad={192} col={'#00f'} />
        {/* Ur Anus */}
        <Sphere args={[0.037, 32, 32]} position={[192, 0, 0]}>
          <meshStandardMaterial color="#0ef" />
        </Sphere>

        <PlanetPath rad={300.6} col={'#00f'} />
        {/* Neptune */}
        <Sphere args={[0.035, 32, 32]} position={[300.6, 0, 0]}>
          <meshStandardMaterial color="#1af" />
        </Sphere>

        <OrbitControls />
      </Canvas>
      <Hero />
    </>
  )
}

export default App