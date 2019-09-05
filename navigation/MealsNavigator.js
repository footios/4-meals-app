import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

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
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <MaterialIcons name="favorite" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
        drawerIcon: ({ tintColor }) =>  <MaterialIcons name="restaurant" size={25} color={tintColor} />
      }
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) =>  <MaterialIcons name="filter-list" size={25} color={tintColor} />
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      },
      
    }
  }
);


export default createAppContainer(MainNavigator);









// THERE IS SOMETHING I DID WRONG AND THE HEADER BAR COLOR WOULD NOT SHOW UP!
// import React from 'react';
// import {
// 	createStackNavigator,
// 	createBottomTabNavigator,
// 	createAppContainer,
// 	createDrawerNavigator
// } from 'react-navigation';
// import { Platform } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// import CategoriesScreen from '../screens/CategoriesScreen';
// import CategoryMealsScreen from '../screens/CategoryMealsScreen';
// import MealDetailScreen from '../screens/MealDetailScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import FiltersScreen from '../screens/FiltersScreen';

// import Colors from '../constants/Colors';

// const defaultStackNavOptions = {
// 	// initialRouteName: 'CategoriesScreen',
// 	//  mode: 'modal', // other animation transition, default is `card`
// 	// defaultNavigationOptions: apply to every screen
// 	// Note: Default options ARE overriden, from screen's settings!
// 	defaultNavigationOptions: {
// 		headerStyle: {
// 			backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
// 		},
// 		headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
// 		headerTitle: 'A Screen'
// 	}
// };

// // 1st arg: obj with screens, 2d arg: config of obj...
// const MealsNavigator = createStackNavigator(
// 	{
// 		Categories: {
// 			screen: CategoriesScreen
// 			// headerTitle: 'Meal Categories', // 1) Leave it on its file 2) DOES NOT get overriden from screen's settings
// 			// No need to repeat yourself, use defaultNavigationOptions
// 			// navigationOptions: {
// 			// 	backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : ''
// 			// },
// 			// headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor
// 		},
// 		CategoryMeals: {
// 			screen: CategoryMealsScreen
// 		},
// 		MealDetail: MealDetailScreen
// 	},
// 	// 2d arg
// 	{
// 		defaultNavigationOptions: defaultStackNavOptions
// 	}
// );


// const FavNavigator = createStackNavigator(
// 	{
// 	  Favorites: FavoritesScreen,
// 	  MealDetail: MealDetailScreen
// 	},
// 	{
// 	  // initialRouteName: 'Categories',
// 	  defaultNavigationOptions: defaultStackNavOptions
// 	}
//   );

//   const tabScreenConfig = {
// 	Meals: {
// 	  screen: MealsNavigator,
// 	  navigationOptions: {
// 		tabBarIcon: tabInfo => {
// 		  return (
// 			<MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor} />
// 		  );
// 		},
// 		tabBarColor: Colors.primaryColor
// 	  }
// 	},
// 	Favorites: {
// 	  screen: FavNavigator,
// 	  navigationOptions: {
// 		tabBarIcon: tabInfo => {
// 		  return <MaterialIcons name="favorite" size={25} color={tabInfo.tintColor} />;
// 		},
// 		tabBarColor: Colors.accentColor
// 	  }
// 	}
//   };

//   const MealsFavTabNavigator =
//   Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeTintColor: 'white',
//         shifting: true,
//         barStyle: {
//           backgroundColor: Colors.primaryColor
//         }
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           activeTintColor: Colors.accentColor
//         }
//       });
// 	  const FiltersNavigator = createStackNavigator(
// 		{
// 		  Filters: FiltersScreen
// 		},
// 		{
// 		  // navigationOptions: {
// 		  //   drawerLabel: 'Filters!!!!'
// 		  // },
// 		  defaultNavigationOptions: defaultStackNavOptions
// 		}
// 	  );

// 	  const MainNavigator = createDrawerNavigator(
// 		{
// 		  MealsFavs: {
// 			screen: MealsFavTabNavigator,
// 			navigationOptions: {
// 			  drawerLabel: 'Meals'
// 			}
// 		  },
// 		  Filters: FiltersNavigator
// 		},
// 		{
// 		  contentOptions: {
// 			activeTintColor: Colors.accentColor,
// 			labelStyle: {
// 			  fontFamily: 'open-sans-bold'
// 			}
// 		  }
// 		}
// 	  );
	  
// 	  export default createAppContainer(MainNavigator);