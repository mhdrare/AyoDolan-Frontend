import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "../screens/Login";
import ForgetPassword from "../screens/ForgetPassword";
import Register from "../screens/Register";
import AuthCheck from "../screens/authCheck";
import Home from '../screens/main';
import Categories from '../screens/categories';
import Details from '../screens/detail';
import DetailPackage from '../screens/DetailPackage';
import ViewAllDestination from '../screens/ViewAllDestination';
import SingleTransact from '../screens/singleTransact';
import ListPaketWisata from '../screens/ListPaketWisata';
import SingleTrip from '../screens/singleTripList';
import userProfile from '../screens/userProfile';

const AuthNavigator = createStackNavigator({
	Login,
	ForgetPassword,
	Register,
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
	Home,
    Categories,
    Details,
    DetailPackage,
    SingleTransact,
    ListPaketWisata,
    ViewAllDestination,
    SingleTrip,
	userProfile,
    AuthCheck,
}, {
	initialRouteName: 'Home',
	headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	AuthCheck: AuthCheck,
	Home: HomeNavigator
},{
	initialRouteName: 'AuthCheck',
})

export default createAppContainer(SwitchNavigator);