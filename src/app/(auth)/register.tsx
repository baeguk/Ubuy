import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function RegisterScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { register } = useAuth();

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <View className="flex-1 justify-center p-4">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}