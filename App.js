import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useScreens } from 'react-native-screens';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals'

useScreens(); // Unlocks the native screens of each platform! Better performance.

const rootReducer = combineReducers({
	meals: mealsReducer
})

const store = createStore(rootReducer);

// For loading Fonts. Returns a promise!
const fetchFonts = () => {
	return Fonts.loadAsync({
		'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
		// Load the Fonts...
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}
	return <Provider store={store}><MealsNavigator /></Provider> ;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
