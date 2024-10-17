type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
export type RootStackParamList = {
  Main: undefined;
  EditToDo: { todo: Todo; updateTodo: (todo: Todo) => void }; 
  CreateToDo: { addTodo: (title: string) => void }; 
};
