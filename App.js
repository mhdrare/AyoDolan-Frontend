
import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/screen/main';
import Categories from './src/screen/categories';
import Details from './src/screen/detail';
import SingleTransact from './src/screen/singleTransact';
import SingleTrip from './src/screen/singleTripList';
export default class App extends Component
{
  render() 
  {
    return (
      <Fragment>
        {/* <Main/> */}
        {/* <Categories /> */}
        {/* <Details /> */}
        {/* <SingleTransact /> */}
        <SingleTrip />
      </Fragment>
    );
  }
}

