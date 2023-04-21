import styles from './Wrapper.module.css';
import OneElemForWrapper from '../OneElemForWrapper/OneElemForWrapper';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <OneElemForWrapper />
    </div>
  );
};

export default Wrapper;
