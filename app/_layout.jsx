import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: {backgroundColor: "#ddd"},
        headerTintColor: "#333"
    }}>
        <Stack.Screen name="index" options={{title: "Главная"}}/>
        <Stack.Screen name="about" options={{title: "О сайте"}}/>
        <Stack.Screen name="contact" options={{title: "Контакты"}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})