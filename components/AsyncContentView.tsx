import { ReactNode } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { AsyncState } from "@/hooks/useFetch";
import { ThemedView } from '@/components/Themed/ThemedView';
import { ThemedText } from '@/components/Themed/ThemedText';

interface AsyncContentViewProps<T> extends AsyncState<T> {
  children: (data: T) => ReactNode;
}

export const AsyncContentView = <T,>({
  data,
  loading,
  error,
  children,
}: AsyncContentViewProps<T>) => {
  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.errorText}>Error: {error.message}</ThemedText>
      </ThemedView>
    );
  }

  if (data) {
    return <>{children(data)}</>;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.errorText}>Unknown Error</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: "#bb0000"
  },
});