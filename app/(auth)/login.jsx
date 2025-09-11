import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

    const handleSubmit = () => {
        console.log("форма отправлена");
    }

    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Вход в аккаунт
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{color: "#f2f2f2"}}>Войти</Text>
            </ThemedButton>

            <Spacer />
            <Link href="/register">
                <ThemedText style={{textAlign: "center"}}>
                    Регистрация
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

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
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5
    },
    pressed: {
        opacity: 0.8
    }
})