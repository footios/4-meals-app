import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
	  TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			{/* JUST A REFERENCE DO NOT RUN ANONYMUS FUNC LIKE {() => props.onSelect}*/}
			<TouchableCmp style={{flex: 1}} onPress={props.onSelect} >
				<View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
					<Text style={styles.title} numberOfLines={2} >{props.title}</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		elevation: 7, // for android,
		overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
		// overflow: 'hidden' // Now the ripple effect (android) cannot go out of the box.
		// But the shadow is gone!!!
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 8, height: 9 },
		shadowRadius: 10,
		// elevation: 7, // for android. Move it to gridItem to have the shadow back!
		padding: 15,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 18,
		textAlign: 'right' // for android 'Light & Lovely'
	}
});

export default CategoryGridTile;
