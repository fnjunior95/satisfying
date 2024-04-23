import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Home = (props) => {

    // Simulação de dados de pesquisa
    const researchData = [
        { title: 'SECOMP 2023', date: '10/10/2023' },
        { title: 'UBUNTU 2022', date: '05/06/2022' },
        { title: 'MENINAS CPU', date: '01/04/2022' }
    ];

    const showNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const showAcoesPesquisa = (pesqisaSelecionada) => {
        props.navigation.navigate('AcoesPesquisa', { screen: pesqisaSelecionada })
    }

    return (
        
        <View style={styles.container}>
        
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o termo de busca..."
                />
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
                        onPress={() => {showAcoesPesquisa(research.title)}} >
                        <Text style={styles.title}>{research.title}</Text>
                        <Text style={styles.date}>{research.date}</Text>
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
    input: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
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
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        color: 'gray',
    },
    button: {
        backgroundColor: 'green',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
    },
});

export default Home;
