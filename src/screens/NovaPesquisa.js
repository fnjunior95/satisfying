import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';

const NovaPesquisa = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [nomePesquisa, setNomePesquisa] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Nova pesquisa</Text>
      </View>
      
      <View style={styles.content}>
       
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Preencha o nome da pesquisa"
          value={nomePesquisa}
          onChangeText={setNomePesquisa}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={format(date, 'dd/MM/yyyy')}
          right={<TextInput.Icon icon="calendar" size={35}/>}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Imagem</Text>
        <TouchableOpacity style={styles.imageButton}>
          <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Cadastrar')}
        >
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'darkslateblue',
    height: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    color: 'white',
    marginLeft: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: 160,
  },
  input: {
    width: '60%',
    marginBottom: 2,
    backgroundColor: 'white',
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  imageButton: {
    backgroundColor: 'white',
    height: 60,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 160,
  },
  button: {
    backgroundColor: 'green',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default NovaPesquisa;
