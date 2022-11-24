import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Apartments = (props) => {
    const Apartments = props.Apartments;
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri:Apartments.image}}/>

      <Text style={styles.bedrooms}>{Apartments.bed} bed {Apartments.bedroom} bedroom</Text>
      <Text style={styles.title}>{Apartments.title}</Text>
      
      <Text style={styles.description} numberOfLines={2}>{Apartments.description}</Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₦{Apartments.oldPrice}</Text>
        <Text style={styles.price}>  ₦{Apartments.newPrice} </Text>
        / Night
      </Text>
      <Text style={styles.totalPrice}>₦{Apartments.totalPrice} total</Text>
    </TouchableOpacity>
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
        marginTop:10,
        color:'gray',
    },

    title:{
        fontSize:22,
        fontWeight:'600',
        marginVertical:7,
    },


    description:{
        fontSize:19,
        lineHeight:26,
        color:'gray',
        // fontWeight:'normal',
    },
    prices:{
        fontSize:18,
        marginVertical:7,
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