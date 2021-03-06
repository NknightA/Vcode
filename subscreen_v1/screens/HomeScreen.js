import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity , ScrollView} from 'react-native';
//prottype positioning
//Accunt Button

const HomeScreen = ({navigation}) => {

  return (
  <ScrollView style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.text_title}>V</Text>
      <Text style={styles.text_title}>My dev</Text>
        <View style={styles.Accunt_aera}>
           <TouchableOpacity style={styles.AccountIconButton}
                              onPress = {() => {navigation.navigate('Account');}}>
             <Text>Accunt</Text>
           </TouchableOpacity>

           <Text style={styles.text_text}>aaaa</Text>

           <View style={styles.inner_container1}>
            <TouchableOpacity style={styles.MenuButton1}>
              <Text>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton1}>
              <Text>aaa</Text>
            </TouchableOpacity>
           </View>  

           
           <Text style={styles.text_text}>aaaa</Text>

           <View style={styles.inner_container2}>
           <TouchableOpacity style={styles.MenuButton1}>
              <Text>aaa</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton1}>
              <Text>aaa</Text>
            </TouchableOpacity>
           </View>  
        </View>

        <View style={styles.Accunt_aera2}>
          
        </View>
    </View>

    <View style={styles.container2}>
      <View style={styles.Button_aera}>
        <View style={styles.inner_container3}>
          <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton2}>
            <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inner_container4}>
            <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MenuButton2}>
              <Text style={styles.text_button}>aaa</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  text_title : {
    color: '#000',
    fontSize : 50,
  },

  text_text : {
    color: 'white',
    fontSize : 20,
  },

  container2: {
    backgroundColor: '#FFF',
    marginTop: 30,
    alignItems : 'center'
  },

  inner_container1 : {
    width : '90%',
    height : 50 ,
    backgroundColor : '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  inner_container2 : {
    width : '90%',
    height : 50 ,
    backgroundColor : '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  inner_container3 : {
    marginTop: 20,
    width : '90%',
    height : 50 ,
    backgroundColor : '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  inner_container4 : {
    marginTop: 40,
    width : '90%',
    height : 50 ,
    backgroundColor : '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  
  container_status : {
    flex: 0.25,
    width: '90%',
    backgroundColor: 'skyblue' ,
    margin: 10

  },  
  
  Accunt_aera: {
    marginTop: 10 ,
    width : '90%',
    height: 280,
    backgroundColor: 'white' ,
    alignItems: 'center'
  },

  Accunt_aera2: {
    marginTop: 20 ,
    width : '90%',
    height: 180,
    backgroundColor: 'skyblue' ,
    alignItems: 'center'
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
    marginTop: 10
  },
  
  MenuButton1: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    elevation: 2,
    position: 'relative',
    borderRadius:5,
    marginLeft : 20,
    marginRight : 20,
  },
  
  MenuButton2: {
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    elevation: 2,
    position: 'relative',
    borderRadius:5,
    marginLeft : 10,
    marginRight : 10,
  },

  text_button : {
    color: 'black'
  },

    Button_aera: {
    marginTop: 20 ,
    width : '90%',
    height: 180,
    backgroundColor: '#FFF' ,
    alignItems: 'center',
    
  },
});

export default HomeScreen;
