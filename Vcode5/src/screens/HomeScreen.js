import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import DetailScreen from './DetailScreen';

//prottype positioning
//Accunt Button

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      
      <View style={styles.containerBox1}>
        <Text style={styles.Text_l}>Hello! Developer!</Text>
        <View style={styles.AccoutButton}>
        <View style={styles.Button}>
            <TouchableOpacity style={styles.AccountIconButton}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   
            
        </View>
        <View style={styles.ButtonBox}>
            
            
            <View style={styles.Button2}>
            <TouchableOpacity style={styles.ButtonText3}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   

            <View style={styles.Button2}>
            <TouchableOpacity style={styles.ButtonText3}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   
          
        
      </View>   

      <View style={styles.ButtonBox}>
            
            
            <View style={styles.Button2}>
            <TouchableOpacity style={styles.ButtonText3}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   

            <View style={styles.Button2}>
            <TouchableOpacity style={styles.ButtonText3}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   
          
        
      </View>   
      <View style={styles.ButtonBox}>
            
            
            <View style={styles.Button2}>
            <TouchableOpacity style={styles.ButtonText3}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   

            <View style={styles.Button2}>
            <TouchableOpacity style={styles.ButtonText3}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   
          
        
      </View>

        <View style={styles.ButtonBox3}>
            
            
            <View style={styles.Button4}>
            <TouchableOpacity style={styles.ButtonText4}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   

            <View style={styles.Button4}>
            <TouchableOpacity style={styles.ButtonText4}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>  
        
      </View> 

        <View style={styles.ButtonBox4}>
            <View style={styles.Button4}>
            <TouchableOpacity style={styles.ButtonText4}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>   

            <View style={styles.Button4}>
            <TouchableOpacity style={styles.ButtonText4}>
              <Text>aaa</Text>
            </TouchableOpacity>        
            </View>  
        
      </View>        
      </View>
  </View>       
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 30
  },

  containerBox1 : {
    flex: 0.5,
    backgroundColor: 'black',
    alignItems : 'center',
  },

  ButtonBox:{
    width : '70%',
    flexDirection: 'row',
    alignItems : 'flex-end',
    justifyContent : 'center',
    height : 45,
    borderRadius: 5,
  },

  AccoutButton:{
    marginTop: 10,
    width : '100%',
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center',
    padding :10
  },

  ButtonBox2:{
    margin: 50,
    width : '100%',
    alignItems : 'center',
    paddingLeft :30,
    paddingRight :30,
  },

  ButtonBox3:{
    marginTop : 20 ,
    width : '100%',
    alignItems : 'center',
    justifyContent: 'center' ,
    flexDirection: 'row',
  },

  ButtonBox4:{
    marginTop : 10 ,
    width : '100%',
    alignItems : 'center',
    justifyContent: 'center' ,
    flexDirection: 'row',
  },

  Button: {
    margin : 10
  },
  
  Button2: {
    padding :10 
  },

  Button3: {
    width: 200,
    padding: 10 
  },

  Button4: {
    padding :10 ,
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
  
  ButtonText2: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    height: 100,
    elevation: 2,
    position: 'relative',
    borderRadius:10,
    
  },

  ButtonText3: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    height: 35,
    elevation: 2,
    position: 'relative',
    borderRadius:5,
  },

  ButtonText4: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    height: 150,
    elevation: 2,
    position: 'relative',
    borderRadius:3,
    
  },


  Text_l : {
    color: 'white',
    fontSize: 40 ,
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