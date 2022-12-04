import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Account from "./Account"
import Settings from "./Settings"
import Partners from "./Partners"
import Authenticate from './Authenticate';

function Home({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'account', title: 'Your Services', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline'},
        { key: 'partners', title: 'Partners', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline'},
        { key: 'authenticate', title: 'Authenticate', focusedIcon: 'face-recognition', unfocusedIcon: 'face-recognition'},
        { key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        account: Account,
        partners: Partners,
        authenticate: Authenticate,
        settings: Settings,
    });


    return (
        <BottomNavigation
        navigationState={{ index, routes, navigation }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#2596be' }}
        inactiveColor ={'#FAF9F6'}
        style = {{ color: '#FAF9F6', fontSize: 30}}
        theme={{colors: {secondaryContainer: '#FAF9F6'}}}
        />
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    comingSoon:{
        fontSize: 40,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 50
    },
    backImage: {
        width: '60%', 
        height: '50%',
        marginVertical: height*0.09,
        marginHorizontal: width*0.2,
        opacity:0.5,
      },
})

export default Home;