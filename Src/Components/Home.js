import React from 'react';
import {
    View, Text, Button
  } from 'react-native';

//Home 컴포넌트
const Home = ({ navigation }) => {
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="채팅 화면으로"
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    );
  };

  export default Home;