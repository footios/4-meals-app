import React from 'react';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
    // Alternative:i
	// const favMeals = MEALS.filter((meal) => meal.affordability === 'affordable');

	return (
		<MealList
			listData={favMeals}
		/>
	);
};

FavoritesScreen.navigationOptions = {
	headerTitle: 'Favorites'
};

export default FavoritesScreen;
