
import React from 'react';
import {
    View, Text, Button
  } from 'react-native';
  
//Chat 컴포넌트
const Chat = ({ navigation }) => {
    return (
      <View>
        <Text> Chart</Text>
        <Button
          title="홈으로"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  };
  export default Chat;