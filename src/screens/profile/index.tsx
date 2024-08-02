import {Header} from '@components/Header';
import React from 'react';
import {Text, View} from 'react-native';

export const MyProfile = () => {
  return (
    <View style={{flex: 1}}>
      <Header centerContent={<Text>ProfileScreen</Text>} />
    </View>
  );
};
