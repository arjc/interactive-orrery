import Hero from "./components/Hero.jsx"
import { Canvas } from "@react-three/fiber"
import { Sphere, OrbitControls } from "@react-three/drei"

function App() {
  return (
    <>
      <Canvas 
        camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}  
        className="w-screen h-screen bg-black cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Sphere args={[1, 32, 32]} position={[-2, 0, 0]}>
          <meshStandardMaterial color="#eee" />
        </Sphere>
        
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#eee" />
        </Sphere>
        
        <Sphere args={[1, 32, 32]} position={[2, 0, 0]}>
          <meshStandardMaterial color="#eee" />
        </Sphere>
        
        <OrbitControls />
      </Canvas>
      <Hero />
    </>
  )
}

export default App