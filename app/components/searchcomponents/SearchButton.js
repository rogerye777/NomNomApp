'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as searchActions from '../../actions/searchActions'

class SearchButton extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Button
           onPress= {() => this.props.fetchSearchResults()}
            title="Search"
            backgroundColor="orange"
            raised
          />
        </View>

    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(searchActions, dispatch)
}

function mapStateToProps() {
  return {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchButton)
