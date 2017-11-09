'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as searchActions from '../../actions/searchActions'

class DistanceOption extends Component {
  constructor(props) {
   super(props);

 }

  render() {
    return (
        <View style={styles.container}>
           <Dropdown
              value={this.props.searchDistance}
              label='Distance'
              data={distanceOptions}
              onChangeText={(distance) => this.props.changeSearchDistance(distance)}
            />
            <Text>{this.props.searchDistance}</Text>
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
    backgroundColor: 'teal',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})


const distanceOptions = [
  {label: 'All', value: '3000' },
  {label: '2 km', value: '200' },
  {label: '5 km', value: '500' },
]

export default connect(mapStateToProps, mapDispatchToProps)(DistanceOption)
