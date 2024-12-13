import { useTasks } from "@/context/TaskProvider";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";

const BoardColumn = ({ status }) => {
  const { state } = useTasks();
  const tasks = state.tasks.filter((task) => task.status === status);

  return (
    <Droppable droppableId={status} isDropDisabled={false}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex-1"
        >
          <h2 className="font-bold text-lg mb-4">{status}</h2>
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default BoardColumn;
