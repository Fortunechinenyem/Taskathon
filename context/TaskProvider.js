import { createContext, useReducer, useEffect, useContext } from "react";
import toast from "react-hot-toast";

const TaskContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      toast.success("Task added!");
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "UPDATE_TASK":
      toast.success("Task updated!");
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "MOVE_TASK":
      toast.success("Task moved!");
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.status }
            : task
        ),
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
