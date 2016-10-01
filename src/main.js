import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';

const template = (
  <Countdown
    days={1}
    hours={3}
    minutes={1}
    secons={30}
    onTick={(d, h, m, s) => console.log(`${d}:${h}:${m}:${s}`)}
    onStop={() => alert('stoped')}
  />
);

ReactDOM.render(template, document.getElementById('app'));
