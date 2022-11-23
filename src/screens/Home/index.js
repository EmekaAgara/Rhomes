import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      {}
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
        fontSize:15,
        fontWeight:'normal',
    }
})  