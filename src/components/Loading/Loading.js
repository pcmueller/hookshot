import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Loading = ({ resetData }) => {
  return (
      <Link to='/' className="loading" onClick={resetData}>
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
  )
}

export default Loading

Loading.propTypes = {
  resetError: PropTypes.func
}