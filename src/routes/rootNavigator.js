import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import Login from "../screens/Login";
import ForgetPassword from "../screens/ForgetPassword";
import Register from "../screens/Register";
import Home from "../screens/Home";
import authCheck from "../screens/authCheck";

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
	// Chat,
	// Personal,
	// Scanner
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