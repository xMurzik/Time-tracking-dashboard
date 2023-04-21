import styles from './OneElemForWrapper.module.css';
import data from '../../data.json';

interface Idata {
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

const OneElemForWrapper = () => {
  const typedData: Idata[] = data as Idata[];

  return (
    <div className={styles.gridElem}>
      <div className={styles.itemMain}></div>

      {typedData.map((elem, id) => (
        <div key={id} className={`${styles.item} ${styles[elem.title]}`}></div>
      ))}
    </div>
  );
};

export default OneElemForWrapper;
