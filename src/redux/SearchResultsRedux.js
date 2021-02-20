// selectors
export const getSearchResults = ({searchResults}) => searchResults;
export const countVisibleCards = ({cards, searchResults}) => cards.filter(card => new RegExp(searchResults, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchResults';
const createActionName = name => `app/${reducerName}/${name}`; 

// actions types
export const SEARCH_RESULTS = createActionName('SEARCH_RESULTS');

// action creators
export const createActionSearchResults = payload => ({ payload, type: SEARCH_RESULTS });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.payload;
    default:
      return statePart;
  }
}