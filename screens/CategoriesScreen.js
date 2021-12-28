import React from 'react'
import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import Colors from '../constants/Colors'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
        title={itemData.item.title} 
        onSelect={
            () => props.navigation.navigate({ 
                routeName: 'CategoryMeal',
                params: {
                    categoryId: itemData.item.id 
                } 
            })
        } 
        color={itemData.item.color}
        />
    }

    return (
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

export default CategoriesScreen