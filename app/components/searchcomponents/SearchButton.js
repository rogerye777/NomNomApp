'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

class SearchButton extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Button
//            onPress= {}
            title="Search"
            backgroundColor="orange"
            raised
          />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

export default SearchButton
