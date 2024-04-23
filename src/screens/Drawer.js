import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavScreen from '../components/DrawerNavScreen';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
        screenOptions={{ drawerActiveTintColor: 'darkslateblue',
                         headerTitleStyle: { color: 'darkslateblue' },
                         drawerLabelStyle: { fontSize: 25, color: 'white' },
                         drawerStyle: { backgroundColor: 'darkslateblue', width: '35%'}
                        }}
                        drawerContent={(props) => <DrawerNavScreen {...props} />}
        >
      <DrawerNavigator.Screen name="Pesquisas" component={Home} 
      options={{
        title: 'Pesquisas',
        drawerIcon: ({focused, size}) => (
           <Icon
              name="description"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
      }}/>
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
