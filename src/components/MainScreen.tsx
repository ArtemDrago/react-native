import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ServicesScreen from '../components/ServicesScreen';
import BookingScreen from '../components/BookingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './categories/CategoriesScreen';

const Stack = createStackNavigator();

function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{ title: 'Типы услуг' }}
                />
                <Stack.Screen
                    name="Services"
                    component={ServicesScreen}
                    options={{ title: 'Список услуг' }}
                />
                <Stack.Screen
                    name="Booking"
                    component={BookingScreen}
                    options={{ title: 'Запись на тренировку' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;