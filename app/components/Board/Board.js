import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BoardColumn from "./BoardColumn";

const Board = () => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Task 1", description: "Do something", status: "To Do" },
    {
      id: "2",
      title: "Task 2",
      description: "Do another thing",
      status: "In Progress",
    },
    { id: "3", title: "Task 3", description: "Finish this up", status: "Done" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const updatedTasks = [...tasks];

    const [movedTask] = updatedTasks.splice(source.index, 1);

    movedTask.status = destination.droppableId;

    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-nowrap space-x-4 overflow-x-auto px-4">
          {["To Do", "In Progress", "Done"].map((status) => (
            <BoardColumn
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
