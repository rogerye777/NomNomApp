'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StatusBar from '../components/StatusBar'
import Tabs from '../navigation/Router'

class HomeContainer extends Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar />
          <Tabs />

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
  },
})

export default HomeContainer
