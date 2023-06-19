import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import As3 from "./assignment/3";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <As3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
