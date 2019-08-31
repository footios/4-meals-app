import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

// 1st arg: obj with screens, 2d arg: config of obj...
const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen
		},
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: MealDetailScreen
	},
	// 2d arg
	{
		// initialRouteName: 'CategoriesScreen',
		//  mode: 'modal', // other animation transition
		// defaultNavigationOptions: apply to every screen
		// Note: Default options are overriden!
		defaultNavigationOptions: {
			defaultNavigationOptions: {
				backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : ''
			},
			headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor
		}
	}
);

export default createAppContainer(MealsNavigator);
