import React from 'react';
import styles from './List.scss';
import Hero from "../Hero/Hero.js";
import Column from "../Column/Column.js";
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
      title: PropTypes.node.isRequired,
      children: PropTypes.node,
      image: PropTypes.string,
  }

  static defaultProps = {
      children: <p>//everything depends on menage.</p>,
  }

  render() {
    return (
      <section  className={styles.component}>
          <Hero titleText={this.props.title} imageURL={this.props.image} />
          <div className={styles.description}>
            {this.props.children}
          </div>
          <div className={styles.columns}>
              <Column titleCol='firstCol' />
              <Column titleCol='secondCol' />
              <Column titleCol='thirdCol' />
          </div>
      </section>
    )
  }
}

export default List;
