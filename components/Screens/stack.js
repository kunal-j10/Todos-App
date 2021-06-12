import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddLineup from "./AddLineup";
import Home from './Home';

const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            header:null
        }
    },
    AddLineup:{
        screen: AddLineup,
        navigationOptions:{
            header:null
        }
    }
}

const homeStack =createStackNavigator(screens);
export default createAppContainer(homeStack);