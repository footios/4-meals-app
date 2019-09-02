import React from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		<View>
			<Text>{itemData.item.title}</Text>
		</View>;
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




// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { CATEGORIES, MEALS } from '../data/dummy-data';
// import MealItem from '../components/MealItem';

// const CategoryMealsScreen = props => {
//   const renderMealItem = itemData => {
//     return (
//       <MealItem
//         title={itemData.item.title}
//         image={itemData.item.imageUrl}
//         duration={itemData.item.duration}
//         complexity={itemData.item.complexity}
//         affordability={itemData.item.affordability}
//         onSelectMeal={() => {}}
//       />
//     );
//   };

//   const catId = props.navigation.getParam('categoryId');

//   const displayedMeals = MEALS.filter(
//     meal => meal.categoryIds.indexOf(catId) >= 0
//   );

//   return (
//     <View style={styles.screen}>
//       <FlatList
//         data={displayedMeals}
//         keyExtractor={(item, index) => item.id}
//         renderItem={renderMealItem}
//         style={{ width: '100%' }}
//       />
//     </View>
//   );
// };

// CategoryMealsScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title
//   };
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 15
//   }
// });

// export default CategoryMealsScreen;
