import React from 'react';

const Loading = () => {
  return (
    <section className="loading-message message -left">
      <i className="nes-bcrikko animate__heartBeat"></i>
      <div className="nes-balloon from-left">
        <p>
          Page is loading, please wait.
        </p>
      </div>
    </section>
  )
}

export default Loading;