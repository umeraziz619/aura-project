import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN } from '../enums/AppEnums';
import HomeScreen from '../screens/usertab/HomeScreen';
import OrderScreen from '../screens/usertab/OrderScreen';
import AddScreen from '../screens/usertab/AddScreen';
import MessageScreen from '../screens/usertab/MessageScreen';
import ProfileScreen from '../screens/usertab/ProfileScreen';
import {
  HomePurple,
  HomeIcon,
  OrderPurple,
  OrderIcon,
  PlusIcon,
  MessageIcon,
  MessagePurple,
  ProfileIcon,
  ProfilePurple,
  Plus_purple,
} from '../assests/svg';
import { COLOR, SVGSIZE, hp } from '../enums/StyeGuide';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: SCREEN.HOMESCREEN,
    component: HomeScreen,
    label: 'Home',
    iconFocused: <HomePurple />,
    iconUnfocused: <HomeIcon height={SVGSIZE.md} width={SVGSIZE.md} />,
  },
  {
    name: SCREEN.ORDERSREEN,
    component: OrderScreen,
    label: 'Order',
    iconFocused: <OrderPurple />,
    iconUnfocused: <OrderIcon height={SVGSIZE.md} width={SVGSIZE.md} />,
  },
  {
    name: SCREEN.ADDSCREEN,
    component: AddScreen,
    label: '',
    iconFocused: <Plus_purple style={{ marginBottom: hp(2) }} height={SVGSIZE.elg} width={SVGSIZE.elg} />,
    iconUnfocused: <Plus_purple style={{ marginTop: hp(2) }} height={40} width={40} />,
  },
  {
    name: SCREEN.MESSAGESCREEN,
    component: MessageScreen,
    label: 'Message',
    iconFocused: <MessagePurple />,
    iconUnfocused: <MessageIcon height={SVGSIZE.md} width={SVGSIZE.md} />,
  },
  {
    name: SCREEN.PROFILESCREEN,
    component: ProfileScreen,
    label: 'Profile',
    iconFocused: <ProfilePurple />,
    iconUnfocused: <ProfileIcon height={SVGSIZE.md} width={SVGSIZE.md} />,
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarHideOnKeyboard: true, headerShown: false }}
    >
      {tabScreens.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            tabBarIcon: ({ focused, color, size }) =>
              focused ? tab.iconFocused : tab.iconUnfocused,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;




// import React from 'react';
// // import { COLORS,FONTSIZE,SPACING } from '../theme/theme'
// import {StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SCREEN} from '../enums/AppEnums';
// import HomeScreen from '../screens/UserTab/HomeScreen';
// import OrderScreen from '../screens/UserTab/OrderScreen';
// import AddScreen from '../screens/UserTab/AddScreen';
// import MessageScreen from '../screens/UserTab/MessageScreen';
// import ProfileScreen from '../screens/UserTab/ProfileScreen';
// import {
//   HomePurple,
//   HomeIcon,
//   OrderPurple,
//   OrderIcon,
//   PlusIcon,
//   MessageIcon,
//   MessagePurple,
//   ProfileIcon,
//   ProfilePurple,
//   Plus_purple,
// } from '../assests/svg';
// import { SVGSIZE, hp} from '../enums/StyeGuide';
// // import TabIcons from '../components/TabIcons'

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}
//       >
//       <Tab.Screen
//         name={SCREEN.HOMESCREEN}
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({focused, color, size}) =>
//             focused ? <HomePurple /> : <HomeIcon height={SVGSIZE.md} width={SVGSIZE.md} />,
//         }}
//       />
//       <Tab.Screen
//         name={SCREEN.ORDERSREEN}
//         component={OrderScreen}
//         options={{
//           tabBarLabel: 'Order',
//           tabBarIcon: ({focused, color, size}) =>
//             focused ? <OrderPurple /> : <OrderIcon height={SVGSIZE.md} width={SVGSIZE.md} />,
//         }}
//       />
//       <Tab.Screen
//         name={SCREEN.ADDSCREEN}
//         component={AddScreen}
//         options={({ route }) => ({
//             tabBarLabel: "", // Hide the label for this screen
//             tabBarIcon: ({ focused }) => (focused ? <Plus_purple style={{marginBottom:hp(2)}} height={SVGSIZE.elg} width={SVGSIZE.elg} /> :<Plus_purple style={{marginTop:hp(2)}} height={40} width={40} />),
//           })}
//       />
//       <Tab.Screen
//         name={SCREEN.MESSAGESCREEN}
//         component={MessageScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({focused, color, size}) =>
//             focused ? (
//               <MessagePurple />
//             ) : (
//               <MessageIcon height={SVGSIZE.md} width={SVGSIZE.md} />
//             ),
//         }}
//       />
//       <Tab.Screen
//         name={SCREEN.PROFILESCREEN}
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({focused, color, size}) =>
//             focused ? (
//               <ProfilePurple />
//             ) : (
//               <ProfileIcon height={SVGSIZE.md} width={SVGSIZE.md} />
//             ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({});

// export default TabNavigator;
