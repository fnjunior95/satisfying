import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const Relatorio = (props) => {
    const pesquisaAtual = useSelector(state => state.pesquisa.pesquisaAtual);
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const eventCollection = collection(db, "resultados");
                const q = query(eventCollection, where('pesquisa', '==', pesquisaAtual.id));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const docSnapshot = querySnapshot.docs[0];
                    const docEvento = docSnapshot.data();
                    
                    console.log(docEvento);


                    const newData = [
                        { name: 'Excelente', population: docEvento.excelente || 0, color: 'yellow', legendFontColor: 'white', legendFontSize: 15 },
                        { name: 'Bom', population: docEvento.bom || 0, color: 'blue', legendFontColor: 'white', legendFontSize: 15 },
                        { name: 'Neutro', population: docEvento.neutro || 0, color: 'green', legendFontColor: 'white', legendFontSize: 15 },
                        { name: 'Ruim', population: docEvento.ruim || 0, color: 'tomato', legendFontColor: 'white', legendFontSize: 15 },
                        { name: 'Péssimo', population: docEvento.pessimo || 0, color: 'lightskyblue', legendFontColor: 'white', legendFontSize: 15 },
                    ];

                    setDados(newData);
                }
            } catch (error) {
                console.error("Erro ao buscar os dados: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pesquisaAtual.id]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="lightblue" />
                </TouchableOpacity>
                <Text style={styles.title}>Relatório - {pesquisaAtual.nome}</Text>
            </View>

            <View style={styles.content}>
                <PieChart
                    data={dados}
                    width={350}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                    fontFamily='AveriaLibre-Regular'
                />
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
        marginBottom: 15,
        backgroundColor: 'darkslateblue',
        height: 60,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 35,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'AveriaLibre-Regular'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
    },
});

export default Relatorio;
