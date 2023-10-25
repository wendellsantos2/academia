import { VStack, Image, Box, ScrollView, Text, Divider, Flex } from "native-base";
import Logo from '../assets/Logo.png';
 
import { Titulo } from "../componentes/Titulo";
import { financeiros } from "../utils/mock";
import React from "react";

export default function Principal() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" />
        <Titulo color="blue.500">Boas-vindas!</Titulo>

        <Titulo color="blue.800" alignSelf="center">Financeiro</Titulo>
        <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
          {
            financeiros.map(financeiro => (
              <Box key={financeiro.id} w="48%" borderRadius="lg" p={3} bgColor="gray.100" marginY={2}>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{financeiro.titulo}</Text>
              </Box>
            ))
          }
        </Flex>
        <Titulo color="blue.800" alignSelf="center">Alunos</Titulo>
        <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
          {
            financeiros.map(financeiro => (
              <Box key={financeiro.id} w="48%" borderRadius="lg" p={3} bgColor="gray.100" marginY={2}>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{financeiro.titulo}</Text>
              </Box>
            ))
          }
        </Flex>
        <Titulo color="blue.800" alignSelf="center">Campeonatos</Titulo>
        <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
          {
            financeiros.map(financeiro => (
              <Box key={financeiro.id} w="48%" borderRadius="lg" p={3} bgColor="gray.100" marginY={2}>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{financeiro.titulo}</Text>
              </Box>
            ))
          }
        </Flex>
      </VStack>
    </ScrollView>
  );
}
