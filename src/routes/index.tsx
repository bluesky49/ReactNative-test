import React from 'react'
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './style';
import InfoScreen from '../pages/InfoScreen';
import CommentScreen from '../pages/CommentScreen';

const NavigationStack = () => {
    const Stack = createStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Brooklyn's Rating"
                    component={InfoScreen}
                    options={{
                        ...HeaderStyle,
                        headerLeft: () => <Image source={require("../assets/images/user.png")} style={styles.headerImage} />
                    }}
                    />
                <Stack.Screen
                    name="Party Rating"
                    component={CommentScreen}
                    options={HeaderStyle}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;

const HeaderStyle = {
    headerStyle: {
        backgroundColor: '#25233D',
        height: 120,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize : 32
    },
}
