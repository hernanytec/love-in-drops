//#ff00cb
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/Login'
import Signup from './screens/Signup'
import ForgotPass from './screens/ForgotPass'
import Profile from './screens/Profile'
import Home from './screens/Home'
import Questions from './screens/Questions'
import Tips from './screens/Tips'
import BreastFeed from './screens/BreastFeed'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        BreastFeed,
        Questions,
        Tips,
        Profile,
        ForgotPass,
        Signup,
    })
)


export default Routes