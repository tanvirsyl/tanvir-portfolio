import React from "react"
import Test from "./Asset/tanvir.jpg"
import Healthy from "./Asset/healthy.jpg"
import Android from "./Asset/android.jpg"
import Cup from "./Asset/coffeehot1.jpg"
import Men from "./Asset/loginBg.png"
import Connect from "./Asset/Cover-option-1-1024x768.jpg"
import Profile_data from "./profile_data"
import Footer from "./Footer"
const Project = () => {
  return (
    <div>
      <Profile_data />
      <div className='filters__sections'>
        <div
          className='projects__content grid filters__active'
          data-content
          id='projects'
        >
          <article className='projects__card'>
            <img src={Men} alt='' className='projects__img' />

            <div className='projects__modal'>
              <div>
                <span className='projects__subtitle'>MenTex</span>
                <h3 className='projects__title'>
                  mental health treatment help web application.
                </h3>
                <a href='#' className='projects__button button button__small'>
                  <i className='ri-link'></i>
                </a>
              </div>
            </div>
          </article>

          <article className='projects__card'>
            <img src={Connect} alt='' className='projects__img' />

            <div className='projects__modal'>
              <div>
                <span className='projects__subtitle'>Teacher-connect</span>
                <h3 className='projects__title'>
                  {" "}
                  connect with online course teachers
                </h3>
                <a href='#' className='projects__button button button__small'>
                  <i className='ri-link'></i>
                </a>
              </div>
            </div>
          </article>

          <article className='projects__card'>
            <img src={Cup} alt='' className='projects__img' />

            <div className='projects__modal'>
              <div>
                <span className='projects__subtitle'>Cup Story</span>
                <h3 className='projects__title'>Fast food web-application</h3>
                <a
                  href='https://github.com/tanvirsyl/cupStory'
                  className='projects__button button button__small'
                >
                  <i className='ri-link'></i>
                </a>
              </div>
            </div>
          </article>

          <article className='projects__card'>
            <img src={Healthy} alt='' className='projects__img' />

            <div className='projects__modal'>
              <div>
                <span className='projects__subtitle'>Heathy Diet</span>
                <h3 className='projects__title'>android application</h3>
                <a
                  href='https://github.com/tanvirsyl/Healthy_Diet'
                  className='projects__button button button__small'
                >
                  <i className='ri-link'></i>
                </a>
              </div>
            </div>
          </article>

          <article className='projects__card'>
            <img src={Android} alt='' className='projects__img' />

            <div className='projects__modal'>
              <div>
                <span className='projects__subtitle'>LibShop</span>
                <h3 className='projects__title'>
                  E-Commerce android application
                </h3>
                <a
                  href='https://github.com/tanvirsyl/LibShop'
                  className='projects__button button button__small'
                >
                  <i className='ri-link'></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Project
