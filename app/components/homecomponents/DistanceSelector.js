'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, SegmentedControlIOS} from 'react-native'
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons'

const options = [
  {label: '5 Min Walk', value: '1'},
  {label: '5 Min Drive', value: '5'},
  {label: '15 Min Drive', value: '15'},
]

class DistanceSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: null
    }
  }


  render() {

    function setSelectedOption(option){
      console.log(option)
      this.setState({
        selectedCustomSegment: option,
      })
    }
    return (
        <View style={styles.container}>
          <SegmentedControlIOS
            values={options}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex})
            }}
          />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})



export default DistanceSelector
