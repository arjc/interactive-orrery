import tharakam from '/transparent/title.png'
import Cookie from "./Cookie"
import Footer from "./Footer"

const OverlayInterface = ({isComponentVisible, closeOverlay}) => {


  return (
    <>
      <div className={` ${isComponentVisible ? "translate-y-0" : "translate-y-full"} 
                      fixed inset-0 flex flex-col items-center 
                      text-white transition-all duration-700 bg-gray-950 overflow-y-auto`}>

        <div className="my-20 text-center">
          <img src={tharakam} alt="Tharakam logo" />
          <h1>Interactive Orrery 2026</h1>
        </div>

        <div className="flex flex-col items-center gap-5">
          <span onClick={closeOverlay} className="button button-sm">Enter</span>
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

      <Cookie />
      <Footer />
      </div>
    </>
  )
}

export default OverlayInterface