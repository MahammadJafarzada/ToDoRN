import { View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { initialTodos } from "../utils/FakeApi"; 
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";
import TodoItem from "../components/ToDoItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const MainScreen: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigationToCreate = () =>{
    navigation.navigate('CreateToDo')
  }

  const deleteItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCompleted = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem item={item} onDelete={deleteItem} onComplete={onCompleted} />
  );

  return (
    <View style={tw`flex-1 p-4 bg-gray-100`}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={tw`bg-blue-500 rounded-full p-3 items-center justify-center absolute bottom-10 right-5`}
        onPress={navigationToCreate}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
