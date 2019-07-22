
import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/screen/main';
import Categories from './src/screen/categories';

export default class App extends Component
{
  render() 
  {
    return (
      <Fragment>
        {/* <Main/> */}
        <Categories />
      </Fragment>
    );
  }
}

