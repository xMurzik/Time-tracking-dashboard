import React from 'react';
import styles from './ChildElem.module.css';
import { Idata } from '../OneElemForWrapper/OneElemForWrapper';

interface infoCard extends Idata {
  status: string;
}

interface fixedData {
  current: number;
  previous: number;
  status: string;
}

const ChildElem: React.FC<infoCard> = ({ title, path, timeframes, status }) => {
  let fixedData: fixedData = {} as fixedData;

  switch (status) {
    case 'Daily':
      fixedData.current = timeframes.daily.current;
      fixedData.previous = timeframes.daily.previous;
      fixedData.status = 'Day';
      break;
    case 'Weekly':
      fixedData.current = timeframes.weekly.current;
      fixedData.previous = timeframes.weekly.previous;
      fixedData.status = 'Week';
      break;
    case 'Monthly':
      fixedData.current = timeframes.monthly.current;
      fixedData.previous = timeframes.monthly.previous;
      fixedData.status = 'Month';
      break;
    default:
      break;
  }

  return (
    <div className={styles.mainDiv}>
      <span className={`${styles.divInfo} ${styles.infoName}`}>{title}</span>
      <span className={`${styles.divInfo} ${styles.infoHours}`}>
        {fixedData.current}hrs
      </span>
      <span className={`${styles.divInfo} ${styles.infoLastHours}`}>
        Last {fixedData.status} - {fixedData.previous}hrs
      </span>
    </div>
  );
};

export default ChildElem;
