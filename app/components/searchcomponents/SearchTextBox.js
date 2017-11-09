'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as searchActions from '../../actions/searchActions'

class SearchTextBox extends Component {
  constructor(props) {
   super(props);

 }

  render() {
    return (
        <View style={styles.container}>
          <SearchBar
            lightTheme
            value = {this.props.searchTerm}
            onChangeText = {(searchText) => this.props.changeSearchTerm(searchText)}
            placeholder = 'Search'
            clearIcon
          />
          <Text>{this.props.searchTerm}</Text>
        </View>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchActions, dispatch)
}

function mapStateToProps() {
  return {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTextBox)
