import React, { useContext } from "react";
import { View, Button, StyleSheet } from 'react-native'

import AuthContext from "../../contexts/auth";

export const SignIn = () => {

    // armazena as informações que estão no contexto
    const { signed, user, signIn } = useContext(AuthContext)

    console.log(signed)
    // console.log(user)

    const handleSignIn = async () => {
        signIn()
    }

    return(
        <View style={styles.container}>
            <Button title="Sign In" onPress={handleSignIn}/>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})