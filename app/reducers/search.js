import * as types from '../actions/types'


export function search(state = {
  searchTerm: "",
  searchCategory: "restaurants",
  searchDistance: "3000",
  searchResults: [],
  isFetching: false,
  error: false
}, action) {
  switch (action.type) {

    case types.FETCHING_SEARCHRESULTS:
      return {
        ...state,
        isFetching: true,
        searchResults: []
      }
    case types.FETCHING_SEARCHRESULTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchResults: action.searchResults
      }
    case types.FETCHING_SEARCHRESULTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
      case types.CHANGE_SEARCH_CATEGORY:
        return {
          ...state,
          searchCategory: action.searchCategory
        }
      case types.CHANGE_SEARCH_DISTANCE:
        return {
          ...state,
          searchDistance: action.searchDistance
      }
      case types.CHANGE_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.searchTerm
      }
    default:
      return state

  }
}
