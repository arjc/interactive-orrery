import { Canvas } from "@react-three/fiber"
import { Html, Line, Sphere, OrbitControls } from "@react-three/drei"
import { solarPlanets } from "../constants/planets"
import { plane } from "three/examples/jsm/Addons.js"

function RenderRadialRadialPath({ rad, col = "#fff" }) {
    const points = []
    const nLineSegments = 64
    for (let i = 0; i <= nLineSegments; i++) {
        const theta = (i / nLineSegments) * Math.PI * 2
        points.push([Math.cos(theta) * rad, 0, Math.sin(theta) * rad])
    }
    return <Line points={points} color={col} lineWidth={1} transparent opacity={0.3} />
}

const OrreryCanvas = () => {
    return (
        <Canvas
            camera={{ position: [-40, 10, 30], fov: 50, near: 0.1, far: 1000 }}
            className="w-screen h-screen bg-black cursor-grab active:cursor-grabbing"
        >
            <ambientLight intensity={5} />
            <pointLight position={[10, 10, 10]} />

            {/* Suryan */}
            <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fff" />
            </Sphere>

            {solarPlanets.map((planet) => (
                <>
                    <RenderRadialRadialPath rad={planet.au * 14.96} col={planet.col}/>
                    <Html key={planet.name + "tag"} position={[planet.au * 14.96, 0, 0]}>
                        <span className="text-white bg-gray-900 font-mono ">{planet.name}</span>
                    </Html>

                    <Sphere key={planet.name + "name"} args={[planet.rau * 1496, 32, 32]} position={[planet.au * 14.96, 0, 0]}>
                        <meshStandardMaterial color={planet.col} />
                    </Sphere>
                </>
            ))}

            <OrbitControls />
        </Canvas>
    )
}

export default OrreryCanvas