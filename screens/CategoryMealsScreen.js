import React from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		return (
			// DON'T FORGET RETURN
			<MealItem
				title={itemData.item.title}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				duration={itemData.item.duration}
				image={itemData.item.imageUrl}
				onSelectMeal={() => {
					props.navigation.navigate({ routeName: 'MealDetail', params: { mealId: itemData.item.id } });
				}}
			/>
		);
	};

	const catId = props.navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
	// Not interested int the category, after adding the MEALS.
	// Now we need the meals that belong to that category.
	// const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item, index) => item.id} // Modern versions of RN automatically detect the key. Thus, keyExtractor is not needed!
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
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
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;
