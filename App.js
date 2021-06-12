import React, {Component} from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class AllButtons extends Component{
  displayAlert=()=>{
    alert(
      "Playing chosen sound now!"
    )
  }
  render(){
    return(
      <Button color={this.props.color} title={this.props.title} onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
  return (
    <View style={{marginTop:100, alignItems:"center"}}>
      <AllButtons color="red" title="Sound1"/>
      <AllButtons color="orange" title="Sound2"/>
      <AllButtons color="green" title="Sound3"/>
      <AllButtons color="blue" title="Sound4"/>
      <AllButtons color="purple" title="Sound5"/>
    </View>
  );
  }
}