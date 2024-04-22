import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const NovaPesquisa = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD', padding: 20 }}>
      <Text style={{ fontSize: 24, color: 'white', marginBottom: 20 }}>Nova pesquisa</Text>
      {/* Campo Nome */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', marginBottom: 5 }}>Nome</Text>
        <TextInput
          style={{ backgroundColor: 'white', height: 40, paddingHorizontal: 10 }}
          placeholder="Preencha no nome da pesquisa"
        />
      </View>
      {/* Campo Data */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', marginBottom: 5 }}>Data</Text>
        <TextInput
          style={{ backgroundColor: 'white', height: 40, paddingHorizontal: 10 }}
          placeholder="Preencha a data"
        />
      </View>
      {/* Campo Imagem */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', marginBottom: 5 }}>Imagem</Text>
        <TouchableOpacity style={{ backgroundColor: 'white', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
        </TouchableOpacity>
      </View>
      {/* Botão Cadastrar */}
      <TouchableOpacity
        style={{ backgroundColor: '#00FF7F', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
        onPress={() => console.log('Cadastrar')}
      >
        <Text style={{ fontSize: 18, color: 'white' }}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NovaPesquisa;
