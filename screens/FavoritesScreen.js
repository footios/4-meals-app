import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props) => {
	// `meals` is the reducer identifier (see in App.js)
	const favMeals = useSelector((state) => state.meals.favoriteMeals);
	
	// Not needed anymore!
	// const favMeals = favMeals.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
	// Alternative:
	// const favMeals = MEALS.filter((meal) => meal.affordability === 'affordable');

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

export default FavoritesScreen;
