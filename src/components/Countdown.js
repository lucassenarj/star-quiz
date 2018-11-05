import React from 'react';
import Countdown from 'react-countdown-now';
import { AccessAlarms } from '@material-ui/icons';
import Score from './Score';

const renderer = ({ minutes, seconds, completed }) => {
  if(completed) {
    // return 'dasdas';
    return <Score gameFinished={true} />
  }
  return (
    <div>
      <AccessAlarms />
      <span>{minutes}:{seconds}</span>
    </div>
  )
}

const CountdownComponent = () => (
  <Countdown
    date={Date.now() + 120000}
    renderer={renderer}
  />
);

export default CountdownComponent;