import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user} = useUser()

    const handleSubmit = () => {
        console.log("current user: ", user);
        console.log("форма отправлена", email, password);
    }

    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Вход в аккаунт
            </ThemedText>

            <ThemedTextInput
                style={{width: '80%', marginBottom: 20}}
                placeholder='Email'
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />

            <ThemedTextInput
                style={{width: '80%', marginBottom: 20}}
                placeholder='Password'
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

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