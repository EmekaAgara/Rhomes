import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open u App.js to start working on your app!
        <Entypo name={"home"} size={24}/>
      </Text>
      <StatusBar style="auto" />
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
