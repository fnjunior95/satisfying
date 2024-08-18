import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import uuid from 'react-native-uuid';
import { id } from 'date-fns/locale';

const NovaPesquisa = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorData, setErrorData] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const eventCollection = collection(db, "eventos");  // Criando referência para a coleção "eventos"

  const handleCadastroPesquisa = async () => {

    setErrorNome(''); setErrorData(''); setSucessoMessage('');
    
    if (nomePesquisa != '' && date != '') {
      if (imageUri) {
        const imageUrl = await uploadImage(imageUri);
        console.log('URL da Imagem:', imageUrl);
      }
      setSucessoMessage('Nova pesquisa registrada!')
    } else {
      if (nomePesquisa == '') {
        setErrorNome('Preencha o nome da pesquisa');
      }
      if (date == '') {
        setErrorData('Preencha a data');
      }
    }

    const docEvento = {
      id: uuid.v4(),
      nome: nomePesquisa,
      data: format(date, 'dd/MM/yyyy'),
      imageUri: imageUri || null,
    };

    try {
      const docRef = await addDoc(eventCollection, docEvento);
      setSucessoMessage('Nova pesquisa registrada! ID: ' + docRef.id);
    } catch (error) {
      setErrorNome('Erro ao cadastrar a pesquisa: ' + error.message);
    }
  };

  const handleImagePicker = () => {
    Alert.alert(
      "Selecione",
      "Informe de onde você quer pegar a foto",
      [
        {
          text: "Galeria",
          onPress: () => pickImageFromGallery(),
          style: "default"
        },
        {
          text: "Câmera",
          onPress: pickImageFromCamera,
          style: "default"
        }
      ],
      {
        cancelable: true
      }
    );
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const filename = `${nomePesquisa}_${Date.now()}.jpg`;
      const storageRef = ref(storage, `images/${filename}`);
      await uploadBytes(storageRef, blob);
      const downloadUrl = await getDownloadURL(storageRef);
      return downloadUrl;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      return null;
    }
  };

  const pickImageFromGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const pickImageFromCamera = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Nova pesquisa</Text>
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
          right={<TextInput.Icon icon="calendar-month" size={35} style={{ paddingTop: 10 }} onPress={() => setOpen(true)} />}
          editable={false}
        />
        <DatePicker
          title={'Selecione a data'}
          modal
          locale='pt'
          mode='date'
          open={open}
          date={date}
          onConfirm={(selectedDate) => {
            setOpen(false);
            setDate(selectedDate);
          }}
          onCancel={() => setOpen(false)}
        />

        {errorData ? <Text style={styles.errorMessage}>{errorData}</Text> : null}

        <Text style={styles.label}>Imagem</Text>
        {/* <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
          <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
          )}
        </TouchableOpacity>
        
        {sucessoMessage ? <Text style={styles.sucessoMessage}>{sucessoMessage}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handleCadastroPesquisa}
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
  input: {
    width: '60%',
    marginBottom: 2,
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
    marginHorizontal: 160,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#37BD6D',
    width: '60%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },
});

export default NovaPesquisa;
