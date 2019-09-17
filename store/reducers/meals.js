// File for marking the meal as a favorite and managing filters.
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

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
		case SET_FILTERS:
			const appliedFilters = action.filters;
			// Check all meals if there are any matches with the filters...
			const filteredMeals = state.meals.filter((meal) => {
				// If meal should be glutenFree but it is not, return false.
				if (appliedFilters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (appliedFilters.vegan && !meal.isVegan) {
					return false;
				}
				if (appliedFilters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				// If we pass all the checks, then we have a meal...
				return true;
			});
			// Return a new state.
			return {...state, filteredMeals: filteredMeals}
		default:
			return state; // is actually first reached when app starts
	}
};

export default mealsReducer;
