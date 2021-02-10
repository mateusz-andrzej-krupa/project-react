import React from 'react';
import styles from './List.scss';
import Hero from "../Hero/Hero.js";
import Column from "../Column/Column.js";
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section  className={styles.component}>
          <Hero titleText={this.props.title} imageURL={this.props.image} />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>

          <div className={styles.columns}>
              <Column titleCol={'test1'} />
              <Column titleCol={'test2'} />
              <Column titleCol={'test3'} />
              
          </div>
          <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    )
  }
}

export default List;
