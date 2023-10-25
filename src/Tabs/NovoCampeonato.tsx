// NovoCampeonato.tsx

import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function NovoCampeonato() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput placeholder="Nome da Competição" />
      <TextInput placeholder="Data" />
      <TextInput placeholder="Aluno" />
      <Button title="Salvar" onPress={() => {/* lógica de salvamento */}} />
    </View>
  );
}
