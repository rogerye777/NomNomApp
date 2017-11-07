'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RandomSearchButton from '../components/homecomponents/RandomSearchButton'
import DistanceSelector from '../components/homecomponents/DistanceSelector'

class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>HomeScreen</Text>
            <RandomSearchButton />
            {/* <DistanceSelector /> */}
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  }
})

export default HomeScreen
