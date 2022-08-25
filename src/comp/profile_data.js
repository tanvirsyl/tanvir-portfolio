import React from "react"
import "./profile_data.css"
import ProfilePic from "./Asset/tanvir-re.png"
import Main from "./Main"

const profile_data = () => {
  return (
    <div>
      <header className='profile container'>
        {/* <i className='ri-moon-line change-theme' id='theme-button'></i> */}

        <div className='profile__container grid'>
          <div className='profile__data'>
            <div className='profile__border'>
              <div className='profile__perfil'>
                <img src={ProfilePic} alt='' />
              </div>
            </div>

            <h2 className='profile__name'>Tanvir Hussain</h2>
            <h3 className='profile__profession'>Front-End developer</h3>

            <ul className='profile__social'>
              <a
                href='https://www.instagram.com/tanvir_h_/'
                target='_blank'
                className='profile__social-link'
              >
                <i className='ri-instagram-line'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/tanvir-hussain-b4464b22a'
                target='_blank'
                className='profile__social-link'
              >
                <i className='ri-linkedin-box-line'></i>
              </a>
              <a
                href='https://github.com/tanvirsyl'
                target='_blank'
                className='profile__social-link'
              >
                <i className='ri-github-line'></i>
              </a>
            </ul>
          </div>

          <div className='profile__info grid'>
            <div className='profile__info-group'>
              <h3 className='profile__info-number'>Fresher</h3>
              <p className='profile__info-description'>
                Connect with web <br />
                development almost <br />
                three years
              </p>
            </div>
            <div className='profile__info-group'>
              <h3 className='profile__info-number'>+7</h3>
              <p className='profile__info-description'>
                Completed <br /> projects
              </p>
            </div>
            <div className='profile__info-group'>
              <h3 className='profile__info-number'>9</h3>
              <p className='profile__info-description'>
                on ging <br /> projects
              </p>
            </div>
          </div>

          <div className='profile__buttons'>
            <a
              download=''
              href='asset/resume_Tanvir_Hussain_2022 .pdf'
              className='button'
            >
              Download CV <i className='ri-download-line'></i>
            </a>

            <div className='profile__buttons-small'>
              <a
                href='https://web.whatsapp.com/'
                target='_blank'
                class='button button__small button__gray'
              >
                <i className='ri-whatsapp-line'></i>
              </a>

              <a
                href='https://m.me/bedimcode'
                target='_blank'
                className='button button__small button__gray'
              >
                <i className='ri-messenger-line'></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <Main></Main>
    </div>
  )
}

export default profile_data
