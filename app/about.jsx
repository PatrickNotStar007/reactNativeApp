import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors';

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>О сайте</Text>

      <Link href="/" style={styles.link}>На главную</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
  },

    title: {
        fontWeight: 'bold',
        fontSize: 18
  },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})