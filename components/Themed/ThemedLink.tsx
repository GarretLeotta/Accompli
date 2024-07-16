import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { useThemeColor } from '@/hooks/useThemeColor';

//typescript is kind of annoying, where is type(LinkProps) ???
export type ThemedLinkProps = {
  style?: any;
  href: any;
  children: any;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedLink({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedLinkProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Link
      style={[
        { color },
        style
      ]}
      {...rest}
    />
  );
}
