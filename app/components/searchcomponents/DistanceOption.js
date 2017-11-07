'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'


class DistanceOption extends Component {
  constructor(props) {
   super(props);

   this.state = { distance: '30'};
 }

  render() {
    return (
        <View style={styles.container}>
           <Dropdown
              value={this.state.distance}
              label='Distance'
              data={distanceOptions}
              onChangeText={(distance) => this.setState({distance})}
            />
            <Text>{this.state.distance}</Text>
        </View>

    )
  }
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
  {value: '30', label: 'All'},
  {value: '2', label: '2 km'},
  {value: '5', label: '5 km'},
]

export default DistanceOption
