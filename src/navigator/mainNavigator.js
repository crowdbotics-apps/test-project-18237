import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp28581452Navigator from '../features/SignUp28581452/navigator';
import BlankScreen8381451Navigator from '../features/BlankScreen8381451/navigator';
import UserProfile78684Navigator from '../features/UserProfile78684/navigator';
import Maps78665Navigator from '../features/Maps78665/navigator';
import Settings78643Navigator from '../features/Settings78643/navigator';
import Settings78628Navigator from '../features/Settings78628/navigator';
import NotificationList78627Navigator from '../features/NotificationList78627/navigator';
import Maps78626Navigator from '../features/Maps78626/navigator';
import Settings68250Navigator from '../features/Settings68250/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
SignUp28581452: { screen: SignUp28581452Navigator },
BlankScreen8381451: { screen: BlankScreen8381451Navigator },
UserProfile78684: { screen: UserProfile78684Navigator },
Maps78665: { screen: Maps78665Navigator },
Settings78643: { screen: Settings78643Navigator },
Settings78628: { screen: Settings78628Navigator },
NotificationList78627: { screen: NotificationList78627Navigator },
Maps78626: { screen: Maps78626Navigator },
Settings68250: { screen: Settings68250Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
