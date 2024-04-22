import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {

    // Simulação de dados de pesquisa
    const researchData = [
        { title: 'SECOMP 2023', date: '10/10/2023' },
        { title: 'UBUNTU 2022', date: '05/06/2022' },
        { title: 'MENINAS CPU', date: '01/04/2022' }
    ];

    return (
        
        <View style={{ flex: 1, backgroundColor: '#6A5ACD', padding: 20 }}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <TextInput
            style={{ flex: 1, height: 40, backgroundColor: 'white', paddingHorizontal: 10 }}
            placeholder="Insira o termo de busca..."
            />
            <TouchableOpacity style={{ marginLeft: 10 }}>
            </TouchableOpacity>
        </View>

        
        <ScrollView
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            style={{ marginBottom: 20 }} 
        >
            {researchData.map((research, index) => (
            <TouchableOpacity 
                key={index}
                style={{ backgroundColor: 'white', marginRight: 10, padding: 15, borderRadius: 10 }}
                onPress={() => console.log('Pesquisa selecionada:', research.title)} >
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{research.title}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>{research.date}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>

        
        <TouchableOpacity
            style={{ backgroundColor: '#00FF7F', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
            //onPress={handleNewResearch} // Chama a função handleNewResearch ao pressionar o botão
            >
            <Text style={{ fontSize: 18, color: 'white' }}>NOVA PESQUISA</Text>
        </TouchableOpacity>
        </View>
    );
};

export default Home;
