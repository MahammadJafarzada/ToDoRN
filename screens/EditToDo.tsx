import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type EditToDoProps = {
  route: RouteProp<RootStackParamList, 'EditToDo'>;
};

const EditToDo: React.FC<EditToDoProps> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { todo, updateTodo } = route.params;
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSave = () => {
    const updatedTodo = { ...todo, title, completed };
    updateTodo(updatedTodo); 
    Alert.alert('Success', 'Todo updated successfully!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  return (
    <View style={tw`flex-1 p-4 bg-gray-100`}>
      <Text style={tw`text-lg font-bold mb-4`}>Edit Todo</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Edit todo title"
        style={tw`border border-gray-300 p-2 rounded mb-4`}
      />
      <TouchableOpacity
        onPress={() => setCompleted(!completed)}
        style={tw`mb-4 p-2 rounded bg-gray-200`}
      >
        <Text style={tw`text-center`}>{completed ? 'Mark as Incomplete' : 'Mark as Complete'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSave}
        style={tw`bg-blue-500 rounded-full p-3 items-center justify-center`}
      >
        <Text style={tw`text-white`}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditToDo;
