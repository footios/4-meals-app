This is a Udemy course
[React Native - The Practical Guide](https://www.udemy.com/react-native-the-practical-guide/)

## Sections:
### 6. Navigation with React Navigation [THE MEALS APP]

It's a small app, where you may choose your meal (which includes the recipie and extra info), add it to favorites etc.



## Packages installed:
### expo-fonts
### react-navigation
### react-native-screens
### react-native-gesture-handler 
### react-native-reanimated 
### react-navigation-header-buttons
### @expo/vector-icons
### react-navigation-material-bottom-tabs
### react-native-paper



Note: commit *react-native-screens installed* for using native screen components.
It should be included in expo though.


## Branches:
### 1-creatBottomTabNavigator-experiment
Check this post on [Stackoverflow](https://stackoverflow.com/questions/57769242/how-to-set-navigationsoptions-for-two-tabs-and-check-the-routename-to-config-the)

### 2-show-different-menu-icon-for-android
> Section: 6, 132
>
@5:30 Max (the instructor) suggests to use the `Platform` API to set a different icon for android/iOS.

I think the 3 dots are more common for android.

I had to create an extra `AndroidHeaderButton` though, because the 3 dots icon was from a different set of icons.

<img src="./assets/gifs/androidMenuIcon.gif"
     alt="androidMenuIcon"
     style="float: left; margin-right: 10px; width:50px; height:150px" />


### 3-config-drawer
I added icons to every item...
<img src="./assets/gifs/IconsToSideDrawer.gif"
     alt="IconsToSideDrawer"
     style="float: left; margin-right: 10px; width:50px; height:150px" />

### 4-config-detailsScreen-attempt
Display all the info about the recipe.

### 5-other-dependecies-for-useEffect
