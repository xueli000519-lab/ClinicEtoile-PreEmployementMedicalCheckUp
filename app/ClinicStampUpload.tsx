import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ClinicStamp = () => {
  const [file, setFile] = useState<{ name: string; uri: string } | null>(null);
  const [dragOver, setDragOver] = useState(false);

  // Mobile: file picker
  const handlePick = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
      copyToCacheDirectory: true,
    });

    if (!result.canceled && result.assets?.[0]) {
      const asset = result.assets[0];
      setFile({ name: asset.name, uri: asset.uri });
    }
  };

  // Web: drag and drop handlers
  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer?.files?.[0];
    if (dropped) {
      const uri = URL.createObjectURL(dropped);
      setFile({ name: dropped.name, uri });
    }
  };

  return (
    <View
      // @ts-ignore - web-only props
      onDrop={handleDrop}
      onDragOver={(e: any) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      style={[styles.dropZone, dragOver && styles.dragOver]}
    >
      {file ? (
        <View style={styles.preview}>
          {/* Show image preview if it's an image */}
          {file.uri && (file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) ? (
            <Image source={{ uri: file.uri }} style={styles.image} />
          ) : (
            <Text style={styles.fileName}>📄 {file.name}</Text>
          )}
          <TouchableOpacity onPress={() => setFile(null)}>
            <Text style={styles.remove}>✕ Remove</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handlePick} style={styles.inner}>
          <Text style={styles.icon}>⬆</Text>
          <Text style={styles.mainText}>Drag & drop or tap to upload</Text>
          <Text style={styles.subText}>PNG, JPG, PDF up to 10MB</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropZone: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 6,
    padding: 24,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  dragOver: {
    borderColor: '#3182ce',
    backgroundColor: '#ebf4ff',
  },
  inner: {
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    fontSize: 28,
  },
  mainText: {
    fontSize: 14,
    color: '#555',
  },
  subText: {
    fontSize: 11,
    color: '#999',
  },
  preview: {
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  fileName: {
    fontSize: 13,
    color: '#333',
  },
  remove: {
    fontSize: 12,
    color: '#e53e3e',
    marginTop: 4,
  },
});

export default ClinicStamp;