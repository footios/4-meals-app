import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

	return (
		<MealList
			// MealList doesn't have access to navigation... so we forward the nav prop
			navigation={props.navigation}
			listData={displayedMeals}
		/>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	// Posible alternative for the above line.
	// const catId = navigationData.navigation.state.params.categoryId;
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title
	};
};

export default CategoryMealsScreen;
