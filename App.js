import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './src/components/Login';
import CreateAccount from './src/components/CreateAccount';

const App = () => {
  const [creatingAccount, setCreatingAccount] = useState(false);

  const handleCreateAccount = () => {
    setCreatingAccount(true);
  };

  const handleCancelCreateAccount = () => {
    setCreatingAccount(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {creatingAccount ? (
        <CreateAccount onCancel={handleCancelCreateAccount} />
      ) : (
        <Login onCreateAccount={handleCreateAccount} />
      )}
    </View>
  );
};

export default App;
