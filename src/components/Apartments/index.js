import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Apartments = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:'https://emekaagara.com/wp-content/uploads/2022/11/jorge-de-jorge-NvqYkDPE0Rw-unsplash-300x246.jpg'}}/>

      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.title}>Emerald Luxury Apartments</Text>
      
      <Text style={styles.description} numberOfLines={2}>This is just some dummy data for the apartments description it will be edited later</Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₦50,000</Text>
        <Text style={styles.price}>  ₦25,000 </Text>
        / Night
      </Text>
      <Text style={styles.totalPrice}>₦25,000 total</Text>
    </View>
  )
}

export default Apartments

const styles = StyleSheet.create({
    container:{
        margin:20,
    },

    image:{
        width:'100%',
        aspectRatio: 3/2.2,
        resizeMode:'cover',
        borderRadius:7,
    },

    bedrooms:{
        marginVertical:10,
        color:'gray',
    },

    title:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:10,
    },


    description:{
        fontSize:16,
        lineHeight:26,
        color:'gray'
    },
    prices:{
        fontSize:18,
        marginVertical:10,
        color:'red'
    },
    oldPrice:{
        color:'gray',
        textDecorationLine:'line-through',
    },
    price:{
        fontWeight:'bold',
    },
    totalPrice:{
        color:'gray',
        textDecorationLine:'underline'
    },
})