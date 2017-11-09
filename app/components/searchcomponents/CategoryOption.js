'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as searchActions from '../../actions/searchActions'


class CategoryOption extends Component {
  constructor(props) {
   super(props);
 }

  render() {
    return (
        <View style={styles.container}>
          <Dropdown
             value={this.props.searchCategory}
             label='Category'
             data={categoryOptions}
             onChangeText={(category) => this.props.changeSearchCategory(category)}
           />
          <Text>{this.props.searchCategory}</Text>
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
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

const categoryOptions = [
  {label: 'All', value: 'restaurants'},
  {label: 'Chinese', value: 'chinese'},
  {label: 'Japanese', value: 'japanese'},
]

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOption)
