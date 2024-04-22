import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import CreateAccount from './src/components/CreateAccount';
import ForgotPassword from './src/components/ForgotPassword';
import Home from './src/components/Home';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='CreateAccount' component={CreateAccount}  />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}  />
        <Stack.Screen name='Home' component={Home}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
