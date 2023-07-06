import { View, Button, Text } from 'react-native';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate('Details', {
                        userId: 1,
                        userName: 'Awesome User',
                    });
                }
                }
            />
        </View>
    );
}


export function DetailsScreen() {

    const { userId } = route.params;
    const { userName } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Details Screen</Text>
            <Text style={{ color: '#1ACB97' }}>ID: {userId}</Text>
            <Text style={{ color: '#1ACB97' }}>Name: {userName}</Text>
        </View>
    );
}


export function ContactScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Contact Screen</Text>
        </View>
    );
}

export default function DrawerScreen() {
    return (
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Details" component={DetailsScreen} />
				<Drawer.Screen name="Contact" component={ContactScreen} />
			</Drawer.Navigator>
	);
}