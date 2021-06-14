import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Loading = () => {
  return (
    <main className='entry-page shine'>
      <header className='banner'>
        <h1 className='app-title' id='app-title'>HOOKSHOT</h1>
        <h4 className='app-subtitle'>
          ~ A FIELD GUIDE FOR HYRULIAN EXPLORERS ~
        </h4>
      </header>
      <Link to='/' className="loading">
        <div className='nes-container is-rounded '>
          <section className="loading-message message -left">
            <i className="nes-bcrikko animate__heartBeat"></i>
            <div className="nes-balloon from-left">
              <p className="loading">
                Page is loading, please wait.
              </p>
            </div>
          </section>
        </div>
      </Link>
    </main>
  )
}

export default Loading

Loading.propTypes = {
  resetError: PropTypes.func
}