import React, { useContext } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import AuthContext from '../contexts/auth'

export const Routes = () => {

    const { signed, loading } = useContext(AuthContext)

    if(loading) {
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#999" />
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})