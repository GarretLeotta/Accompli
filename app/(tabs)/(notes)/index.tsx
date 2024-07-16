import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { ThemedText } from '@/components/Themed/ThemedText';
import { ThemedView } from '@/components/Themed/ThemedView';
import { ThemedLink } from '@/components/Themed/ThemedLink';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Note } from '@/models/note'
import { fetchNotes } from '@/services/noteService';
import { useFetch } from '@/hooks/useFetch';
import { AsyncContentView } from '@/components/AsyncContentView';

export default function Index() {
  const { data, loading, error } = useFetch(fetchNotes, []);

  return (
    <AsyncContentView data={data} loading={loading} error={error}>
      {(data) => (
        <SafeAreaView style={styles.container}>
          <FlatList
            nestedScrollEnabled
            data={ data }
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ThemedLink
                href={{
                  pathname: '/(notes)/details/[id]',
                  params: { id: item.id },
                }}>
                {item.title}
              </ThemedLink>
            )}
          />
        </SafeAreaView>
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
});