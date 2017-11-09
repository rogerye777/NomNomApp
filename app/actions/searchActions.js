'use strict'

import * as types from './types'
import YelpApi from 'v3-yelp-api'


// export function fetchRestaurantsFromAPI() {
//   return (dispatch) => {
//     dispatch(getSearchTerm(searchTerm))
//     dispatch(getSearchCategory(searchCategory))
//     dispatch(getSearchDistance(searchDistance))
//     dispatch(getSearchResults())
//     fetch('https://swapi.co/api/people/')
//     .then(res => res.json())
//     .then(json => dispatch(getRestaurantsSuccess(json.results)))
//     .catch(err => dispatch(getRestaurantsFailure(err)))
//   }
// }


//const token = "VnpkZ1I21hhrWfwQff1CCQOUeLD4QDibfQ_7FhYG6yN5GC7EAJVxYCpZd6r-MQK7L2HJpNwR4_7MjBlhatKrSh8nOJyRte4R7BG7vBbaA03a4dq0C2u6Z1MuN6v6WXYx"


const credentials = {
  appId: "F_f6x02waoKIEvXo1pt8VQ",
  appSecret: "eU4DgzsS8yyZKM8tZzuA2CDM6joHUgx1yBo1fNwSEBFpPhs4jcbWA4nOOJvgns8u"
}

const yelp = new YelpApi(credentials)

export function fetchSearchResults() {
  return (dispatch, getState) => {
    const searchState = getState().search
    dispatch(getSearchResults())
    yelp.search({
      location: 'vancouver',
      term: searchState.searchTerm,
      categories: searchState.searchCategory,
      radius: searchState.searchDistance
    })
    .then((response) => {
      console.log(response)
      dispatch(getSearchResultsSuccess(response.businesses))
    })
    .catch((error) => {
      console.log(error)
      dispatch(getSearchResultsFailure())
    })
  }
}

function getSearchResults() {
  return {
    type: types.FETCHING_SEARCHRESULTS
  }
}

function getSearchResultsSuccess (searchResults) {
  return {
    type: types.FETCHING_SEARCHRESULTS_SUCCESS,
    searchResults
  }
}

function getSearchResultsFailure() {
  return {
    type: types.FETCHING_SEARCHRESULTS_FAILURE
  }
}

export function changeSearchCategory(searchCategory) {
  return {
    type: types.CHANGE_SEARCH_CATEGORY,
    searchCategory
  }
}

export function changeSearchTerm(searchTerm) {
  return {
    type: types.CHANGE_SEARCH_TERM,
    searchTerm
  }
}

export function changeSearchDistance(searchDistance) {
  return {
    type: types.CHANGE_SEARCH_DISTANCE,
    searchDistance
  }
}
