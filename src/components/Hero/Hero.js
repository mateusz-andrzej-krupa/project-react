import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.MyComponent}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>     
    <img className={styles.images} src={props.imageURL}></img>
  </header>
);
Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageURL: PropTypes.string,
};

export default Hero;