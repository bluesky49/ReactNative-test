import React from 'react'
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { user } from '../assets/data';
import styles from './style';
import InfoScreen from '../pages/InfoScreen';
import CommentScreen from '../pages/CommentScreen';

const USER_IMAGE = require("../assets/images/user.png")

const NavigationStack = () => {
    const Stack = createStackNavigator();

    const HeaderOption = {
        headerStyle: {
            backgroundColor: '#25233D',
            height: 62,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={`Brooklyn's Rating`}
                    component={InfoScreen}
                    options={{
                        ...HeaderOption,
                        headerLeft: () => <Image source={USER_IMAGE} style={styles.headerImage} />
                    }}
                />
                <Stack.Screen
                    name="Party Rating"
                    component={CommentScreen}
                    options={HeaderOption}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;
