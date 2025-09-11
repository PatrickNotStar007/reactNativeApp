import { Image, useColorScheme, View } from 'react-native'

import DarkLogo from "../assets/img/logo_dark.png"
import LightLogo from "../assets/img/logo_light.png"

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === "light" ? LightLogo : DarkLogo 

    return (
        <Image source={logo} {...props} style={{height: 150, width: 120}}/>
  )
}

export default ThemedLogo
