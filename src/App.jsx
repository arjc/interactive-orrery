import Hero from "./components/Hero.jsx"
import { Canvas } from "@react-three/fiber"
import { Sphere, Ring, OrbitControls } from "@react-three/drei"

function App() {
  return (
    <>
      <Canvas 
        camera={{position: [0, 0, 30], fov: 50, near: 0.1, far: 1000}}  
        className="w-screen h-screen bg-black cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Suryan */}
        <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#fff" />
        </Sphere>

        <Ring args={[0.1, 5, 64]} position={[0, 0, 0]} >
          <meshStandardMaterial color="#ff0" />
        </Ring>

        
        {/* Mercury */}
        <Sphere args={[0.0035, 32, 32]} position={[3.9, 0, 0]}>
          <meshStandardMaterial color="#ff0" />
        </Sphere>

        {/* Andi (Venus) */}
        <Sphere args={[0.0087, 32, 32]} position={[7.2, 0, 0]}>
          <meshStandardMaterial color="#ff3" />
        </Sphere>
        
        {/* Bhoomi */}
        <Sphere args={[0.0092, 32, 32]} position={[10, 0, 0]}>
          <meshStandardMaterial color="#00f" />
        </Sphere>

        {/* MARZ */}
        <Sphere args={[0.0049, 32, 32]} position={[15.2, 0, 0]}>
          <meshStandardMaterial color="#f00" />
        </Sphere>

        {/* Joopiter mazhanayam */}
        <Sphere args={[0.1, 32, 32]} position={[52, 0, 0]}>
          <meshStandardMaterial color="#431" />
        </Sphere>

        {/* Saturn */}
        <Sphere args={[0.084, 32, 32]} position={[95.4, 0, 0]}>
          <meshStandardMaterial color="#666" />
        </Sphere>

        {/* Ur Anus */}
        <Sphere args={[0.037, 32, 32]} position={[192, 0, 0]}>
          <meshStandardMaterial color="#0ef" />
        </Sphere>

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