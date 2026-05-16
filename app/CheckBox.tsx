import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const YesCheckbox = ({ onChange }: { onChange?: (val: boolean) => void }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity style={styles.container} 
    onPress={() => {
      const newValue = !checked;
      setChecked(newValue);
      onChange?.(newValue);  // 👈 pass the new boolean value
    }}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.tick}>✓</Text>}
      </View>
      <Text style={styles.label}>Yes</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#3182ce',
    borderColor: '#3182ce',
  },
  tick: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
});

export default YesCheckbox;