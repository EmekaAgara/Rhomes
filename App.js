import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Apartments from './src/components/Apartments';
import HomeScreen from './src/screens/Home';
import apartmentsData from './assets/data/apartmentsData';
import SearchResultsScreen from './src/screens/SearchResults';
import LocationSearchScreen from './src/screens/LocationSearch';


const apartment1 = apartmentsData[0];
export default function App() {
  return (
    
    <SafeAreaView>
      <StatusBar style="auto" />
      {/* <HomeScreen/> */}
      {/* <Apartments Apartments={apartment1}/> */}
      {/* <SearchResultsScreen/> */}
      <LocationSearchScreen/>
    </SafeAreaView>
  );
}
