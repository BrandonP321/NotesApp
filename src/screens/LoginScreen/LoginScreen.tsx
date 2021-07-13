import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { RouteNames } from '../../utils/RouteNames'
import styles from "./LoginScreenStyles";

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

const LoginScren = (props: Props) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={() => props.navigation.navigate(RouteNames.Test)} title="Go to Test"/>
        </View>
    )
}

export default LoginScren
