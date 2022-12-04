import React, { useState } from "react";
import { TextInput } from 'react-native';
import { Container, Switch, Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { Icon } from 'react-native-elements'
import {useNavigation} from "@react-navigation/native"

function NotificationSettings() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Default', value: 'Red/Yellow/Green' },
        { label: 'Custom', value: 'C1/C2/C3' }
    ])    

    return (
        <SafeAreaView style={styles.background}>   
        <View style={styles.view}>
          <Pressable onPress={() => navigation.goBack('MenuScreen')}>
          <Icon
              name='arrow-left'
              type='material-community'
              color="#00539a"
              size={30}
              style={styles.backButton}/>
          </Pressable>
          <Text style={styles.title}>Notifications</Text>
        </View>

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Push Notifications</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#2596be" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: 30}}
          />
         </View>
        </Pressable> 
        </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    backButton:{
        paddingHorizontal: 20,
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

      text: {
        fontSize: 17,
        color: "#00539a",
        fontWeight: '500',
        paddingHorizontal: 40,
        paddingBottom: 20,
        paddingTop: 20,
      },  
  
    background:{
        color:'#ffffff',
        flex:1,
    },

    title:{
        fontSize: 35,
        fontWeight: '400',
        color: "#00539a",
        paddingHorizontal: width*0.1,
        textAlign:'center',
        paddingBottom: 30,
        paddingTop: 30,
    },
})

export default NotificationSettings;