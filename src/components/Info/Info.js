import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <div className={styles.component}>
      <h1 className={styles.title}>{info.title}</h1>
      <h2 className={styles.subtitle}>{info.subtitle}</h2>
      <Hero 
        imageURL={info.image} 
        text={info.text}
      />
    </div>
  </Container>
);

export default Info;