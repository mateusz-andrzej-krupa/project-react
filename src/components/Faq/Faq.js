import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';
import styles from './Faq.scss';


const Faq = () => (
  <Container>
    <div className={styles.component}>
      <h1 className={styles.title}>{faq.title}</h1>
      <h2 className={styles.subtitle}>{faq.subtitle}</h2>
      <Hero 
        imageURL={faq.image} 
        text={faq.text}
      />
    </div>
  </Container>
);

export default Faq;