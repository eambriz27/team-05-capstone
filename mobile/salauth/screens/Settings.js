import {React, useState} from 'react';
import { Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'

function Settings() {
  const navigation = useNavigation();

  const confirmLogout = () =>
    Alert.alert(
      "Log Out?",
      " Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate("Splash") }
      ]
    );

  return (
  <SafeAreaView style={styles.background}>
      <ScrollView>
      <View style={styles.view}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <SettingsComponent 
        screen="NotificationSettings"
        name="bell"
        color="#00539a"
        text="Notifications"
        navigation = {navigation}/>

      <SettingsComponent 
        screen="AccountSettings"
        name="account-box-outline" 
        text="Account"
        navigation = {navigation}/>

      <TouchableOpacity style={styles.button}>
      <View style={styles.view}>
      <Icon
        name="delete"
        type="material-community"
        color='#00539a'
        size={30}
        style={styles.icon}/>
      <Text style={styles.text}>Delete Account</Text>
       </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button} onPress={confirmLogout}>
      <View style={styles.view}>
      <Icon
        name="logout"
        type="material-community"
        color='#00539a'
        size={30}
        style={styles.icon}/>
      <Text style={styles.text}>Logout</Text>
       </View>
      </TouchableOpacity> 

      </ScrollView>
    </SafeAreaView>
  );
}

const SettingsComponent = (props) => {
const navigation = useNavigation(); 
return (
  <TouchableOpacity 
      onPress={() => navigation.navigate(props.screen)}
      style={styles.button}>
  <View style={styles.view}>
  <Icon
        name={props.name}
        type={"material-community"}
        color={'#00539a'}
        size={30}
        style={styles.icon}/>
  <Text style={styles.text}>{props.text}</Text>
  </View>
  </TouchableOpacity> 
);
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

    icon:{
      paddingLeft:25,
      primaryColor:'#00539a',
    },

    backButton:{
      paddingHorizontal: 20,
      paddingTop: 5,
    },

    button:{
      borderWidth : 1.5,
      borderRadius: 25,
      marginBottom: 10,
      marginHorizontal: width*0.05,
      paddingVertical: 2,
      borderColor:"#00539a",
      alignItems:"stretch"
    },
  
    view:{
      flexDirection: "row",
      alignItems: "center",
      alignContent: 'flex-start'
    },

    background:{
        color:'white',
        flex:1,
    },

    title:{
        fontSize: 35,
        fontWeight: '400',
        color: "#00539a",
        paddingHorizontal: width*0.35,
        textAlign:'center',
        paddingBottom: 30,
        paddingTop: 30,
    },

    text: {
      fontSize: 17,
      color: '#00539a',
      fontWeight: '500',
      paddingHorizontal: 40,
      paddingBottom: 20,
      paddingTop: 20,
    },
  

    optBorders: {
      paddingHorizontal: 45,
      paddingBottom: 20,
      paddingTop: 20,
    },

    accountInput: {
        margin: 12,
        borderWidth: 1,
    },

    accountText: {
        margin: 5,
        fontWeight: 'bold',
    }

})

export default Settings;
