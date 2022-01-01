import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)
    return <MealList displayedMeals={favMeals} navigation={props.navigation}/>
}

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
    headerTitle: 'Favorites',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title='Menu'
        iconName='ios-menu'
        onPress={() => {
            navigationData.navigation.toggleDrawer()
        }}
        />
    </HeaderButtons>
}}

export default FavoritesScreen