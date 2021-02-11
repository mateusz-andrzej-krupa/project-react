import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js'
import Icon from '../Icon/Icon'
import {settings} from '../../data/dataStore';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }
    
    static defaultProps = { 
        title: <h3>column_name</h3>
    }

/* 1. save cardValue to new state  */
    addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: cards,
              }
            ]
          } 
        ));
    }

    render(props) {
        return (
            <section className={styles.component}>
                <Icon name={settings.props.name} />
                <h3 className={styles.title}>
                    <span className={styles.icon}>{this.props.title} 
                    {this.props.icon}
                    </span>
                    {this.props.title}
                </h3>

{/* 2. render new Card compomonents from state of column */}
                <div className={styles.cards}>
                    {this.state.cards.map(({key, ...cardProps}) => (
                        <Card key={key} {...cardProps} />
                    ))}
                </div>

{/* 3. add new cards to comoponent column */}
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                </div> 

            </section>

            
        )
    }
}

export default Column;