import React from 'react';
import styles from './OneElemForWrapper.module.css';
import data from '../../data.json';
import ChildElem from '../ChildElem/ChildElem';

export interface Idata {
  title: string;
  path: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

const OneElemForWrapper: React.FC = () => {
  const typedData: Idata[] = data as Idata[];

  const [status, setStatus] = React.useState<string>('Weekly');

  return (
    <div className={styles.gridElem}>
      <div className={styles.itemMain}>
        <div className={styles.childDiv}></div>
        <div className={styles.childNumberTwoDiv}>
          <span
            onClick={() => {
              setStatus('Daily');
            }}
            style={{
              color: status === 'Daily' ? 'white' : 'hsl(236, 100%, 87%)',
            }}
          >
            Daily
          </span>
          <span
            onClick={() => {
              setStatus('Weekly');
            }}
            style={{
              color: status === 'Weekly' ? 'white' : 'hsl(236, 100%, 87%)',
            }}
          >
            Weekly
          </span>
          <span
            onClick={() => {
              setStatus('Monthly');
            }}
            style={{
              color: status === 'Monthly' ? 'white' : 'hsl(236, 100%, 87%)',
            }}
          >
            Monthly
          </span>
        </div>
      </div>

      {typedData.map((elem, id) => (
        <div key={id} className={`${styles.item} ${styles[elem.title]}`}>
          <ChildElem {...elem} status={status} />
        </div>
      ))}
    </div>
  );
};

export default OneElemForWrapper;
