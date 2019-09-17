import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
	// `meals` is the reducer identifier (see in App.js)
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

	// Not needed anymore!
	// dummy data for favorite
	// const favMeals = favMeals.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
	// Alternative:
	// const favMeals = MEALS.filter((meal) => meal.affordability === 'affordable');

	// Render something when no favorites are selected.
	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>No favorite meals found.</DefaultText>
			</View>
		);
	}

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Favorites',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default FavoritesScreen;
