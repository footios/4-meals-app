import React, { useState, useEffect, useCallback } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

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
// HERE WE'RE GOING TO TRY
// to dispatch(setFilters) when we turn a switch,
// so we will not have to press the save icon.
const FiltersScreen = (props) => {

	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isLactoseFree, setIsLactoseFree ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);
	const [ isVegetarian, setIsVegetarian ] = useState(false);

	const dispatch = useDispatch();

	const saveGluten = useCallback(
		(newValue) => {
			setIsGlutenFree(newValue);
		},
		[ isGlutenFree, dispatch ]
	);

	const saveLactose = useCallback(
		(newValue) => {
			setIsLactoseFree(newValue);
		},
		[ isLactoseFree, dispatch ]
	);

	const saveVegan = useCallback(
		(newValue) => {
			setIsVegan(newValue);
		},
		[ isVegan, dispatch ]
	);

	const saveVegetarian = useCallback(
		(newValue) => {
			setIsVegetarian(newValue);
		},
		[ isVegetarian, dispatch ]
	);

	useEffect(
		() => {
			const appliedFilters = {
				glutenFree: isGlutenFree,
				lactoseFree: isLactoseFree,
				vegan: isVegan,
				vegetarian: isVegetarian
			};
			dispatch(setFilters(appliedFilters));
		},
		[ isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch ]
	);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch state={isGlutenFree} onChange={saveGluten} label="GLuten-free" />
			<FilterSwitch state={isLactoseFree} onChange={saveLactose} label="Lactose-free" />
			<FilterSwitch state={isVegan} onChange={saveVegan} label="Vegan" />
			<FilterSwitch state={isVegetarian} onChange={saveVegetarian} label="Vegetarian" />
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
