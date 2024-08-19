import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {setPesquisaAtual} from '../redux/slices/pesquisaSlice';

const Home = (props) => {

    const dispatch = useDispatch();

    const [researchData, setResearchData] = useState([]);

    const fetchPesquisas = useCallback(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "pesquisas"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setResearchData(data);
        } catch (error) {
            console.error("Erro ao recuperar documentos: ", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchPesquisas();
        }, [fetchPesquisas])
    );

    const showNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa');
    };

    const showAcoesPesquisa = (pesquisa) => {
        dispatch(setPesquisaAtual(pesquisa));
        props.navigation.navigate('AcoesPesquisa');
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Image source={require('../../assets/icons/search-icon.png')} style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o termo de busca..."
                    />
                </View>
                <TouchableOpacity style={styles.searchButton}>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollContainer}
            >
                {researchData.map((research, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.researchCard}
                        onPress={() => { showAcoesPesquisa(research) }} >
                        {research.imageUri && (
                            <Image
                                source={{ uri: research.imageUri }}
                                style={styles.cardImage}
                                resizeMode="contain"
                            />
                        )}
                        <Text style={[styles.title, { color: '#3F92C5' }]}>{research.nome}</Text>
                        <Text style={styles.date}>{research.data}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={showNovaPesquisa} >
                <Text style={styles.buttonText}>NOVA PESQUISA</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A5ACD',
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontFamily: 'AveriaLibre-Regular',
    },
    searchButton: {
        marginLeft: 10,
    },
    scrollContainer: {
        marginBottom: 20,
    },
    researchCard: {
        backgroundColor: 'white',
        marginRight: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: 50,
        height: 50,
        maxWidth: 50, // Defina um tamanho máximo
        maxHeight: 50, // Defina um tamanho máximo
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'AveriaLibre-Regular',
    },
    date: {
        fontSize: 16,
        color: 'gray',
        fontFamily: 'AveriaLibre-Regular',
    },
    button: {
        backgroundColor: '#37BD6D',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 0,
        marginLeft: 10
    },
});

export default Home;
