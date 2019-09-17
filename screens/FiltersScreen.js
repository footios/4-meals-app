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

const FiltersScreen = (props) => {
	const { navigation } = props;

	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isLactoseFree, setIsLactoseFree ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);
	const [ isVegetarian, setIsVegetarian ] = useState(false);

	const dispatch = useDispatch();

	// If we change one of the filters state then the saveFilters function is memoized,
	// because of useCallback and its dependencies!
	// Then if save icon (in the headerRight) is pressed, 
	// the saveFilters function runs.
	// That means that we get a snap-shot of the state of the filters 
	// and that state is saved in Redux memory with dispatch(setFilters).
	// The saveFilters function runs when we press the save icon 
	// because in useEffect we setted a pointer of the saveFilters func,
	// as a parameter to the react-navigation state, 
	// which then we got in the save icon and trigger it in onPress.
	
	// Note that useEffect first run happens when the component mounts and 
	// the render method runs.
	// Then it also runs if it's dependecies change. In our case saveFilters.

	const saveFilters = useCallback(
		() => {
			const appliedFilters = {
				glutenFree: isGlutenFree,
				lactoseFree: isLactoseFree,
				vegan: isVegan,
				vegetarian: isVegetarian
			};
			dispatch(setFilters(appliedFilters));
			// console.log(appliedFilters);
			
		},
		[ isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch ]
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
				<Item title="Save" iconName="save" onPress={navData.navigation.getParam('save')} />
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
