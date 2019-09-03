import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam('mealId');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
			<Button title="Go back to Categories" onPress={() => props.navigation.popToTop()} />
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return {
		headerTitle: selectedMeal.title,
		headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            {/* You can have more than one items = icons. But use different title! */}
            {/* TODO: change the icon to 'favorite' when clicked */}
				<Item title="Favorite" iconName="favorite-border" onPress={() => console.log('Mark as favorite')} />
				{/* <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('Mark as favorite')} /> */}
			</HeaderButtons>
		
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MealDetailScreen;
