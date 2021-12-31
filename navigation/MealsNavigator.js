import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform, Text } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white': ''
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: { screen: CategoryMealScreen },
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: { screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text> : 'Meals'
    }},
    Favorites: { screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text> : 'Favorites'
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
    },
    labelStyle: {
        fontFamily: 'open-sans'
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: { 
        screen: MealsFavNavigator, 
        navigationOptions: {
            drawerLabel: 'Meals'
        }    
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)