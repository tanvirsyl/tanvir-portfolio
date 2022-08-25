import React from "react"
import Profile_data from "./profile_data"
import Footer from "./Footer"
const Skill = () => {
  return (
    <div>
      <Profile_data />
      <div className='skills__content grid' data-content id='skills'>
        <div className='skills__area'>
          <h3 className='skills__title'>Frontend Developer</h3>

          <div className='skills__box'>
            <div className='skills__group'>
              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>HTML</h3>
                  <span className='skills__level'>Basic</span>
                </div>
              </div>

              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>CSS</h3>
                  <span className='skills__level'>Advanced</span>
                </div>
              </div>

              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>JavaScript</h3>
                  <span className='skills__level'>Intermediate</span>
                </div>
              </div>
            </div>

            <div className='skills__group'>
              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>React</h3>
                  <span className='skills__level'>Intermediate</span>
                </div>
              </div>

              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>Bootstrap</h3>
                  <span className='skills__level'>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='skills__area'>
          <h3 className='skills__title'>Education</h3>

          <div className='skills__box'>
            <div className='skills__group'>
              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>Bachelor of Science</h3>
                  <span className='skills__level'>
                    Computer science & engineering (3.38/4.00)
                  </span>
                  <span className='skills__level'>
                    January 2018 - March 2022
                  </span>
                </div>
              </div>

              {/* <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>MongoDB</h3>
                  <span className='skills__level'>Basic</span>
                </div>
              </div> */}
            </div>

            {/* <div className='skills__group'>
              <div className='skills__data'>
                <i className='ri-checkbox-circle-line'></i>

                <div>
                  <h3 className='skills__name'>Firebase</h3>
                  <span className='skills__level'>Intermediate</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Skill
