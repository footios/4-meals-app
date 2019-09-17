// File for marking the meal as a favorite and managing filters.
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: []
};
const mealsReducer = (state = initialState, action) => {  
    switch (action.type) {
        case TOGGLE_FAVORITE:
            // Delete the meal from favoritedMeals
			const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
			if (existingIndex >= 0) {
                const updatedFavMeals = [ ...state.favoriteMeals ];
				updatedFavMeals.splice(existingIndex, 1);
				return { ...state, favoriteMeals: updatedFavMeals };
			} else {
                // Add a favorite meal.
				const meal = state.meals.find((meal) => meal.id === action.mealId);
                //console.log(meal);
				return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
			}
		default:
			    return state; // is first reached when app starts
	}
};

export default mealsReducer;
