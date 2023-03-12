import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '@features/home/screens/home-screen';

const Root = createNativeStackNavigator();

// TODO: Type stack navigation properly
// TODO: Add path aliases

export function RootNavigator(): JSX.Element {
  return (
    <Root.Navigator>
      <Root.Screen name="Home" component={HomeScreen} />
    </Root.Navigator>
  );
}
