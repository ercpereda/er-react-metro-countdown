import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';

ReactDOM.render(<Countdown minutes={1} onStop={() => console.log('stoped')} />, document.getElementById('app'));
