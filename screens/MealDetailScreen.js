import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title='Go to categories' onPress={() => {
                props.navigation.popToTop('Categories')
            }}/>
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title='Favorite'
            iconName='ios-star'
            onPress={() => console.log('Marked as favorite')}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen