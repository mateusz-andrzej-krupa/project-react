import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }
    
    static defaultProps = { 
        title: <h3>card_name</h3>
    }

    render(props) {
        return (
            <section className={styles.component}>
                <p className={styles.component}>{this.props.card}</p>
            </section>
        ) 
    }
}

export default Card; 