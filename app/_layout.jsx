import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
const colorScheme = useColorScheme();
const theme = Colors[colorScheme];

return (
  <>
    <StatusBar value="auto"/>
    <Stack screenOptions={{
      headerStyle: {backgroundColor: theme.background},
      headerTintColor: theme.title
    }}>
        {/* <Stack.Screen name="(auth)" options={{headerShown: false}}/> */}

        <Stack.Screen name="index" options={{title: "Главная"}}/>
        <Stack.Screen name="about" options={{title: "О сайте"}}/>
        <Stack.Screen name="contact" options={{title: "Контакты"}}/>
    </Stack>
  </>
)
}

export default RootLayout

const styles = StyleSheet.create({})