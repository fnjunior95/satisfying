import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';

const ModifySearch = (props) => {

    const [date, setDate] = useState(new Date());
    const [nomePesquisa, setNomePesquisa] = useState('');
    
    const [errorNome, setErrorNome] = useState('');
    const [errorData, setErrorData] = useState('');
    const [sucessoMessage, setSucessoMessage] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const handleModificarPesquisa = (nome, data) => {
        setErrorNome(''); setErrorData('');setSucessoMessage('');
        if(nome != '' && data != '') {
            setSucessoMessage('Nova pesquisa registrada!')
        } else {
        if(nome == '') {
            setErrorNome('Preencha o nome da pesquisa');
        }
        if(data == '') {
            setErrorData('Preencha a data');
        }
        }
    };

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
                    value={nomePesquisa}
                    onChangeText={setNomePesquisa}
                />
                {errorNome ? <Text style={styles.errorMessage}>{errorNome}</Text> : null}

                <Text style={styles.label}>Data</Text>
                <TextInput
                    style={styles.input}
                    value={format(date, 'dd/MM/yyyy')}
                    right={<TextInput.Icon icon="calendar-month" size={35} style={{paddingTop: 10}} onPress={() => setOpen(true)}/>}
                    editable={false}
                />
                <DatePicker
                    title={'Selecione a data'}
                    modal
                    locale='pt'
                    mode='date'
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
                {errorData ? <Text style={styles.errorMessage}>{errorData}</Text> : null}

                <Text style={styles.label}>Imagem</Text>
                <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
                <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
                </TouchableOpacity>
                
                {sucessoMessage ? <Text style={styles.sucessoMessage}>{sucessoMessage}</Text> : null}

            </View>
        
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flexDirection: 'column', flex: 8 }}> 
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleModificarPesquisa(nomePesquisa, format(date, 'dd/MM/yyyy'))}
                        >
                        <Text style={styles.buttonText}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'column', flex: 2 }}>
                    <TouchableOpacity
                        style={styles.btnDelete}
                        onPress={() => setModalVisible(true)}
                        >
                            <Icon name="delete" size={30} color="white" />
                            <Text style={{ color: 'white', fontFamily: 'AveriaLibre-Regular' }}>Apagar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Tem certeza de apagar essa pesquisa?</Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.modalButton, { backgroundColor: 'tomato' }]}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalButtonText}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.modalButton, { backgroundColor: 'darkslateblue' }]}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalButtonText}>CANCELAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'flex-start',
        marginHorizontal: 160,
        fontFamily: 'AveriaLibre-Regular'
    },
    input: {
        width: '60%',
        backgroundColor: 'white',
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontFamily: 'AveriaLibre-Regular'
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
        marginHorizontal: 160
    },
    button: {
        backgroundColor: 'green',
        width: '77%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 157,
        borderRadius: 10,
        fontFamily: 'AveriaLibre-Regular'
    },
    btnDelete: {
        flexDirection: 'column',
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
    },
    errorMessage: {
        color: 'tomato',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular'
    },
    sucessoMessage: {
        color: 'limegreen',
        marginBottom: 1,
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
    modal: {
        marginHorizontal: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#6A5ACD',
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'AveriaLibre-Regular'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
});

export default ModifySearch;
