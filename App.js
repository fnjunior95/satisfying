import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Drawer from './src/screens/Drawer';
import NovaPesquisa from './src/screens/NovaPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, headerBackVisible: false }}>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='CreateAccount' component={CreateAccount}  />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}  />
        <Stack.Screen name='Drawer' component={Drawer}  />
        <Stack.Screen name='Home' component={Home}  />
        <Stack.Screen name='NovaPesquisa' component={NovaPesquisa}  />
        <Stack.Screen name='AcoesPesquisa' component={AcoesPesquisa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
