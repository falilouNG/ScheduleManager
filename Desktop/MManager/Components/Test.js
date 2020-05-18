import React, {Component} from 'react';
import {  StyleSheet, Text, View, TextInput, Wdth , TouchableOpacity, Button} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { AsyncStorage } from 'react-native';

export var Meet = "";

class Test extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
          };
    }

      state = {
        Title: "",
        Room: "",
        Date: "",
        Subject: "",
    
    
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.state.Date= date.toString()
        this.hideDateTimePicker();
      };

        onsubmit = async () => {
            try {
            await AsyncStorage.setItem('Title', this.state.Title)
            await AsyncStorage.setItem('Room', this.state.Room)
            await AsyncStorage.setItem('Subject', this.state.Subject)
            await AsyncStorage.setItem('Date', this.state.Date)
              Meet = this.state.Title+this.state.Room+this.state.Subject+this.state.Date

            console.log('na bagass yi doug');
                this._retrieveData();
            } catch (error) {
                console.log(error);
            }
        };
    
       _retrieveData = async () => {
        try {
        const title = await AsyncStorage.getItem('Title');
        const room = await AsyncStorage.getItem('Room');
        const subject = await AsyncStorage.getItem('Subject');
        const date = await AsyncStorage.getItem('Date');


          if (room!== null) {
            // We have data!!
            console.log(room);
          }
          if (title !== null) {
            // We have data!!
            console.log(title);
          }
          if (subject !== null) {
            // We have data!!
            console.log(subject);
          }
          if (date !== null) {
            console.log(date);
          }
            
          console.log(Meet)
          console.log('nijaye bagass yi doug nagn')
          this._removeData();
        } catch (error) {
          // Error retrieving data
        }
      };

      _removeData = async() => {
          try{
            await AsyncStorage.removeItem('Title')
            await AsyncStorage.removeItem('Room')
            await AsyncStorage.removeItem('Subject')
            await AsyncStorage.removeItem('date')


            console.log('nijaye bagass ya nga sa biti')
          } catch(error){

          }
      };
    

    render() {
    
        return (

            <View style={styles.container}>

                <Text>{this.state.Title}</Text>
                <Text>{this.state.Date}</Text>

                <TextInput style={styles.textinput} placeholder= "Meeting Title"  
                    onChangeText={(val) => this.setState({Title: val}) }  placeholderTextColor="#fff" 
                    undrlineColorAndroid={'transparent'} />

                <TextInput style={styles.textinput} placeholder= "Meeting Room"   
                    onChangeText={(val) => this.setState({Room: val}) } placeholderTextColor="#fff" 
                    undrlineColorAndroid={'transparent'} />

                <Button title="Choose Date and Time" onPress={this.showDateTimePicker} />
                        <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        mode={'datetime'}
                        />

                <TextInput style={styles.input} placeholder= "Meeting Subject"   
                    onChangeText={(val) => this.setState({Subject: val}) } placeholderTextColor="#fff" 
                    undrlineColorAndroid={'transparent'} multiline = {true}
                    numberOfLines = {4}/>

                <TouchableOpacity style={styles.btn}
                    onPress={this.onsubmit}>
                        <Text style={styles.btntext}>SAVE</Text>
                    </TouchableOpacity>

            </View>

            

            
        )
    }
}

export default Test

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#546e96'
    },
    textinput: {
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        marginBottom: 30,
        color: 'white',
        borderColor: '#437ff0',
        borderBottomWidth: 2,
        fontSize: 20
      },
      btn: {
        alignSelf: 'center',
        alignItems: 'center',
        padding:10,
        backgroundColor:'#437ff0',
        marginTop: 30,
        width: 90,
        borderRadius: 25
      },
      input: {
        height: 100,
        marginTop: 30,
        marginBottom: 30,
        color: '#fff',
        borderColor: '#437ff0',
        borderBottomWidth: 1,
        fontSize: 20,
        width: 300,
        textAlign: "center"
    
      },
})