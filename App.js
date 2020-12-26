import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs'
import Instagram from './screens/in'
import Facebook from './screens/fb'

export default class App extends React.Component {
  render(){
  return (


      <A/>

  );}
}
const T = createBottomTabNavigator({
  Instagram:{screen:Instagram},
  Facebook:{screen:Facebook}
})
const A = createAppContainer(T)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});