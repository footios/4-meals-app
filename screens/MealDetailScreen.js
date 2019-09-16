import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const MealDetailScreen = (props) => {
	// Here we don't care about any filters, just for specific `id`. So get just meals.
	const availableMeals = useSelector((state) => state.meals.meals);
	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

	const dispatch = useDispatch();

	// Change the state of favoritedMeals array in redux.
	const toggleFavoriteHandler = useCallback(
		() => {
			dispatch(toggleFavorite(mealId));
		},
		[ dispatch, mealId ]
	);

	// setParams in useEffect. Other wise you'll get an infinite loop.
	// But because useEffect runs after the component loads, for the 1st time,
	// the header title shows up after a fraction of a second.
	// Thus a better alternative would be to pass the title in the comp
	// that we load this comp.
	// This would be MealsList...
	useEffect(
		() => {
			// setParams for the header... down below...
			// props.navigation.setParams({ mealTitle: selectedMeal.title });

			// Send the function to the header... then use it in onPress...
			props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
		},
		[ toggleFavoriteHandler ]
	);
	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => <ListItem key={ingredient}>{ingredient}</ListItem>)}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.ingredients.map((step) => <ListItem key={step}>{step}</ListItem>)}
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	// This was used for the headerTitle...
	// const mealId = navigationData.navigation.getParam('mealId');
	// const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	
	// Get the mealTitle you set in MealList.
	const mealTitle = navigationData.navigation.getParam('mealTitle');
	
	// Get the function you set in useEffect to trigger it in onPress
	const toggleFavorite = navigationData.navigation.getParam('toggleFav');


	return {
		headerTitle: mealTitle,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				{/* You can have more than one items = icons. But use different title! */}
				{/* TODO: change the icon to 'favorite' when clicked */}
				<Item title="Favorite" iconName="favorite-border" onPress={toggleFavorite} />
				{/* <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('Mark as favorite')} /> */}
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10
	}
});

export default MealDetailScreen;
