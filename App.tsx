import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import EditToDo from './screens/EditToDo';
import CreateToDo from './screens/CreateToDo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="Main"> 
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditToDo"
            component={EditToDo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateToDo"
            component={CreateToDo}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
