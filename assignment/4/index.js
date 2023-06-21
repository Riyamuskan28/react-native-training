import * as React from 'react';
import { Text, View, StyleSheet , Button} from 'react-native';
import { NavigationContainer }from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function HomeScreen({navigation,route}) {
  const handleClick=()=>{
    navigation.navigate('Details')
  }
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>HomeScreen</Text>
    <Button title="go to detail" onPress={handleClick}/>
    </View>
  );
  }

function DetailsScreen() {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Details Screen</Text>
    </View>
  );
}
const Stack= createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="home" component={HomeScreen}/>
    <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  App; 