import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
    static propTypes = {
      children: PropTypes.node,
    }
    
    static defaultProps = { 
      children: <p>children</p>,
    }

    render() {
      const {children} = this.props;
      return (
        <section className={styles.component}>
          <div className={styles.component}>{children}</div>
        </section>
      ); 
    }
}

export default Container; 