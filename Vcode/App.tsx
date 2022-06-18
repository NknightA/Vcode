import { StatusBar } from 'expo-status-bar';
import { Button ,  StyleSheet, Text, View  , Alert, ScrollView ,Pressable, Image} from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
     
     <View style={[{flex:1, width:'100%' , flexGrow: 0.1,backgroundColor:'yellow', marginTop:10, borderRadius:10}]}>
      <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>Infomation</Text>
        
      </View>
    
   
      <View style={[{flex:1, width:'100%' , flexGrow: 0.2,backgroundColor:'white', marginTop:10, borderRadius:10}]}>
      <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>Infomation</Text>
        <View style={[{flex:1, borderRadius:10,backgroundColor:'yellow',justifyContent: 'center'}]}>
        <ScrollView>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>(ex.) test test test</Text>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>(ex.) test test test</Text>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>(ex.) test test test</Text>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>(ex.) test test test</Text>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>(ex.) test test test</Text>  
        </ScrollView> 
        </View>
        
      </View>
      <View style={[{flex:1, width:'100%' , flexGrow: 0.3,backgroundColor:'white', marginTop:10, borderRadius:10,
                    }]}>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>My server data</Text>
        <View style={[{flex:1, borderRadius:10,backgroundColor:'yellow',justifyContent: 'center'}]}>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>(ex.) Used CPU:23%</Text>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}> Used RAM : 34%</Text>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>Used App container: 1/10</Text>
        </View>
      </View>
      <View style={[{flex:1, width:'100%' , flexGrow: 0.3,backgroundColor:'white', marginTop:10, borderRadius:10}]}>
        <Text style={[{fontSize:30 , color: 'black' ,margin:10, fontFamily:'Avenir Next'}]}>Menu</Text>
        <View style={[{flex:1, borderRadius:10}]}>
        
        <ScrollView horizontal={true}>
          <Pressable style={styles.button} >
            <Text style={styles.text_button}>Sell data</Text>
          </Pressable>

          <Pressable style={styles.button} >
            <Text style={styles.text_button}>Connect Server</Text>
          </Pressable>

          <Pressable style={styles.button} >
            <Text style={styles.text_button}>Contact Message from User</Text>
          </Pressable>

          <Pressable style={styles.button} >
            <Text style={styles.text_button}>Contact Message from Dev</Text>
          </Pressable>
        </ScrollView> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    
  },

  text:{
    fontSize:30 ,
    color: 'white',
  },

  text2:{
    fontSize:30 ,
    color: 'black',
    fontFamily:'Avenir Next',
    margin:10
  },

  text_header:{
    fontSize:30 ,
    width:'100%',
    color: 'black',
    fontFamily:'Avenir Next',
    margin:10
  },

  text_button:{
    fontSize:30 ,
    color: 'white',
    fontFamily:'Avenir Next',
    margin:10
    
  },

  text_button_header:{
    fontSize:30 ,
    color: 'white',
    fontFamily:'Avenir Next',
  },

  
  button : {
    width:200,
    height: 190,
    backgroundColor: 'black',
    borderRadius: 10,
    margin:10
  },

  button2 : {
    flex:1,
    flexGrow:0.4,  
    backgroundColor:'black',
    width:10
  }, 
});
