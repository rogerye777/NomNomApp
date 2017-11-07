'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'


class SearchTextBox extends Component {
  constructor(props) {
   super(props);
   this.state = {
     searchText: ""
   }
 }

  render() {
    return (
        <View style={styles.container}>
          <SearchBar
            lightTheme
            value = {this.state.searchText}
            onChangeText = {(searchText) => this.setState({searchText})}
            placeholder = 'Search'
            clearIcon
          />
          <Text>{this.state.searchText}</Text>
          {console.log(this.state.searchText)}
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

export default SearchTextBox
