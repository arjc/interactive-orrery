# Neo NEOs Orrery 2026

This is a remake of the [project](https://www.github.com/nosebyte/nosebyte.github.io) made for a NASA Hackathon....

![Tharakam Screenshot](https://github.com/arjc/interactive-orrery/blob/main/screenshot/tharakam.png)

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
