import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';
const Mail = (props) => {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Image source={props.img} style={styles.icon} />
        <View style={{ flexDirection: 'column' }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text1}>{props.text1}</Text>
            <Text style={styles.time}>{props.time}</Text>
          </View>
          <Text style={styles.text2}>{props.text2}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text3}>{props.text3}</Text>
            <Image
              source={require('./assets/star (1).png')}
              style={styles.logo}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:"row",justifyContent:"sapce-between",padding:10, backgroundColor:"pink",height:50,marginEnd:-2,borderRadius:20}}>
    <Image style={{height:30,width:30}} source={require("./assets/menu.png")}/>
    <Text style={styles.paragraph}>{'search in mail'}</Text>
    <Image style={{height:35,width:35}} source={require("./assets/girl.png")}/>
    </View>
      <Text style={styles.text4}>Primary</Text>
      <Mail
        img={require('./assets/letter-n.png')}
        text1={'Nykaa'}
        time={'4:14pm'}
        text2={'Going back to college??'}
        text3={'We have affordable skincare up for...'}
      />
      <Mail
        img={require('./assets/letter-g.png')}
        text1={'Google Play'}
        time={'5:45pm'}
        text2={'Updates to Google Play terms of...'}
        text3={'Google Play on March15, 2023,we...'}
      />
      <Mail
        img={require('./assets/s.png')}
        text1={'Sanjana'}
        time={'7:35pm'}
        text2={'Share request for Lawazia tech...'}
        text3={'Share a document?Sanjana(riya123...'}
      />
      <Mail
        img={require('./assets/instagram.png')}
        text1={'Instagram'}
        time={'8:35pm'}
        text2={'Reset Your password'}
        text3={'Hi muskanriya28,We got a request t...'}
      />
      <Mail
        img={require('./assets/y.png')}
        text1={'YouTube'}
        time={'10:25pm'}
        text2={'You can now choose your YouTub...'}
        text3={'YouTube Creator Youtube is introdu...'}
      />
      <View style={styles.footer}>
      <Image source={require('./assets/message.png')} style={styles.logo}/>
      <Image source={require('./assets/new.png')} style={styles.logo}/>
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 2,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:"space-between",
  },
  icon: {
    height: 50,
    width: 50,
    margin:5,
  },
  headingText: {
    margin: 8,
    fontSize: 14,
    fontWeight: 'aerial',
    marginTop: 10,
    marginRight: 50,
    color: 'white',
  },
  headingDesign: {
    margin: 10,
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'aerial',
    marginTop: 10,
    marginRight: 50,
  },
  contentContainer: {
    margin: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignContent: 'center',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'calibri',
    color: 'white',
  },
  text2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  text3: {
    fontSize: 12,
    //fontFamily:'Google sans',
    color: 'white',
  },
  text4: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    //height:24,
    //width:80,
    margin: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
    flexDirection:"row",
   // justifyContent:"space-between",
  },
  logo: {
    height: 30,
    width: 30,
    margin: 5,
   // marginLeft:30,
    marginRight:-30,
    justifyContent:"space-between",
  },
  icon1: {
    height: 50,
    width: 50,
    margin: 5,
    marginEnd: 5,
    marginRight:10,
    marginLeft:10,
  },
  time: {
    fontSize: 10,
    fontWeight: 'bold',
    marginEnd: -20,
    color: 'white',
  },
});
