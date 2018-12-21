import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
class Main extends React.Component {
 onChangeText = name => this.setState({ name }); // 1.
 // 2. <- Add the component state
  render() {
    return (
      <View>
       <TextInput
         onChangeText={this.onChangeText} // <- Add this
         style={styles.nameInput}
         placeHolder="John Cena"
         value={this.state.name}
        />
      </View>
    );
  }
}
...
const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
});
// 1.
import {
  StyleSheet,
  Text, // <- Add Text
  TextInput,
  TouchableOpacity, // <- Add TouchableOpacity
  View,
} from 'react-native';
...
render() {
    return (
      <View>
        // 2. Add the title
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        // 3. Add a button
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
...
const styles = StyleSheet.create({
  title: { // 4.
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { // 5.
    marginLeft: offset,
    fontSize: offset,
  },
})