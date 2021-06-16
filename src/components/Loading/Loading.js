import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ message }) => {
  return (
    <section className="loading-message message -left">
      <i className="nes-bcrikko animate__heartBeat"></i>
      <div className="nes-balloon from-left">
        <p>
          {message}
        </p>
      </div>
    </section>
  )
}

export default Loading;

Loading.propTypes = {
  message: PropTypes.string
}