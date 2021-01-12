import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        titleCol: PropTypes.string,
    }
    
    static defaultProps = {
        titleCol: <h3>test</h3>
    }

    render(props) {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.titleCol}</h3>
            </section>
        )
    }
}

export default Column;