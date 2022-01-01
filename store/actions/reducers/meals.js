import { MEALS } from "../../../data/dummy-data"
import { TOGGLE_FAVORITES } from "../meals"

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex) {
                const updatedFavMeals = [...state.favoriteMeals]
            updatedFavMeals.splice(existingIndex, 1)
            return {
                ...state,
                favoriteMeals: updatedFavMeals
            }
            } else {
                const meal = state.meals(meal => meal.id === action.mealId)
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                }
            }
            
            default:
                return state
    }
}

export default mealsReducer