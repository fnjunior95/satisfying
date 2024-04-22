// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './Home'; // Importe o componente Home

// // Componente Drawer Navigator
// const DrawerNavigator = () => {
//   // Simulação de dados de pesquisa
//   const researchData = [
//     { title: 'SECOMP 2023', date: '10/10/2023' },
//     { title: 'UBUNTU 2022', date: '05/06/2022' },
//     { title: 'MENINAS CPU', date: '01/04/2022' }
//   ];

//   // Função para renderizar o conteúdo da Home
//   const renderHomeContent = (props) => {
//     return (
//       <Home researchData={researchData} onNewResearch={handleNewResearch} />
//     );
//   };

//   // Crie um Drawer Navigator
//   const Drawer = createDrawerNavigator();

//   return (
//     <Drawer.Navigator>
//       {/* Defina a tela inicial como a Home */}
//       <Drawer.Screen name="Home" component={renderHomeContent} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;
