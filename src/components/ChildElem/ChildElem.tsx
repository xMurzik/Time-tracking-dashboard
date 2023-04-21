import React from 'react';
import styles from './ChildElem.module.css';
import { Idata } from '../OneElemForWrapper/OneElemForWrapper';

interface infoCard extends Idata {
  status: string;
}

const ChildElem: React.FC<infoCard> = ({ title, path, timeframes, status }) => {
  return <div className={styles.mainDiv}></div>;
};

export default ChildElem;
