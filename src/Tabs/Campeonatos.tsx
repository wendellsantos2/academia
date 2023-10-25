import { ScrollView } from 'native-base'

import { CardBotao } from '../componentes/CardBotao'
import { Titulo } from '../componentes/Titulo'
import React from 'react'

export default function Campeonatos(){
  return(
    <ScrollView p="5">
      <Titulo color="black">Campeonatos</Titulo>
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2} mt={3}>Novo campeonato</Titulo>
      <CardBotao 
        imageUrl='https://spasorocaba.com.br/wp-content/uploads/2016/10/Jiu-Jitsu.png' botoesTextos={["Criar campeonato"]}/>
     <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Campeonatos em andamento</Titulo>
      <CardBotao 
        imageUrl='https://spasorocaba.com.br/wp-content/uploads/2016/10/Jiu-Jitsu.png' botoesTextos={["Consultar"]}/>
   
   <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Histórico de campeonatos</Titulo>
      <CardBotao 
        imageUrl='https://spasorocaba.com.br/wp-content/uploads/2016/10/Jiu-Jitsu.png'  botoesTextos={["Consultar campeonato", "Statísticas"]}   /> 
      
    
    </ScrollView>
  )
}