import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Coleta = (props) => {

    const titulo = props.route.params.screen;

    const handleOptionSelect = (option) => {
        props.navigation.navigate('Agradecimento');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.question}>O que você achou do {titulo}?</Text>
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
