// Notes by achukuttan (feel free to read and understand the astronomical concepts)

// distance of sun's origin to earth's origin = 149.6 mil km = 1 AU (Astronomical unit)

// === tollerance ===
// Here, I am multiplying planet au with earth distance from sun to get the total distance of the planet from the sun
// Problem: I only use two decimal points so the precision is lower and room for error is more

// ie., au of mercury = 0.39
// distance of mercury from sun = 57,900,000 
// distance of earth from sun = 149,600,000 = 1 AU
// 149,600,000 * 0.39 = 58,344,000

// since error is modulus of [(meashured - correct ) / correct] * 100 
// total tolarance of mercury will be = +- 0.77%

// similarly, if we take the average of all planets we get +- 0.22% to be the tolerance of this method, which is to be noted for accurate scale...
// =========

// 149,600,000 * au = planet distance
// 149,600,000 * rau = planet radius


export const solarPlanets = [
  {
    id: 1,
    name: "Mercury",
    col: "#B1B1B1", // BIBI KUTTY REFERENCE 
    au: 0.387,
    rau: 0.0000185, 
  },
  {
    id: 2,
    name: "Venus",
    col: "#EED5B7",
    au: 0.723,
    rau: 0.0000475, 
  },
  {
    id: 3,
    name: "Earth",
    col: "#A2653E",
    au: 1,
    rau: 0.0000405, 
  },
  {
    id: 4,
    name: "Mars",
    col: "#C1440E",
    au: 1.524,
    rau: 0.0000216,
  },
  {
    id: 5,
    name: "Jupiter",
    col: "#D4A76A",
    au: 5.203,
    rau: 0.000464,
  },
  {
    id: 6,
    name: "Saturn",
    col: "#E8D3A4",
    au: 9.537,
    rau: 0.000391,
  },
  {
    id: 7,
    name: "Uranus",
    col: "#7FDBFF",
    au: 19.191,
    rau: 0.000168,
  },
  {
    id: 8,
    name: "Neptune",
    col: "#0054A6",
    au: 30.068,
    rau: 0.000165,
  },
];




// <PlanetPath rad={3.9} col={'#ff0'} />
// {/* Mercury */}
// <Sphere args={[0.0035, 32, 32]} position={[3.9, 0, 0]}>
//   <meshStandardMaterial color="#ff0" />
// </Sphere>

// <PlanetPath rad={7.2} col={'#aa3'} />
// {/* Andi (Venus) */}
// <Sphere args={[0.0087, 32, 32]} position={[7.2, 0, 0]}>
//   <meshStandardMaterial color="#aa3" />
// </Sphere>

// <PlanetPath rad={10} col={'#00f'} />
// {/* Bhoomi */}
// <Sphere args={[0.0092, 32, 32]} position={[10, 0, 0]}>
//   <meshStandardMaterial color="#00f" />
// </Sphere>

// <PlanetPath rad={15.2} col={'#00f'} />
// {/* MARZ */}
// <Sphere args={[0.0049, 32, 32]} position={[15.2, 0, 0]}>
//   <meshStandardMaterial color="#f00" />
// </Sphere>

// <PlanetPath rad={52} col={'#00f'} />
// {/* Joopiter mazhanayam */}
// <Sphere args={[0.1, 32, 32]} position={[52, 0, 0]}>
//   <meshStandardMaterial color="#431" />
// </Sphere>

// <Html position={[3, 0.5, 0]} center>
//   <div style={{ color: 'white', fontSize: '14px', whiteSpace: 'nowrap'}} className="">
//     Mercury
//   </div>
// </Html>

// <PlanetPath rad={95.4} col={'#00f'} />
// {/* Saturn */}
// <Sphere args={[0.084, 32, 32]} position={[95.4, 0, 0]}>
//   <meshStandardMaterial color="#666" />
// </Sphere>

// <PlanetPath rad={192} col={'#00f'} />
// {/* Ur Anus */}
// <Sphere args={[0.037, 32, 32]} position={[192, 0, 0]}>
//   <meshStandardMaterial color="#0ef" />
// </Sphere>

// <PlanetPath rad={300.6} col={'#00f'} />
// {/* Neptune */}
// <Sphere args={[0.035, 32, 32]} position={[300.6, 0, 0]}>
//   <meshStandardMaterial color="#1af" />
// </Sphere>