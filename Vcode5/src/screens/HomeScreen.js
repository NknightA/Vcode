import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import DetailScreen from './DetailScreen';



const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      
      <View style={styles.containerBox1}>
        <Text style={styles.Text_l}>Hello! Developer!</Text>
      <View style={styles.ButtonBox}>
          <View style={styles.Button}>
            <Button
                title="aaa"
                onPress={() => {
                navigation.navigate('Detail');
               }}
             />
            </View>

            <View style={styles.Button}>

              <Button
                title="bbb"
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

  containerBox1 : {
    flex: 0.5,
    backgroundColor: 'black',
    alignItems : 'center'
  },

  ButtonBox:{
    marginTop: 10,
    width : '100%',
    flexDirection: 'row',
    alignItems : 'center',
    backgroundColor :'skyblue',
  },

  Button : {
    width: 100,
    height : 200,
    margin : 10,
  },

  Text_l : {
    color: 'white',
    fontSize: 24 ,
  },

  Text_m : {
    color: 'white',
  },

  Text_s : {
    color: 'white',
  },

  header: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
  },

});

export default HomeScreen;