
import React from 'react';
import {
    View, Text, Button
  } from 'react-native';
  
//User 컵포넌트
const User = ({ navigation }) => {
    return (
      <View>
        <Text>User</Text>
        <Button
          title="로그인 화면으로"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  };
  export default User;