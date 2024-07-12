import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Details of note {id} </ThemedText>
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
