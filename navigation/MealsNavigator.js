import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: { screen: CategoryMealScreen },
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white': ''
    }
})

const tabScreenConfig = {
    Meals: { screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.primaryColor
    }},
    Favorites: { screen: FavoritesScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.accentColor
    }}
}

const MealsFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor
    }
}) : createBottomTabNavigator(tabScreenConfig,
{
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MealsFavNavigator)