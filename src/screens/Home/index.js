import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"

const HomeScreen = () => {
  return (
    <View>
        
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => console.warn( data='search btn')}>
        <Feather name="map-pin" size={20} color={"#f15454"}/>
        <Text style={styles.searchButtonText}>{"  "}Select Location</Text>
      </TouchableOpacity>


      <ImageBackground source={require('../../../assets/images/home.jpg')} style={styles.image}>
      
      <Text style={styles.title}>Book Affordable Apartments</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.warn( data='Explore btn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      </ImageBackground>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center',
    },

    title:{
        fontSize:55,
        fontWeight:'bold',
        color:'#f1f8ff',
        width:'80%',
        marginLeft:25,
    },

    button:{
        backgroundColor:'white',
        width:200,
        height:55,
        borderRadius:7,
        marginTop:25,
        marginLeft:25,
        justifyContent:'center',
        alignItems:'center',
    },

    buttonText:{
      fontSize:17,
      fontWeight:'bold',
    },

    searchButton:{
      backgroundColor:'#EBEBEB',
      borderColor:'gray',
      borderWidth:0.5,
      height:50,
      flexDirection:'row',
      borderRadius:7,
      width:Dimensions.get('screen').width - 40,
      marginHorizontal:20,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      zIndex:100,
      top:20,
  },

  searchButtonText:{
    fontSize:17,
    fontWeight:'500',
  }
})  