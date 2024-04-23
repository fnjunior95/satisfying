import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { format } from 'date-fns';

const NovaPesquisa = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [nomePesquisa, setNomePesquisa] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: 'darkslateblue', height: 80 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: 'white', marginLeft: 10 }}>Nova pesquisa</Text>
      </View>
      
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
       
        <TextInput
          style={{ width: '80%', marginBottom: 5, backgroundColor: 'white', height: 40, paddingHorizontal: 10 }}
          placeholder="Preencha o nome da pesquisa"
          value={nomePesquisa}
          onChangeText={setNomePesquisa}
        />
      
        <TextInput
          style={{width: '80%', marginBottom: 5, backgroundColor: 'white', height: 40, paddingHorizontal: 10 }}
          placeholder="Preencha a data"
          value={format(date, 'dd/MM/yyyy')}
          right={<TextInput.Icon icon="calendar"/>}
          onChangeText={setDate}
        />

        <TouchableOpacity style={{ backgroundColor: 'white', height: 60, width: '50%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginBottom: 20  }}>
          <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{ backgroundColor: 'green', width: '80%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
          onPress={() => console.log('Cadastrar')}
        >
          <Text style={{ fontSize: 18, color: 'white' }}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NovaPesquisa;
