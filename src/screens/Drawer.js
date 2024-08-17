import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const DrawerNavigator = createDrawerNavigator();

const Drawer = (props) => {
  
  const email = props.route.params.email;
  const signOutUser = () => {
    signOut(auth)
      .then(() => {props.navigation.popToTop()})
      .catch((error) => {
        console.error('Erro ao fazer logout', error);
  })
  };
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerActiveTintColor: 'darkslateblue',
        headerTitleStyle: {
          fontSize: 35,
          color: 'white',
          marginLeft: 10,
          fontFamily: 'AveriaLibre-Regular'
        },
        drawerLabelStyle: { fontSize: 50, color: 'white', fontFamily: 'AveriaLibre-Regular' },
        drawerStyle: { backgroundColor: 'darkslateblue', width: '40%', fontFamily: 'AveriaLibre-Regular' },
        headerBackground: () => (
          <View style={{
            alignItems: 'center',
            marginBottom: 5,
            backgroundColor: 'darkslateblue',
            height: 60,
            paddingHorizontal: 20
          }} />
        ),
      }}

      drawerContent={(props) =>

        <DrawerContentScrollView {...props}>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>{email}</Text>
          </View>
          <View style={styles.separator}></View>
          <DrawerItem icon={({ focused, color, size }) => (
            <Icon
              name="description"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          )} labelStyle={{ color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular' }} label="Pesquisas" onPress={() => { props.navigation.goBack() }} />

          <DrawerItem style={styles.sair} icon={({ focused, color, size }) => (
            <Icon
              name="login"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          )} labelStyle={styles.labelSair} label="Sair" onPress={signOutUser} />
        </DrawerContentScrollView>

      }>
      <DrawerNavigator.Screen name="Pesquisas" component={Home} />

    </DrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  emailContainer: {
    paddingVertical: 20,
  },
  emailText: {
    fontSize: 25,
    color: 'white',
    marginBottom: 5,
    marginLeft: 25,
    fontFamily: 'AveriaLibre-Regular',
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginHorizontal: 25,
  },
  labelSair: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AveriaLibre-Regular',
  },
  sair: {
    marginTop: 135,
  }
});

export default Drawer;