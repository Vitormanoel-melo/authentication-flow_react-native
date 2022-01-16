import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as auth from '../services/Authentication/auth'
import api from '../services/apis/api';

// Cria um context
const AuthContext = createContext({ signed: Boolean, token: '', user: {}, loading: Boolean, signIn: () => {}, signOut: () => {} });

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getStorageData() {
            // utilizar multiget

            const storagedToken = await AsyncStorage.getItem('RN-auth:token')
            const storagedUser = await AsyncStorage.getItem('RN-auth:user')   

            if(storagedToken && storagedUser) {
                setUser(JSON.parse(storagedUser))

                // quando o usuário entrar na aplicação novamente, salva o header com o token outra vez 
                // salva o token para que toda requisição a partir de agora envie um header com o token 
                api.defaults.headers.Authorization = `Bearer ${storagedUser}`
            }

            // await new Promise((resolve) => setTimeout(resolve, 2000))

            setLoading(false)
        }

        getStorageData()
    }, [])

    // função para efetuar o login
    const signIn = async () => {
        const response = await auth.signIn()

        const { token, user } = response;

        setUser(user);
        
        // salva o token para que toda requisição a partir de agora envie um header com o token 
        api.defaults.headers.Authorization = `Bearer ${token}`

        await AsyncStorage.setItem('RN-auth:token', token)
        await AsyncStorage.setItem('RN-auth:user', JSON.stringify(user))
    }

    const signOut = async () => {

        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return(
                                        // se existir algo dentro do user
                                        // retorna true, se não, false  
        <AuthContext.Provider value={{signed: !!user, token: '', user: user, loading: loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

// função para acessar os dados do context
export function useAuth() {
    const context = useContext(AuthContext)

    return context
}