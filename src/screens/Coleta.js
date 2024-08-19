import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Coleta = (props) => {

  const pesquisaAtual = useSelector(state => state.pesquisa.pesquisaAtual);
  const eventCollection = collection(db, "resultados");

  const handleOptionSelect = async (option) => {

    // Validando se o nome da pesquisa já existe
    const q = query(eventCollection,
      where('pesquisa', '==', pesquisaAtual.id));
    const querySnapshot = await getDocs(q);


    console.log(querySnapshot.docs[0]);
    try {

      if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0];
        const docEvento = docSnapshot.data();
        const docId = docSnapshot.id;

        switch (option) {
          case 'pessimo':
            docEvento.pessimo = docEvento.pessimo + 1;
            break;
          case 'ruim':
            docEvento.ruim = docEvento.ruim + 1;
            break;
          case 'neutro':
            docEvento.neutro = docEvento.neutro + 1;
            break;
          case 'bom':
            docEvento.bom = docEvento.bom + 1;
            break;
          case 'excelente':
            docEvento.excelente = docEvento.excelente + 1;
            break;
        }

        const docRef = doc(db, 'resultados', docId);
        await updateDoc(docRef, docEvento);
      }

    } catch (error) {
      setErrorNome('Erro ao cadastrar a pesquisa: ' + error.message);
    }


    props.navigation.navigate('Agradecimento');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>O que você achou do {pesquisaAtual.nome}?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionSelect('pessimo')}>
          <Icon name="emoticon-cry-outline" size={50} color="red" />
          <Text style={styles.optionText}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionSelect('ruim')}>
          <Icon name="emoticon-sad-outline" size={50} color="#ff6347" />
          <Text style={styles.optionText}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionSelect('neutro')}>
          <Icon name="emoticon-neutral-outline" size={50} color="#ffd700" />
          <Text style={styles.optionText}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionSelect('bom')}>
          <Icon name="emoticon-happy-outline" size={50} color="chartreuse" />
          <Text style={styles.optionText}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionSelect('excelente')}>
          <Icon name="emoticon-excited-outline" size={50} color="#32cd32" />
          <Text style={styles.optionText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#483d8b',
  },
  question: {
    fontSize: 35,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  optionButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular'
  },
  selectedOption: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});

export default Coleta;
