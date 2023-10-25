import { Text, Image, VStack, Box, HStack } from 'native-base'
import { Botao } from './Botao'
import React from 'react';

interface CardProps {

  imageUrl: string;
  botoesTextos: string[]; // Lista de textos dos botões
}

export function CardBotao({

  imageUrl,
  botoesTextos
}: CardProps) {
  return (
    <VStack w="100%" borderRadius="lg" shadow="2" mb={5} overflow="hidden">
      <Image source={{ uri: imageUrl }} alt="Imagem do Card" width="100%" height={150} />
      <Box p="5">
      
        <VStack mt={4} space={1} alignItems="center"> 
          {
            botoesTextos.map((texto, index) => (
              <Botao key={index}>
                {texto}
              </Botao>
            ))
          }
        </VStack>

      </Box>
    </VStack>
  )
}
