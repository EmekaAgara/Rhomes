import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import apartmentsData from '../../../assets/data/apartmentsData'
import Apartments from '../../components/Apartments'



const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={apartmentsData}
        renderItem={({item}) => <Apartments Apartments={item} />}
    />
    </View>
  )
}

export default SearchResultsScreen

const styles = StyleSheet.create({})