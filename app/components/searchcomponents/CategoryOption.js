'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'


class CategoryOption extends Component {
  constructor(props) {
   super(props);

   this.state = {category: 'All'}
 }

  render() {
    return (
        <View style={styles.container}>
          <Dropdown
             value={this.state.category}
             label='Category'
             data={categoryOptions}
             onChangeText={(category) => this.setState({category})}
           />
          <Text>{this.state.category}</Text>
        </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

const categoryOptions = [
  {value: 'All'},
  {value: 'Chinese'},
  {value: 'Japanese'},
]

export default CategoryOption
