import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
    const handleSubmit = () => {
        console.log("форма отправлена");
    }

  return (
    <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Регистрация
        </ThemedText>

        <ThemedButton onPress={handleSubmit}>
            <Text style={{color: "#f2f2f2"}}>Регистрация</Text>
        </ThemedButton>

        <Spacer />
        <Link href="/login">
            <ThemedText style={{textAlign: "center"}}>
                Войти
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    }
})