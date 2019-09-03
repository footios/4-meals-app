import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
		Meals: MealsNavigator,
		Favorites: FavoritesScreen
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Meals') {
					iconName = `restaurant${focused ? '' : '-menu'}`;		
				} else if (routeName === 'Favorites') {
					iconName = `favorite${focused ? '' : '-border'}`;
				}
				return <MaterialIcons name={iconName} size={25} color={tintColor} />;
			}
		}),
	
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		}
	}
);

// A more simple alternative:
// const MealsFavTabNavigator = createBottomTabNavigator(
// 	{
// 		Meals: {
// 			screen: MealsNavigator,
// 			// navigationOptions in config of a navigator, only matter if that
// 			// navigator is used inside of another navigator.
// 			navigationOptions: {
// 				tabBarIcon: ({ focused, tintColor }) => {
// 					let iconName = `restaurant${focused ? '' : '-menu'}`;
// 					return <MaterialIcons name={iconName} size={25} color={tintColor} />;
// 				}
// 			}
// 		},
// 		Favorites: {
// 			screen: FavoritesScreen,
// 			navigationOptions: {
// 				tabBarLabel: 'Favorites!',
// 				tabBarIcon: ({ focused, tintColor }) => {
// 					let iconName = `favorite${focused ? '' : '-border'}`;
// 					return <MaterialIcons name={iconName} size={25} color={tintColor} />;
// 				}
// 			}
// 		}
// 	},
// 	{
// 		tabBarOptions: {
// 			activeTintColor: Colors.active,
// 			inactiveColor: Colors.inactive
// 		}
// 	}
// );


// export default createAppContainer(MealsNavigator);
// Now we combine Navigators
export default createAppContainer(MealsFavTabNavigator);
