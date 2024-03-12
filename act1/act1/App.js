import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Picker } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Choose Operator');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case '+':
        setResult((number1 + number2).toString());
        break;
      case '-':
        setResult((number1 - number2).toString());
        break;
      case '*':
        setResult((number1 * number2).toString());
        break;
      case '/':
        setResult((number1 / number2).toString());
        break;
      default:
        setResult('Invalid Operation');
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter 1st Number"
        onChangeText={text => setNum1(text)}
        value={num1}
        keyboardType="numeric"
      />

      <Picker
        style={styles.picker}
        selectedValue={operation}
        onValueChange={itemValue => setOperation(itemValue)}
      >
        <Picker.Item label="Choose Operator" value="Invalid Operation" />
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Enter 2nd Number"
        onChangeText={text => setNum2(text)}
        value={num2}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculateResult} />
      <Text style={styles.result}> {result} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Papyrus',
    width: '50%',
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  picker: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Papyrus',
    width: '50%',
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
  },
  result: {
    textAlign: 'center',
    fontsize: 24,
    fontFamily: 'Papyrus',
    marginTop: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    fontWeight: 'bold',
  },
});

export default Calculator;