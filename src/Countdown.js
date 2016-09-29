import React from 'react';
import classnames from 'classnames';
import styles from './Countdown.less';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      days: '01',
      hours: '12',
      mins: '15',
      secs: '30'
    };
  }

  render() {
    const countdownClasses = classnames(styles.countdown);
    const daysClasses = classnames(styles.part, styles.days);
    const hoursClasses = classnames(styles.part, styles.hours);
    const minutesClasses = classnames(styles.part, styles.minutes);
    const secondsClasses = classnames(styles.part, styles.seconds);
    const digitClasses = classnames(styles.digit);

    return (
      <div className={countdownClasses}>
        <div className={daysClasses}>
          <div className={digitClasses}>{this.state.days[0]}</div>
          <div className={digitClasses}>{this.state.days[1]}</div>
        </div>
        <div className={styles.divider} />
        <div className={hoursClasses}>
          <div className={digitClasses}>{this.state.hours[0]}</div>
          <div className={digitClasses}>{this.state.hours[1]}</div>
        </div>
        <div className={styles.divider} />
        <div className={minutesClasses}>
          <div className={digitClasses}>{this.state.mins[0]}</div>
          <div className={digitClasses}>{this.state.mins[1]}</div>
        </div>
        <div className={styles.divider} />
        <div className={secondsClasses}>
          <div className={digitClasses}>{this.state.secs[0]}</div>
          <div className={digitClasses}>{this.state.secs[1]}</div>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  text: React.PropTypes.string
};

export default Countdown;
