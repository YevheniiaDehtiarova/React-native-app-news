import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FullInfo from './components/FullInfo'
import Main from './components/Main'

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="MainStack"
            component={Main}
            options={{
                title: 'Main page',
                headerStyle: {backroundColor: 'red', height: 100},
                headerTitleStyle: {fontWeight: '400'}
                }}>
            </Stack.Screen>
            <Stack.Screen 
            name="FullInfo"
            component={FullInfo}
            options={{
                title: 'Articles',
                headerStyle: {backroundColor: 'red', height: 100},
                headerTitleStyle: {fontWeight: '400'}
                }}>
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}