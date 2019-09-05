import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Entypo } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const AndroidCustomHeaderButton = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Entypo}
			iconSize={23}
			color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
		/>
	);
};

export default AndroidCustomHeaderButton;
