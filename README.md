# New Orrery 2026

this is a remake of the [project](https://www.github.com/nosebyte/nosebyte.github.io) made for a NASA Hackathon....

# Research, Refference and Data

## Tollerance
Here, I am multiplying planet au with earth distance from sun to get the total distance of the planet from the sun
Problem: I only use two decimal points so the precicion is lower and room for error is more

ie., au of mercury = 0.39
distance of mercury from sun = 57,900,000 
distance of earth from sun = 149,600,000 = 1 AU
149,600,000 * 0.39 = 58,344,000

since error is modulus of [(meashured - correct ) / correct] * 100 
total tolarance of mercury will be = +- 0.77%

similarly, if we take the average of all planets we get +- 0.22% to be the tolerance of this method, which is to be noted for accurate scale...

## All planets are to scale as per the nasa

![Nasa Planets Scale Tablular Data for reference](https://github.com/arjc/interactive-orrery/blob/main/research/nasaPlanetDistanceChart.png)
![Nasa Planets Tablular Data for reference](https://github.com/arjc/interactive-orrery/blob/main/research/nasaPlanetTabularData.png)