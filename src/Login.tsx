import React from 'react';
import { VStack, Text, Box, Link } from 'native-base';
import { TouchableOpacity, ImageBackground } from 'react-native';
 
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';

export default function Login({ navigation }: any) {
  return (
    <ImageBackground source={require('./assets/LogoLogin.png')} style={{flex: 1}}>
 
      <Box flex={1} backgroundColor="rgba(0, 0, 0, 0.5)">
        <VStack flex={1} alignItems="center" justifyContent="center" p={5}>

          <Titulo style={{color: 'white'}}>Faça login em sua conta</Titulo>

          <Box>
            <Text color='white'>Email</Text>
            <EntradaTexto  placeholder="Insira seu endereço de e-mail" />
            <Text color='white'>Email</Text>
            <EntradaTexto placeholder="Insira sua senha" />
          </Box>

          <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

          <Link href='https://www.alura.com.br' mt={2}>
              <Text style={{color: 'white'}}>Esqueceu sua senha?</Text>
          </Link>

          <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
            <Text style={{color: 'white'}}>Ainda não tem cadastro? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text color="blue.500">Faça seu cadastro!</Text>
            </TouchableOpacity>
          </Box>

        </VStack>
      </Box>
    </ImageBackground>
  );
}
