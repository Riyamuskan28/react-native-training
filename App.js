import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import As1 from "./assignment/1";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <As1 />
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
