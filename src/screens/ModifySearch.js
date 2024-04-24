import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import {launchCamera, launchImageLibrary, ImageLibraryOptions} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';

const ModifySearch = (props) => {

    const titulo = props.route.params.screen;
    const data = props.route.params.date;

    const [date, setDate] = useState(new Date());
    const [nomePesquisa, setNomePesquisa] = useState('');

    if(data != '') {
        setDate(Date.parse(data))
    }

    const handleImagePicker = () => {
        Alert.alert(
        "Selecione",
        "Informe de onde voce quer pegar a foto",
        [
            {
            text: "Galeria",
            onPress: () => pickImageFromGalery(),
            style: "default"
            },
            {
            text: "Camera",
            onPress: () => pickImageFromCamera(),
            style: "default"
            }
        ],
        {
            cancelable: true
        }
        )
    }

    const pickImageFromGalery = async () => {
        const result = await launchImageLibrary(options={mediaType: 'photo'});
    }

    const pickImageFromCamera = async () => {
        const result = await launchCamera(options={mediaType: 'photo'});
    }

    return (
        <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.pop()}>
            <Icon name="arrow-back" size={30} color="lightblue" />
            </TouchableOpacity>
            <Text style={styles.title}>Modificar pesquisa</Text>
        </View>
        
        <View style={styles.content}>
        
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Preencha o nome da pesquisa"
                value={titulo ?? nomePesquisa}
                onChangeText={setNomePesquisa}
            />

            <Text style={styles.label}>Data</Text>
            <TextInput
                style={styles.input}
                value={format(data, 'dd/MM/yyyy')}
                right={<TextInput.Icon icon="calendar-month" size={35} style={{paddingTop: 10}} onPress={() => setOpen(true)}/>}
                editable={false}
            />
            <DatePicker
                title={'Selecione a data'}
                modal
                locale='pt'
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />

            <Text style={styles.label}>Imagem</Text>
            <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
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
        height: 65,
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
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 5
      },
      imageButton: {
        backgroundColor: 'white',
        height: 55,
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
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 20,
        color: 'white',
      },
});

export default ModifySearch;
