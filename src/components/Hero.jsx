import { useState } from "react"
import cookie from '/transparent/diabeto.webp'
import omg from '/transparent/omg.webp'

const Hero = () => {
  const [overlayVisible, setOverlayVisibility] = useState(true);

  return (
    <div className={` ${overlayVisible ? "translate-y-0" : "translate-y-full"} 
                      fixed inset-0 flex flex-col items-center 
                      text-white transition-all duration-700 bg-gray-950 overflow-y-auto`}>

      <div className="my-20 text-center">
        <img src="" alt="Tharakam logo" />
        <h1>Interactive Orrery 2026</h1>
      </div>

      <div className="flex flex-col items-center gap-5">
        <span onClick={() => setOverlayVisibility(false)} className="button button-sm">Enter</span>
      </div>

      <div>
      <div className="my-20">
        <h1 className="gimme-head-sm">What is Tharakam?</h1>
        <ul>
          <li>Tharakam is an interactive space orrery which is an adaptation of my old project which I made for a 48 hour hackathon conducted by NASA (NASA Space Apss 2024)</li>
          <li>The hackathon version was build using vanilla js and I importd ThreeJs usin cdn.</li>
          <li>This version is built using react for better perfomance and usablility.</li>
        </ul>
      </div>

      <div className="my-20">
        <h1 className="gimme-head-sm">What is an interactive orrery?</h1>
        <ul>
          <li>An orrery is a mechanical, usually clockwork-driven, model of the solar system that demonstrates the orbital motions of planets and moons around the Sun </li>
          <li>An Interactive (Digital) Orrery is where we can move around and modify the cellestial bodies to our desired thing.</li>
          <li>Use your mouse to interact with the orrery</li>
        </ul>
      </div>
      </div>


      <div className="w-full flex p-5 justify-between flex-col gap-5 md:flex-row">
        <div className="flex gap-3 items-center">
          <img src={cookie} alt="Round tasty Cookie" className="h-20 roll" />
          <div>
            <h1 className="text-2xl font-mono tracking-[0.7ch]">Cookies</h1>
            <p>I use cookies to store info for Ads</p>
          </div>
        </div>
        <div className="flex gap-3 items-center text-right">
          <div>
            <h1 className="text-2xl font-mono tracking-[0.7ch]">Privacy</h1>
            <p>Your activity is private and nobody can steal you data here</p>
          </div>
          <img src={omg} alt="OMG Emoji" className="h-20 anti-roll grayscale-70" />
        </div>
      </div>
    </div>
  )
}

export default Hero