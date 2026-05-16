import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const DatePicker = ({onChange}:{onChange?:(val:string) => void}) => { 
  const [date, setDate] = useState<Date | null>(null);
  const [textValue, setTextValue] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  // format Date object → DD/MM/YYYY string
  const formatDate = (d: Date) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // validate and parse typed input
  const handleTextChange = (text: string) => {
    // auto-insert slashes as user types
    let formatted = text.replace(/[^0-9]/g, '');
    if (formatted.length > 2) formatted = formatted.slice(0, 2) + '/' + formatted.slice(2);
    if (formatted.length > 5) formatted = formatted.slice(0, 5) + '/' + formatted.slice(5);
    if (formatted.length > 10) return; // cap at DD/MM/YYYY

    setTextValue(formatted);
    setError('');

    // validate when full date is typed
    if (formatted.length === 10) {
      const [day, month, year] = formatted.split('/').map(Number);
      const parsed = new Date(year, month - 1, day);
      const isValid =
        parsed.getFullYear() === year &&
        parsed.getMonth() === month - 1 &&
        parsed.getDate() === day &&
        parsed <= new Date();

      if (isValid) {
        setDate(parsed);
        setError('');
        onChange?.(formatted)
      } else {
        setError('Please enter a valid date (DD/MM/YYYY)');
      }
    }
  };


  return (
    <View>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          value={textValue}
          onChangeText={handleTextChange}
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
          maxLength={10}
        />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 14,
    color: '#999',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    paddingVertical: 10,
    paddingLeft: 15,
    marginVertical: 10,
    width: '60%',
    outlineWidth:0,
  },
  inputError: {
    borderColor: '#e53e3e',
  },
  errorText: {
    color: '#e53e3e',
    fontSize: 11,
    marginTop: 4,
  },
});

export default DatePicker;