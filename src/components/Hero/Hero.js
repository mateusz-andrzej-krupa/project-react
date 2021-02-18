import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>     
    <h3 className={styles.title}>{ReactHtmlParser(props.subTitleText)}</h3>
    <img className={styles.image} src={props.imageURL}></img>
    <p className={styles.txt}>{ReactHtmlParser(props.text)}</p>
  </header>
);
Hero.propTypes = {
  titleText: PropTypes.string.isRequired,
  subTitleText: PropTypes.string,
  text: PropTypes.string,
  imageURL: PropTypes.node,
};

export default Hero;