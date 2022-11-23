import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      {}
      <ImageBackground source={require('../../../assets/images/home.jpg')} style={styles.image}></ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
    }
})  