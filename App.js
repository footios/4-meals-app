import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

useScreens(); // Unlocks the native screens of each platform! Better performance.

const fetchFonts = () => {
	return Fonts.loadAsync({
		'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}
	return <MealsNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
