import React, { useState, useEffect, useCallback } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				thumbColor={Platform.OS === 'android' ? Colors.dodgerblue : ''}
				trackColor={{ true: Platform.OS === 'android' ? Colors.lightskyblue : '' }}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const { navigation } = props;

	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isLactoseFree, setIsLactoseFree ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);
	const [ isVegetarian, setIsVegetarian ] = useState(false);

	const saveFilters = useCallback(
		() => {
			const appliedFilters = {
				glutenFree: isGlutenFree,
				LactoseFree: isLactoseFree,
				Vegan: isVegan,
				Vegetarian: isVegetarian
			};
			console.log(appliedFilters);
		},
		[ isGlutenFree, isLactoseFree, isVegan, isVegetarian ]
    );
    
	useEffect(
		() => {
			navigation.setParams({ save: saveFilters });
		},
		[ saveFilters ] // Why can't we just use "isGlutenFree, isLactoseFree, isVegan, isVegetarian " here?
    );
    
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} label="GLuten-free" />
			<FilterSwitch
				state={isLactoseFree}
				onChange={(newValue) => setIsLactoseFree(newValue)}
				label="Lactose-free"
			/>

			<FilterSwitch state={isVegan} onChange={(newValue) => setIsVegan(newValue)} label="Vegan" />
			<FilterSwitch state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} label="Vegetarian" />
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filter Screen',
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
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Save"
					iconName="save"
					onPress={navData.navigation.getParam('save')}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		margin: 20,
		textAlign: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 15
	}
});

export default FiltersScreen;
