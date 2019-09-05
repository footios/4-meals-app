import React from 'react';
import { FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import AndroidHeaderButton from '../components/AndroidHeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
		);
	};
	return (
		<FlatList
			keyExtractor={(item, index) => item.id} // New versions of RN don't need this.
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

if (Platform.OS === 'android') {
	CategoriesScreen.navigationOptions = (navData) => {
		return {
			headerTitle: 'Meal Categories',
			headerRight: (
				<HeaderButtons HeaderButtonComponent={AndroidHeaderButton}>
					<Item
						title="Menu"
						iconName="dots-three-vertical"
						onPress={() => {
							navData.navigation.toggleDrawer();
						}}
					/>
				</HeaderButtons>
			)
		};
	};
}

if (Platform.OS === 'ios') {
	CategoriesScreen.navigationOptions = (navData) => {
		return {
			headerTitle: 'Meal Categories',
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
}

// CategoriesScreen.navigationOptions = (navData) => {
// 	return {
// 		headerTitle: 'Meal Categories',
// 		headerLeft: (
// 			<HeaderButtons HeaderButtonComponent={HeaderButton}>
// 				<Item title="Menu" iconName="menu" onPress={() => {
// 					navData.navigation.toggleDrawer();
// 				}} />
// 			</HeaderButtons>
// 		)
// 	};
// };

export default CategoriesScreen;
