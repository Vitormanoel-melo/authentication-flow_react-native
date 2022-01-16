import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// importa o context que foi criado
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

export default function App() {

  return(
    <NavigationContainer>

      {/* Tudo que estiver dentro do Provider(Provedor) vai ter acesso as informações contidas nesse contexto */}
      {/* Neste caso, todas as rotas terão acesso à este contexto */}
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
