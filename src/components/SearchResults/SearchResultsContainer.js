import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';
import { createActionChangeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) => dispatch(createActionChangeSearchString(newSearchString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);