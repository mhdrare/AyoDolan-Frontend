/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';
import ListPaketWisata from './src/screens/ListPaketWisata';
import DetailPackage from './src/screens/DetailPackage';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ListPaketWisata/>
    );
  }
}