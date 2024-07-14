import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, List } from 'react-native-paper';
import {
  validateName,
  validateMobile,
  validateAge,
  validateGender,
  validateDiabetes,
  validateBp,
} from '../../components/validation';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [diabetes, setDiabetes] = useState('');
  const [bp, setBp] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Reset errors
    setErrors({});

    // Validate each field
    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);
    const ageError = validateAge(age);
    const genderError = validateGender(gender);
    const diabetesError = validateDiabetes(diabetes);
    const bpError = validateBp(bp);

    // Collect all errors
    const newErrors = {
      name: nameError,
      mobile: mobileError,
      age: ageError,
      gender: genderError,
      diabetes: diabetesError,
      bp: bpError,
    };

    // Check if any errors exist
    const formIsValid = Object.values(newErrors).every((error) => error === null);
    setErrors(newErrors);

    if (formIsValid) {
      // Handle successful form submission
      console.log('Form submitted successfully:', { name, mobile, age, gender, diabetes, bp });
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Doctor Appointment Form</Text>
        <View style={styles.formGroup}>
          <Text>Patient Name</Text>
          <TextInput
            style={[styles.input, errors.name ? styles.errorBorder : null]}
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>
        <View style={styles.row}>
        <View style={styles.formGroup}>
          <Text>Mobile No.</Text>
          <TextInput
            style={[styles.mediumInput, errors.mobile ? styles.errorBorder : null]}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
          />
          {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text>Age</Text>
          <TextInput
            style={[styles.smallInput, errors.age ? styles.errorBorder : null]}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
        </View>
        </View>
        <View style={styles.formGroup}>
          <Text>Gender</Text>
          <RadioButton.Group onValueChange={value => setGender(value)} value={gender}>
            <View style={styles.radioGroup}>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Male" value="male" />
              </View>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Female" value="female" />
              </View>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Other" value="other" />
              </View>
            </View>
          </RadioButton.Group>
          {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text>Diabetes</Text>
          <Picker
            selectedValue={diabetes}
            onValueChange={(itemValue) => setDiabetes(itemValue)}
            style={[styles.picker, errors.diabetes ? styles.errorBorder : null]}
          >
            <Picker.Item label="Select Diabetes Status" value="" />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
          {errors.diabetes && <Text style={styles.errorText}>{errors.diabetes}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text>BP</Text>
          <Picker
            selectedValue={bp}
            onValueChange={(itemValue) => setBp(itemValue)}
            style={[styles.picker, errors.bp ? styles.errorBorder : null]}
          >
            <Picker.Item label="Select BP Status" value="" />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
          {errors.bp && <Text style={styles.errorText}>{errors.bp}</Text>}
        </View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Take up full screen height
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'aqua', // Optional: background color for the wrapper
  },
  container: {
    width: '90%', // Width of the form container
    padding: 20,
    backgroundColor: 'white', // Background color of the form
    borderRadius: 10, // Optional: rounded corners
    shadowColor: '#000', // Optional: shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center the header text
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  formGroup: {
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row', // Arrange radio buttons in a row
    justifyContent: 'space-around', // Space out radio buttons evenly
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  mediumInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    width: 120, // Adjust the width as needed
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  smallInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    width: 80, // Adjust the width as needed
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  picker: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4, // Optional: rounded corners for pickers
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  errorBorder: {
    borderColor: 'red',
  },
});
