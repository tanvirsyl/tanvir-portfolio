import React from "react"
import "./Main.css"
import { NavLink } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <main className='main'>
        <section className='filters container'>
          <ul className='filters__content'>
            <NavLink
              className='filters__button filter-tab-active'
              data-target='#projects'
              to='/project'
            >
              Projects
            </NavLink>

            <NavLink
              className='filters__button'
              data-target='#skills'
              to='/skill'
            >
              Skills & Education
            </NavLink>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Main
