import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {

    const renderMeals = itemData => {
        return <MealItem 
        title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
            props.navigation.navigate({ 
                routeName: 'MealDetail',
                params: {
                    'mealId': itemData.item.id
                } 
            })
        }}
        />
    }

    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(cat => cat.categoryIds.indexOf(catId) >= 0)
    return (
        <View style={styles.screen}>
            <FlatList 
            keyExtractor={(item, index) => item.id}
            data={displayedMeals}
            renderItem={renderMeals}
            style={{width: '100%'}}
            />
        </View>
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen