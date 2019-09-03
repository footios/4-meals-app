import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

// 1st arg: obj with screens, 2d arg: config of obj...
const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen
			// headerTitle: 'Meal Categories', // 1) Leave it on its file 2) DOES NOT get overriden from screen's settings
			// No need to repeat yourself, use defaultNavigationOptions
			// navigationOptions: {
			// 	backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : ''
			// },
			// headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor
		},
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: MealDetailScreen
	},
	// 2d arg
	{
		// initialRouteName: 'CategoriesScreen',
		//  mode: 'modal', // other animation transition, default is `card`
		// defaultNavigationOptions: apply to every screen
		// Note: Default options ARE overriden, from screen's settings!
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
			headerTitle: 'A Screen'
		}
	}
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			// navigationOptions in config of a navigator, only matter if that
			// navigator is used inside of another navigator.
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <MaterialIcons name='restaurant-menu' size={25} color={tabInfo.tintColor} />
				}
			}
		},
		Favorites:{
			screen: FavoritesScreen,
			navigationOptions: {
				tabBarLabel: 'Favorites!',
				tabBarIcon: (tabInfo) => {
					return <MaterialIcons name='favorite-border' size={25} color={tabInfo.tintColor} />
				}
			}
		} 
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.accentColor
		}
	}
);

// export default createAppContainer(MealsNavigator);
// Now we combine Navigators
export default createAppContainer(MealsFavTabNavigator);
