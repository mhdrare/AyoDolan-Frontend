import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "../screens/Login";
import ForgetPassword from "../screens/ForgetPassword";
import Register from "../screens/Register";
import authCheck from "../screens/authCheck";
import Home from '../screens/main';
import Categories from '../screens/categories';
import Details from '../screens/detail';
import SingleTransact from '../screens/singleTransact';
import SingleTrip from '../screens/singleTripList';

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
    SingleTransact,
    SingleTrip,
    Login
}, {
	initialRouteName: 'Home',
	headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	AuthCheck: authCheck,
	Home: HomeNavigator
},{
	initialRouteName: 'AuthCheck',
})

export default createAppContainer(SwitchNavigator);