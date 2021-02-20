import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCards: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);