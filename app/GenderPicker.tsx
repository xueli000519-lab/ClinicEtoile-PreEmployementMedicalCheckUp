import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GENDERS = ['Male', 'Female', 'Prefer not to say'];

const GenderPicker = ({ onChange }: { onChange?: (val: string) => void }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        {GENDERS.map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.option,
              selected === gender && styles.optionSelected,
            ]}
            onPress={() => {setSelected(gender);
              onChange?.(gender);
            }}
          >
            <Text
              style={[
                styles.optionText,
                selected === gender && styles.optionTextSelected,
              ]}
            >
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:12,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  options: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  optionSelected: {
    borderColor: '#185FA5',
    backgroundColor: '#E6F1FB',
  },
  optionText: {
    fontSize: 14,
    color: '#666',
  },
  optionTextSelected: {
    color: '#185FA5',
    fontWeight: '500',
  },
});

export default GenderPicker;