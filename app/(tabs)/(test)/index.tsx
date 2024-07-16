import React, { useEffect, useState } from 'react';
import { Button, Alert, StyleSheet } from "react-native";
import { ThemedTextInput } from '@/components/Themed/ThemedTextInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Note } from '@/models/note'
import { fetchNotes } from '@/services/noteService';

export default function Index() {
  const [name, onChangeName] = React.useState('Name');
  const [age, onChangeAge] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ThemedTextInput
        style={styles.input}
        multiline
        onChangeText={onChangeName}
        value={name}
      />
      <ThemedTextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Age"
        keyboardType="numeric"
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert(`${name}: ${age}`)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'stretch',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#2b302d"
  },
});
