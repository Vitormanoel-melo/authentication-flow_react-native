import React, { useContext } from "react";
import { View, Button, StyleSheet, Text } from 'react-native'

import AuthContext, { useAuth } from "../../contexts/auth";

export const Dashboard = () => {

    const { user, signOut } = useAuth()

    const handleSignOut = async () => {
        signOut()
    }

    return(
        <View style={styles.container}>
            {/* só mostra o nome se user não for null */}
            <Text>{user?.nome}</Text>
            <Button title="Sign out" onPress={handleSignOut}/>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})