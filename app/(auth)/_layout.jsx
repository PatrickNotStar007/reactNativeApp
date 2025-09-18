import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { useUser } from '../../hooks/useUser'

const AuthLayout = () => {
  const {user} = useUser()
  console.log(user);
  
  return (
    <>
        <StatusBar style='auto' />
        <Stack screenOptions={{headerShown: false, animation: 'none'}}/>
    </>
  )
}

export default AuthLayout
