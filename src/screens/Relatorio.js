import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Relatorio = (props) => {
  const data = [
    { name: 'Excelente', population: 25, color: 'yellow', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Bom', population: 20, color: 'lightskyblue', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Neutro', population: 15, color: 'green', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Ruim', population: 10, color: 'tomato', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Péssimo', population: 5, color: 'darkturquoise', legendFontColor: 'white', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-back" size={30} color="lightblue" />
            </TouchableOpacity>
            <Text style={styles.title}>Relatorio</Text>
        </View>

        <View style={styles.content}>
            <PieChart
                data={data}
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
});

export default Relatorio;
