'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class UserScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>UserScreen</Text>
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

export default UserScreen
