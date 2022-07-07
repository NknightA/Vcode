import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
        <View style={styles.container2}>
          
          <View style={styles.Object2}>
          <Button
            title="Home画面に遷移する"
            onPress={() => {
            navigation.navigate('Detail');
          }}
          />
             <View style={styles.container2}>
             <Button
              title="Home画面に遷移する"
              onPress={() => {
            navigation.navigate('Detail');
          }}
          />
          </View>
          </View>
          
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  container2:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  Object2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    padding:10
  },

});

export default HomeScreen;