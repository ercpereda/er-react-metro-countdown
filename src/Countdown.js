import React from 'react';
import classnames from 'classnames';
import styles from './Countdown.less';

class Countdown extends React.Component {

  static toDigit(n) {
    return n < 10 ? `0${n}` : `${n}`;
  }

  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      tick: false
    };

    this.init.bind(this)();

    this.timerInterval = setInterval(this.timer.bind(this), 1000);
    this.blinkInterval = setInterval(
        () => this.setState(previousState => ({ tick: !previousState.tick }))
        , 500);
  }

  init() {
    this.alarmOn = new Date();
    if (this.props.stop) {
      this.alarmOn = new Date(this.props.stop);
    }
    if (this.props.days) {
      if (typeof this.alarmOn === 'object') {
        this.alarmOn = this.alarmOn.getTime();
      }
      this.alarmOn += this.props.days * 24 * 60 * 60 * 1000;
    }
    if (this.props.days) {
      if (typeof this.alarmOn === 'object') {
        this.alarmOn = this.alarmOn.getTime();
      }
      this.alarmOn += this.props.hours * 60 * 60 * 1000;
    }
    if (this.props.minutes) {
      if (typeof this.alarmOn === 'object') {
        this.alarmOn = this.alarmOn.getTime();
      }
      this.alarmOn += this.props.minutes * 60 * 1000;
    }
    if (this.props.secons) {
      if (typeof this.alarmOn === 'object') {
        this.alarmOn = this.alarmOn.getTime();
      }
      this.alarmOn += this.props.secons * 1000;
    }
  }

  timer() {
    let left;

    left = Math.max(0, Math.floor((this.alarmOn - new Date()) / 1000));
    const d = Math.floor(left / (24 * 60 * 60));
    left -= d * 24 * 60 * 60;
    this.setState({ days: Countdown.toDigit(d) });

    if (d === 0) {
      // disable days
    }

    const h = Math.floor(left / (60 * 60));
    left -= h * 60 * 60;
    this.setState({ hours: Countdown.toDigit(h) });

    if (d === 0 && h === 0) {
      // disable hours
    }

    const m = Math.floor(left / 60);
    left -= m * 60;
    this.setState({ mins: Countdown.toDigit(m) });

    if (d === 0 && h === 0 && m === 0) {
      // disable minutes
    }

    const s = left;
    this.setState({ secs: Countdown.toDigit(s) });

    if (this.props.onTick) {
      this.props.onTick(d, h, m, s);
    }

    if (d === 0 && h === 0 && m === 0 && s === 0) {
      if (this.props.onStop) {
        this.props.onStop();
      }
      this.stop();
    }
  }

  stop() {
    clearInterval(this.blinkInterval);
    clearInterval(this.timerInterval);
  }

  render() {
    const countdownClasses = classnames(styles.countdown, { [styles.tick]: this.state.tick });
    const daysClasses = classnames(styles.part, styles.days, );
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
  days: React.PropTypes.number,
  hours: React.PropTypes.number,
  minutes: React.PropTypes.number,
  secons: React.PropTypes.number,
  stop: React.PropTypes.instanceOf(Date),
  onStop: React.PropTypes.func,
  onTick: React.PropTypes.func
};

Countdown.defaultProps = {
  days: 0,
  hours: 0,
  minutes: 0,
  secons: 0
};

export default Countdown;
