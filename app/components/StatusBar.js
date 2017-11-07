'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'

class StatusBar extends Component {
  render() {
    return (
        <View style={styles.statusbar}>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  statusbar: {
    height: 20,
    backgroundColor: "grey"
  },
})

export default StatusBar
