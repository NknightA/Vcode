import React from 'react';
import {StyleSheet, View, Text, Button, Touchable} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <Button
        title="Home画面に遷移する"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;