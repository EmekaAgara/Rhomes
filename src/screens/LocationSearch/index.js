import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo'

const LocationSearchScreen = () => {

  const [inputText, setInputText] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Location"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30}/>

            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      
      />
    </View>
  )
}

export default LocationSearchScreen

const styles = StyleSheet.create({
  container:{
    margin:20,
  },

  textInput:{
    fontSize:20,
    marginBottom:20,
  },

  row:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:15,
    borderBottomWidth:0.1,
    borderColor:'gray',
  },

  iconContainer:{
    backgroundColor:'#e1e1e1',
    padding:7,
    borderRadius:10,
    marginRight:15,
  },

  locationText:{
    
  }
})