import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity , ScrollView} from 'react-native';

//prottype positioning
//Accunt Button

const HomeScreen = ({navigation}) => {

  return (
  <ScrollView>
    <View style={styles.Accunt_aera}>

    </View>

    <View style={styles.Accunt_aera}>

    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 30
  },
  container_status : {
    flex: 0.25,
    width: '90%',
    backgroundColor: 'skyblue' ,
    margin: 10
  },  
  
  Accunt_aera: {
    marginLeft : 10 ,
    marginRight : 10,
    width :  '90%',
    height: 600,
    backgroundColor: 'skyblue' ,
  },


  AccountIconButton: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    height: 100,
    elevation: 2,
    position: 'relative',
    borderRadius:50,
    
  },
  
  ButtonText1: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    elevation: 2,
    position: 'relative',
    borderRadius:10,
    
  },

  
});

export default HomeScreen;