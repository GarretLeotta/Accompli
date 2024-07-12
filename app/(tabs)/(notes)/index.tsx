import { Link } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedLink } from '@/components/ThemedLink';

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Notes Go Below Here</ThemedText>
      <ThemedLink href="/(notes)/details/1">Note 1</ThemedLink>
      <ThemedLink href="/(notes)/details/2">Note 2</ThemedLink>
      <ThemedLink href="/(notes)/details/3">Note 3</ThemedLink>
      <ThemedLink
        href={{
          pathname: '/(notes)/details/[id]',
          params: { id: 'bacon' },
        }}>
        Note Bacon
      </ThemedLink>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});