'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class RandomSearchButton extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Button
//            onPress= {}
            title="Random Search"
            color="orange"
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

export default RandomSearchButton
