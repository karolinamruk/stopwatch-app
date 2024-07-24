import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const ms = milliseconds % 1000;
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms
      .toString()
      .padStart(3, '0')}`;
  };

  return <div className={styles.component}>{formatTime(time)}</div>;
};

export default FormattedTime;
