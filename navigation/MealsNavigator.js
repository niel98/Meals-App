import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

import Colors from '../constants/Colors'

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

export default createAppContainer(MealsNavigator)