import { View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { initialTodos } from "../utils/FakeApi"; 
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";
import TodoItem from "../components/ToDoItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const MainScreen: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const navigation = useNavigation<NavigationProp<any>>();

  const deleteItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCompleted = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.random(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo: Todo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem 
      item={item} 
      onDelete={deleteItem} 
      onComplete={onCompleted} 
      updateTodo={  updateTodo} 
    />
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
        onPress={() => navigation.navigate('CreateToDo', { addTodo })} 
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
