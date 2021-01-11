import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.MyComponent}>
    <h2 className={styles.title}>To do list</h2>
    <img className={styles.images} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>
  </header>
);

export default Hero;