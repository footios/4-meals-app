import React from 'react';
import { View, StyleSheet } from 'react-native';

// Select a slice of our state.
// Note: We could also use `connect` and `mapStateToProps`...
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');

	// state.meals.filteredMeals = `meals` is the reducer identifier (see in App.js)
	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

	if (displayedMeals.length === 0) {
		return (
			<View style={styles.content}>
				<DefaultText>The meals in this category were filtered out!</DefaultText>
			</View>
		);
	}
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

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;
