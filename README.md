![Tharakam Title](https://github.com/arjc/interactive-orrery/blob/main/public/transparent/title.png)

# THARAKAM - Neo NEOs and Solar Orrery 2026

This is a remake of the [project](https://www.github.com/nosebyte/nosebyte.github.io) made for a NASA Hackathon....

![Tharakam Web App Screenshot of solar system](https://github.com/arjc/interactive-orrery/blob/main/public/screenshot/tharakam.png)

<div>
    <h2>What is Tharakam?</h2>
    <ul>
    <li>Tharakam is an interactive space orrery which is an adaptation of my old project which I made for a 48 hour hackathon conducted by NASA (NASA Space Apss 2024)</li>
    <li>The hackathon version was build using vanilla js and I importd ThreeJs usin cdn.</li>
    <li>This version is built using react for better perfomance and usablility.</li>
    </ul>
</div>

<div>
    <h2>What is an interactive orrery?</h2>
    <ul>
    <li>An orrery is a mechanical, usually clockwork-driven, model of the solar system that demonstrates the orbital motions of planets and moons around the Sun </li>
    <li>An Interactive (Digital) Orrery is where we can move around and modify the cellestial bodies to our desired thing.</li>
    </ul>
</div>

<div>
    <h2>Is this how really it looks in space?</h2>
    <ul>
    <li>No, not per se; The scale of this orrery is very rough and calulalations have an average of &plusmn; 0.22% variation.</li>
    <li>I calculate the planet's radius and length bu using their astronaumical unit (AU) multiply them with 149.6 miln (earth's AU or just AU) to in 2 decimal places.</li>
    <li>This is the main cause of the variation and it is there due to simple performance optimisations.</li>
    <li>Another big flaw is that planets have eliptical orbits and move about with different velocities depending on the gravitational forces acting on it </li>
    <li>And they dont revolve around on the same plane angle...</li>
    <li>I made it like this just for refference and to test out threejs functions.</li>
    </ul>
</div>

# Dependancies

## tailwind@vite

## three.js@vite
## three.js/fiber
## three.js/drei

## gsap

# ThreeJs Setup

## Scene, Camera, Renderer
Documentation pending...

## Camera Controls 
Documentation pending...

# Planet, Orbit and Lighting 

## Planet creation

I have stored all the data of each planets in the `src/constants/planet.js` file.

Each planets object is stored in an array named solar planets.

The planet array is mapped from bottom to top to a non-deconstructed object called planet, and contain data within a group to render their Spherical Mesh, Html Label and Orbit component.

I have setup conditional rendering for label and orbit which toggles as the `isOrbitVisible` and `isLabelVisible`
react states changes.


```
[...solarPlanets].reverse().map((planet) => (
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
   )
)

```

## Planet orbit creation

There isn't a single mesh to create a ring or torus like in blender...

So we used the line segments to make circular orbits. 

The function takes two arguments: <br />
rad = radius in au <br />
col = colour hex string value <br />

The function returns a threejs drei component &lt;Line /&gt;;
which is a mesh of a line segment.

```
const renOrbitPath = ({ rad, col = "#fff" }) => {
    const points = []
    const nLineSegments = 64
    for (let i = 0; i <= nLineSegments; i++) {
        const theta = (i / nLineSegments) * Math.PI * 2
        points.push([Math.cos(theta) * rad, 0, Math.sin(theta) * rad])
    }
    return <Line points={points} color={col} lineWidth={0.25} transparent opacity={1} />
}
```
## Planet Label
ThreeJs drei has an `&lt;HTML /&gt;` component which allows the canvas to render two dimensional html to the canvas.

It's position can be fixed on the 3d canvas and it'll show the HTML's orthographic projection on the screen.


# Planet meashurement, scale and accuracy

## All planets are to scale as per the nasa

![Nasa Planets Scale Tablular Data for reference](https://github.com/arjc/interactive-orrery/blob/main/research/nasaPlanetDistanceChart.png)
![Nasa Planets Tablular Data for reference](https://github.com/arjc/interactive-orrery/blob/main/research/nasaPlanetTabularData.png)

## Tollerance of scale and size

Here, I am multiplying planet au with earth distance from sun, so that I can get the total distance of the planet from the sun
Problem: I only use two decimal points so the precision is lower and room for error is more

ie., au of mercury = 0.39
distance of mercury from sun = 57,900,000
distance of earth from sun = 149,600,000 = 1 AU
149,600,000 \* 0.39 = 58,344,000

f(x) = modulus of [(meashured - correct ) / correct] \* 100
total tolarance of mercury will be = &plusmn; 0.77%

similarly, If we take the average of all planets we get &plusmn; 0.22% to be the tolerance of this method, which is to be noted for accurate scale...

```
au arr = []
```