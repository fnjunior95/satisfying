import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisa = ( screen ) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50, backgroundColor: 'darkslateblue', height: 80 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Icon name="arrow-back" size={30} color="lightblue" />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, color: 'white', marginLeft: 10 }}>{screen}</Text>
        </View>
        
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
            <Icon name="edit" size={30} color="white" />
            <Text style={styles.buttonText}>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Icon name="check" size={30} color="white" />
            <Text style={styles.buttonText}>Coletar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Icon name="assessment" size={30} color="white" />
            <Text style={styles.buttonText}>Relatório</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'darkslateblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '30%',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AcoesPesquisa;
