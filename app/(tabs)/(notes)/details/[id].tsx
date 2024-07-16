import React, { useEffect, useState, useMemo } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText';
import { ThemedTextInput } from '@/components/Themed/ThemedTextInput';
import { ThemedView } from '@/components/Themed/ThemedView';
import { fetchNote } from '@/services/noteService';
import { Note } from '@/models/note';
import { useFetch } from '@/hooks/useFetch';
import { AsyncContentView } from '@/components/AsyncContentView';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  //TODO: I don't like this
  const rId = useMemo(() => (Array.isArray(id) ? id[0] : id || ''), [id]);
  const { data, loading, error } = useFetch(() => fetchNote(rId), [rId]);

  const [textInputVal, setTextInputVal] = useState<string>('');
  useEffect(() => {
    if (data) {
      setTextInputVal(data.content);
    }
  }, [data]);
  const navigation = useNavigation();

  return (
    <AsyncContentView data={data} loading={loading} error={error}>
      {(data) => (
        <ThemedView style={styles.container}>
          <ThemedTextInput
            style={styles.input}
            multiline
            onChangeText={setTextInputVal}
            value={textInputVal}
          />
        </ThemedView>
      )}
    </AsyncContentView>
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
