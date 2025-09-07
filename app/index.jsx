import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>ДонНТУ</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>Типа приложение</Text>

      {/* <View style={styles.card}>
        <Text>Прив</Text>
      </View> */}

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Контакты</Link>
    </View>
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

  img: {
    height: 100,
    width: 70,
    marginVertical: 20,
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