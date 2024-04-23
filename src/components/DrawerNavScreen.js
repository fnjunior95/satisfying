import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'

const DrawerNavScreen = ({ props }) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Email do usuário */}
      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>usuario@dominio.com</Text>
      </View>
      <View style={styles.separator}></View>
      <DrawerItemList {...props} />
      <DrawerItem icon={({ focused, color, size }) => (
        <Icon
          name="login"
          size={size}
          color={focused ? '#7cc' : '#ccc'}
        />
      )} labelStyle={{color: 'white', fontSize: 25}} label="Sair" onPress={() => { props.navigation.popToTop() }} />
    </DrawerContentScrollView>
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

export default DrawerNavScreen;
