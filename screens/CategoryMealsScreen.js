import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<View style={styles.screen}>
			<Text>The Category Meals Screen!</Text>
			<Text>{selectedCategory.title}</Text>
			<Button
				title="Go to Meal Detail!"
				onPress={() => {
					props.navigation.navigate('MealDetail'); // short version
				}}
			/>
			<Button
				title="Go back"
				onPress={() => {
					// props.navigation.goBack() }} />
					props.navigation.pop();
				}}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
    // posible alternative
    // const catId = navigationData.navigation.state.params.categoryId;

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    
    return {
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;
