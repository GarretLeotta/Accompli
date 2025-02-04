import React from 'react';
import { Stack } from "expo-router";

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: "Notes" }} />
    </Stack>
  );
}
