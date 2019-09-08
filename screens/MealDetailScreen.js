import React from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView style={styles.mealItem}>
			<View style={styles.imageContainer}>
				<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
					<ImageBackground source={{ uri: selectedMeal.imageUrl }} style={styles.bgImage}>
						<View style={styles.titleContainer}>
							{/* numberOfLines={1} You get ... if text is too long */}
							<Text style={styles.title} numberOfLines={1}>
								{selectedMeal.title}
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
					<DefaultText style={styles.infoByImage}>{selectedMeal.duration}m</DefaultText>
					<DefaultText style={styles.infoByImage}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
					<DefaultText style={styles.infoByImage}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
				</View>
			</View>
			<View>
				<View style={styles.ingredients}>
					<DefaultText style={styles.titles}>INGREDIENTS</DefaultText>
					{selectedMeal.ingredients.map((ing, index) => (
						<DefaultText style={styles.text} key={index}>
							{ing}
						</DefaultText>
					))}
				</View>
				<View style={styles.directions}>
					<DefaultText style={styles.titles}>DIRECTIONS</DefaultText>
					{selectedMeal.steps.map((step, index) => (
						<DefaultText style={styles.text} key={index}>
							{step}
						</DefaultText>
					))}
				</View>
				<View style={styles.extraInfo}>
					<DefaultText style={styles.filters}>
						GLUTEN FREE: {selectedMeal.isGlutenFree === false ? 'NO' : 'YES'}
					</DefaultText>
					<DefaultText style={styles.filters}>
						VEGAN: {selectedMeal.isVegan === false ? 'NO' : 'YES'}
					</DefaultText>
					<DefaultText style={styles.filters}>
						VEGETERIAN: {selectedMeal.isVegetaria === false ? 'NO' : 'YES'}
					</DefaultText>
					<DefaultText style={styles.filters}>
						LACTOSE FREE: {selectedMeal.isLactoseFree === false ? 'NO' : 'YES'}
					</DefaultText>
				</View>
			</View>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return {
		headerTitle: selectedMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				{/* You can have more than one items = icons. But use different title! */}
				{/* TODO: change the icon to 'favorite' when clicked */}
				<Item title="Favorite" iconName="favorite-border" onPress={() => console.log('Mark as favorite')} />
				{/* <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('Mark as favorite')} /> */}
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	mealItem: {
		height: 300,
		width: '95%',
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 10,
		marginHorizontal: 10,
	},
	imageContainer: {
		width: '100%',
		height: '50%'
	},
	bgImage: {
		width: '100%', // Have to set!
		height: '100%', // Have to set!
		justifyContent: 'flex-end' // Move title to the bottom of the image
	},
	infoByImage: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	mealRow: {
		flexDirection: 'row'
	},
	mealHeader: {
		height: '85%'
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%'
	},
	titles: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	ingredients: {
		padding: 10,
		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingBottom: 20
	},
	directions: {
		padding: 10,
		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingBottom: 20
	},
	text: {
		fontSize: 18,
		color: Colors.accentColor,
		fontWeight: '800',
		fontStyle: 'italic'
		// textShadowColor: 'rgba(230,230,250, 0.5)',
		// textShadowRadius: 20,
		// textDecorationColor: 'black'
	},
	filters: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	extraInfo: {
		padding: 10,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingBottom: 20
	},
	// If you put these configs in the title, you get an extra background...
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: 'white',
		textAlign: 'center'
	}
});

export default MealDetailScreen;
