import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>ДонНТУ</ThemedText>

      <Spacer height={10}/>
      <ThemedText>Типа приложение</ThemedText>
      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Войти в аккаунт</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Зарегистрироваться</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Профиль</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

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
  },

  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0, 0, 0, 0.1)'
  }
})