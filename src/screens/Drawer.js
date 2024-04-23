import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigator = createDrawerNavigator();

const Drawer = (props) => {

  const email = props.route.params.email;

  return (
    <DrawerNavigator.Navigator
      screenOptions={{ 
        drawerActiveTintColor: 'darkslateblue',
        headerTitleStyle: { color: 'darkslateblue' },
        drawerLabelStyle: { fontSize: 25, color: 'white' },
        drawerStyle: { backgroundColor: 'darkslateblue', width: '35%'}
      }}

      drawerContent={ (props) => 

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
        )} labelStyle={{color: 'white', fontSize: 25}} label="Pesquisa" onPress={() => { props.navigation.navigate('Home') }} />

        <DrawerItem icon={({ focused, color, size }) => (
          <Icon
            name="login"
            size={size}
            color={focused ? '#7cc' : '#ccc'}
          />
        )} labelStyle={{color: 'white', fontSize: 25}} label="Sair" onPress={() => { props.navigation.popToTop() }} />
      </DrawerContentScrollView>

      }> 

      {/* COMPONENTE INUTIL QUE TA INVISUVEL NESSA PORRA */}
      <DrawerNavigator.Screen name="Pesquisas" component={Home}/>

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
    alignSelf: 'center',
    marginBottom: 5,
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginHorizontal: 25,
  },
});

export default Drawer;
