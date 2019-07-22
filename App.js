
import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/screen/main';
import Categories from './src/screen/categories';
import Details from './src/screen/detail';

export default class App extends Component
{
  render() 
  {
    return (
      <Fragment>
        {/* <Main/> */}
        {/* <Categories /> */}
        <Details />
      </Fragment>
    );
  }
}

