import { Canvas } from "@react-three/fiber"
import { Html, Line, Sphere, OrbitControls } from "@react-three/drei"
import { solarPlanets } from "../constants/planets"

function RenderRadialRadialPath({ rad, col = "#fff" }) {
    const points = []
    const nLineSegments = 64
    for (let i = 0; i <= nLineSegments; i++) {
        const theta = (i / nLineSegments) * Math.PI * 2
        points.push([Math.cos(theta) * rad, 0, Math.sin(theta) * rad])
    }
    return <Line points={points} color={col} lineWidth={0.25} transparent opacity={1} />
}


const OrreryCanvas = ({ isOrbitVisible, isLabelVisible }) => {

    
    return (
        <Canvas
        camera={{ position: [-120, 40, 50], fov: 30, near: 0.1, far: 9999 }}
            className="w-screen h-screen bg-black cursor-grab active:cursor-grabbing"
            >
            <ambientLight intensity={0.3} />
            <pointLight intensity={10000} position={[0, 0, 0]} />

            {/* Fake sunlight */}
            <pointLight intensity={30} position={[2, 0, 0]} />
            <pointLight intensity={30} position={[0, 2, 0]} />
            <pointLight intensity={30} position={[0, 0, 2]} />
            <pointLight intensity={30} position={[-2, 0, 0]} />
            <pointLight intensity={30} position={[0, -2, 0]} />
            <pointLight intensity={30} position={[0, 0, -2]} />


            {/* Suryan */}
            {isLabelVisible &&
                <Html key={"suryan"} position={[0, 0, 0]} zIndexRange={[0, 0]}>
                    <span className="text-white bg-gray-900 font-mono px-2 text-[0.8em]">Sun</span>
                </Html>
            }
            <Sphere args={[0.0465 * 14.96, 32, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fff" />
            </Sphere>

            {[...solarPlanets].reverse().map((planet) => (
                <group key={planet.id}>
                    {isOrbitVisible && <RenderRadialRadialPath rad={planet.au * 14.96} col={planet.col} />}
                    {isLabelVisible &&
                        <Html position={[planet.au * 14.96, 0, 0]} zIndexRange={[0, 0]}>
                            <span className="bg-gray-900 font-mono px-2 text-[0.75rem]" style={{ color: planet.col }}>{planet.name}</span>
                        </Html>
                    }
                    <Sphere args={[planet.rau * 1496, 32, 32]} position={[planet.au * 14.96, 0, 0]}>
                        <meshStandardMaterial color={planet.col} />
                    </Sphere>
                </group>
            ))}
            <OrbitControls minDistance={0.1} maxDistance={1000} />
        </Canvas>
    )
}

export default OrreryCanvas