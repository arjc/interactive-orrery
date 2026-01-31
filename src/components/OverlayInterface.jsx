import tharakam from '/transparent/title.png'
import Cookie from "./Cookie"
import Footer from "./Footer"

const OverlayInterface = ({ isComponentVisible, closeOverlay }) => {


  return (
    <>
      <div className={` ${isComponentVisible ? "translate-y-0" : "translate-y-full"} 
                      fixed inset-0 flex flex-col items-center transition-all
                      text-white duration-700 bg-[#040404] overflow-y-auto`}>

        <div className='p-10'>
          <div className="my-20 text-right">
            <img src={tharakam} alt="Tharakam logo" />
            <span className='font-mono'>====&gt; Neo <abbr title='Near earth objects'>NEOs</abbr> and Solar Interactive Orrery 2026. Made with <span className='text-red-400'>♥</span> by Arjun M Liji</span>
          </div>

          <div className="flex flex-col items-center gap-5">
            <span onClick={closeOverlay} className="button button-xl font-mono text-2xl">Enter Simulation</span>
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
              </ul>
            </div>

            <div className="my-20">
              <h1 className="gimme-head-sm">Is this how really it looks in space?</h1>
              <ul>
                <li>No, not per se... The scale of this orrery is very rough and calulalations have an average of &plusmn; 0.22% variation.</li>
                <li>I calculate the planet's radius and length bu using the astronaumical unit (AU) and take difference with the earth's AU to in 2 decimal places.</li>
                <li>This is the main cause of the variation and it is there due to simple performance optimisations.</li>
              </ul>
            </div>

          </div>

          <Cookie />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default OverlayInterface