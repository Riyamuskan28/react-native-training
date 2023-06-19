import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (<View>
    <View style={{backgroundColor:'#5C8984',borderRadius:20}}>
    <Text style={styles.paragraph}>All Contacts</Text>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20,backgroundColor:"pink",borderRadius:20}}>
    <Image style={{height:50,width:50}} source={require("./assets/telemarketer.png")}/>
    <View>
    <Text style={styles.text1}>
    Riya 
    </Text>
    <Text style={styles.text2}>
    7643289897
    </Text>
    </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20,backgroundColor:'#F1D4E5',borderRadius:20}}>
    <Image style={{height:50,width:50}} source={require("./assets/call-center-agent.png")}/>
    <View>
    <Text style={styles.text1}>
    Muskan
    </Text>
    <Text style={styles.text2}>
  8956329857
    </Text>
    </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20,backgroundColor:"pink",borderRadius:20}}>
    <Image style={{height:50,width:50}} source={require("./assets/customer-support.png")}/>
    <View>
    <Text style={styles.text1}>
    Tanya 
    </Text>
    <Text style={styles.text2}>
    7956321932
    </Text>
    </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20,backgroundColor:'#F1D4E5',borderRadius:20}}>
    <Image style={{height:50,width:50}} source={require("./assets/student.png")}/>
    <View>
    <Text style={styles.text1}>
    Sanjana 
    </Text>
    <Text style={styles.text2}>
    9874327842
    </Text>
    </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20,backgroundColor:"pink",borderRadius:20}}>
    <Image style={{height:50,width:50}} source={require("./assets/man.png")}/>
    <View>
    <Text style={styles.text1}>
    Romi 
    </Text>
    <Text style={styles.text2}>
    9654328943
    </Text>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1:{
fontSize:22,
  },
  text2:{
fontSize:10,
  },
});
