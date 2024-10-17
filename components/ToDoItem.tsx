import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoItemProps = {
  item: Todo;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};


const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete, onComplete }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigationToEdit = () => {
    navigation.navigate('EditToDo')
  }
  const navigationToCreate = () =>{
    navigation.navigate('CreateToDo')
  }
  return (
    <View style={tw`flex-row items-center py-2`}>
      <Text style={tw`flex-1`}>{item.title}</Text>
      <View style={tw`flex-row`}>
        <TouchableOpacity style={tw`px-2`} onPress={navigationToEdit}>
          <Feather name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`px-2`} onPress={() => onComplete(item.id)}>
          {item.completed ? (
            <Fontisto name="checkbox-passive" size={24} color="black" />
          ) : (
            <Fontisto name="checkbox-active" size={24} color="black" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={tw`px-2`} onPress={() => onDelete(item.id)}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
