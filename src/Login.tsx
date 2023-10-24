import React from 'react';
import { VStack, Text, Box, Link } from 'native-base';
import { TouchableOpacity, ImageBackground } from 'react-native';

 
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';

export default function Login({ navigation }: any) {
  return (
    <ImageBackground source={require('./assets/LogoLogin.png')} style={{flex: 1}}>
      <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
        
       

        <Titulo children={undefined}>Faça login em sua conta</Titulo>

        <Box>
          <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
          <EntradaTexto label="Senha" placeholder="Insira sua senha" />
        </Box>

        <Botao onPress={() => navigation.navigate('Tabs')} children={undefined}>Entrar</Botao>

        <Link href='https://www.alura.com.br' mt={2}>
          Esqueceu sua senha?
        </Link>

        <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
          <Text>Ainda não tem cadastro? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text color="blue.500">Faça seu cadastro!</Text>
          </TouchableOpacity>
        </Box>
      </VStack>
    </ImageBackground>
  );
}
