'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import SearchTextBox from '../components/searchcomponents/SearchTextBox'
import CategoryOption from '../components/searchcomponents/CategoryOption'
import DistanceOption from '../components/searchcomponents/DistanceOption'
import SearchButton from '../components/searchcomponents/SearchButton'
import SearchResults from '../components/searchcomponents/SearchResults'



class SearchScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>SearchScreen</Text>
          <SearchTextBox searchTerm={this.props.search.searchTerm}/>
          <CategoryOption searchCategory={this.props.search.searchCategory}/>
          <DistanceOption searchDistance={this.props.search.searchDistance}/>
          <SearchButton />
          <SearchResults searchResults={this.props.search.searchResults}/>
        </View>

    )
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

export default connect(mapStateToProps)(SearchScreen)
