import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = (props) => {
	let TouchableCmp = TouchableOpacity;
	// Platform.Version <= 21 means that TouchableNativeFeedback is supported
	if (Platform.OS == 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchableCmp style={styles.gridItem} onPress={() => props.onSelect}>
				<View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
					<Text style={styles.title}>{props.title}</Text>
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
		overflow: 'hidden' // Now the ripple effect (android) cannot go out of the box.
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 8, height: 9 },
		shadowRadius: 10,
		elevation: 3, // for android,
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
