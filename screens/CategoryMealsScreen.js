import React from 'react';
import  { View, Button, Text, StyleSheet } from 'react-native';

const CategoryMealsScreen = (props) => {
    return ( 
        <View style={styles.screen} >
            <Text>The Category Meals Screen!</Text>
            <Button title='Go to Meal Detail!' onPress={() => {
            props.navigation.navigate('MealDetail'); // short version
        }} />
        <Button title='Go back' onPress={() => {
            // props.navigation.goBack() }} />
            props.navigation.pop() }} />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center' 
    }
})
 
export default CategoryMealsScreen;