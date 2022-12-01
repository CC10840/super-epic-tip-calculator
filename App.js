import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
  state = {
    billWithTip: '0.00',
  };

  _handleTextChange = (originalBill) => {
    this.setState({ originalBill });
  };

  ten = () => {
    this.setState({
      billWithTip: parseFloat(this.state.originalBill * 1.1).toFixed(2),
    });
  };

  fifteen = () => {
    this.setState({
      billWithTip: parseFloat(this.state.originalBill * 1.15).toFixed(2),
    });
  };

  twenty = () => {
    this.setState({
      billWithTip: parseFloat(this.state.originalBill * 1.2).toFixed(2),
    });
  };

  twentyfive = () => {
    this.setState({
      billWithTip: parseFloat(this.state.originalBill * 1.25).toFixed(2),
    });
  };

  thirty = () => {
    this.setState({
      billWithTip: parseFloat(this.state.originalBill * 1.3).toFixed(2),
    });
  };

  thirtyfive = () => {
    this.setState({
      billWithTip: parseFloat(this.state.originalBill * 1.35).toFixed(2),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tip Calculator</Text>

        <TextInput
          value={this.state.originalBill}
          onChangeText={this._handleTextChange}
          style={{
            width: 200,
            height: 44,
            padding: 8,
            color: 'white',
            borderRadius: 30,
            fontSize: 18,
            backgroundColor: '#808080',
          }}
        />

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.ten}>
            <Text style={styles.buttonText}>10%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.fifteen}>
            <Text style={styles.buttonText}>15%</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.twenty}>
            <Text style={styles.buttonText}>20%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.twentyfive}>
            <Text style={styles.buttonText}>25%</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.thirty}>
            <Text style={styles.buttonText}>30%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.thirtyfive}>
            <Text style={styles.buttonText}>35%</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.paragraph}>You Should Pay:</Text>
        <Text style={styles.paragraph}>${this.state.billWithTip}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  scoreContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textInput: {
    height: 30,
    width: 150,
    borderWidth: 1,
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 30,
    fontFamily: 'notoserif',
    backgroundColor: 'gray',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'notoserif',
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'notoserif',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: 90,
    backgroundColor: '#FFCC00',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontFamily: 'notoserif',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
  },
});
