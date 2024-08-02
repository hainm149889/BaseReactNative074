/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {Text, View} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {createStyleSheet, useStyles} from '../themes';
import {APP_SCREEN} from './screen-types';
import {HomeScreen} from '@screens/home';
import {MyProfile} from '@screens/profile';

const BottomTab = createBottomTabNavigator();

const TabBarIcon = memo(
  ({
    // icon,
    text,
    focused,
  }: {
    // icon: IconTypes;
    text: string | undefined;
    focused: boolean;
  }) => {
    const {styles} = useStyles(styleSheet);

    return (
      <View style={styles.tabBarIconContainer}>
        {/* <View
          width={22}
          height={22}
          justifyContent="center"
          alignItems="center">
          <Icon
            icon={icon}
            size={focused ? 20 : 16}
            colorTheme={focused ? 'primary500' : 'neutral600'}
          />
        </View> */}
        <Text style={styles.txtBottomTab(focused)}>{text}</Text>
      </View>
    );
  },
  isEqual,
);

const BottomTabNav = memo(
  () => {
    const {styles} = useStyles(styleSheet);

    return (
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarContainer,
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: 'red',
        }}
        initialRouteName={APP_SCREEN.HOME_SCREEN}>
        <BottomTab.Screen
          name={APP_SCREEN.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon
                // icon={focused ? 'ff_rr_home_fill' : 'ff_rr_home'}
                text="Home"
                focused={focused}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={APP_SCREEN.PROFILE_SCREEN}
          component={MyProfile}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon
                // icon={focused ? 'fi_sr_search_alt' : 'fi_rr_search_alt'}
                text="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  },
  () => true,
);

export const BottomTabNavigation = () => {
  return <BottomTabNav />;
};

const styleSheet = createStyleSheet(({shadows}) => ({
  tabBarIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 4,
  },
  txtBottomTab: (focused: boolean) => ({
    color: focused ? 'red' : 'black',
  }),
  tabBarContainer: {
    alignItems: 'center',
    borderTopWidth: 0,
    backgroundColor: 'white',
    height: 50 + UnistylesRuntime.insets.bottom,
    ...shadows.main,
  },
}));
