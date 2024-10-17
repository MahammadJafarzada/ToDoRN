// CreateToDo.tsx
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import AntDesign from '@expo/vector-icons/AntDesign';

const CreateToDo = ({ route, navigation }: { route: any; navigation: any }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Todo title cannot be empty!");
      return;
    }
    route.params.addTodo(title); 
    setTitle('');
    navigation.navigate('Main')
  };


  return (
    <View style={tw`flex-1 p-4 bg-gray-100 justify-center`}>
      <Text style={tw`text-lg font-bold mb-4`}>Create New Todo</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter todo title"
        style={tw`border border-gray-300 p-2 rounded mb-4`}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={tw`bg-blue-500 rounded-full p-3 items-center justify-center`}
      >
        <Text style={tw`text-white`}>Add Todo</Text>
        <AntDesign name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CreateToDo;
