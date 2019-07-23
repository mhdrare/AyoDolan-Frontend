
import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/screen/main';
import Categories from './src/screen/categories';
import Details from './src/screen/detail';
import SingleTransact from './src/screen/singleTransact';
import SingleTrip from './src/screen/singleTripList';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';

export default class App extends Component{
  render() {
    return (
      <Fragment>
        {/* <Main/> */}
        {/* <Categories /> */}
        {/* <Details /> */}
        {/* <SingleTransact /> */}
        {/* <SingleTrip /> */}
        <Login/>
      </Fragment>
    );
  }
}

