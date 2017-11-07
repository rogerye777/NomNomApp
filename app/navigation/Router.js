'use strict'
import React, { Component } from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator, TabRouter } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import SearchScreen from '../screens/SearchScreen'
import UserScreen from '../screens/UserScreen'

const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-search' : 'ios-search-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      tabBarLabel: 'User',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      ),
    },
  },
})

export default Tabs
