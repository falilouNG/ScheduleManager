import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ReactChipsInput from 'react-native-chips';
import { Icon } from 'react-native-elements';
import firebase from '../firebase';

const { heigh, width } = Dimensions.get('window');


export function addReunionDb(sujet,lieu,participants,date){
    dateTime = date.toGMTString();
    firebase.database().ref('/reunion').push({sujet,lieu,participants,dateTime});
  }

const AddReunions = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [sujet, setSujet] = useState('');
    const [lieu, setLieu] = useState('');
    const [participants, setParticipants] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        //console.log(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.container}>
            <TextInput 
              style={styles.textinput} 
              placeholder="Meeting Title" 
              onChangeText={(text)=>{
                setSujet(text);
              }}
              value={sujet}
            />
            <TextInput 
              style={styles.textinput} 
              placeholder="Meeting Room"
              onChangeText={(text)=>{
                setLieu(text);
              }}
              value={lieu}
            />
            
            <TextInput 
              style={styles.textinput} 
              placeholder="Meeting Participants"
              onChangeText={(text)=>{
                setParticipants(text);
              }}
              value={participants}
            />


            <View style={styles.dateTimeButton}>
                <Icon
                  reverse
                  raised
                  name='event'
                  type='material'
                  onPress={showDatepicker} />
                  <Icon
                    reverse
                    raised
                    name='add-alarm'
                    type='material'
                    onPress={showTimepicker}
                  />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            
            <TouchableOpacity style = {styles.button} onPress={()=>{
                  addReunionDb(sujet,lieu,participants,date)
                  setDate(new Date());
                  setLieu('');
                  setSujet('');
                  setParticipants('');
                  navigation.navigate("List Meetings")
                }}>
                <Text style = {styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );

}

export default AddReunions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  
  
  textinput: {
    textAlign: 'center',
    height: 40,
    marginBottom: 30,
    color: '#009387',
    borderColor: '#00cc00',
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 100,
    color: '#009387',
    borderColor: '#00cc00',
    borderBottomWidth: 1,
    fontSize: 20,
    width: 300,
    textAlign: "center",
    fontWeight: 'bold',

  },
  chips:{
    height:40,
    fontWeight: 'bold',

  },
  date: {
    width: width - 25,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
  },
  about:{
    marginBottom : 20,
    height: 100,
  },
  button:{
    marginTop: 20,
    backgroundColor:'#009387',
    width: 100,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  dateTimeButton:{
    //margin: 20,
    width: width - 30,
    flexDirection: 'row',
    marginTop:20,
    justifyContent:'space-between'
    //justifyContent: 'center',
    //alignItems:'center',

  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});