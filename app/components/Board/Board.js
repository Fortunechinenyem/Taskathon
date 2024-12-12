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
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      const [movedTask] = updatedTasks.filter(
        (task) => task.id === result.draggableId
      );

      // Remove task from its current position
      updatedTasks.splice(source.index, 1);

      movedTask.status = destination.droppableId;

      updatedTasks.splice(destination.index, 0, movedTask);

      return updatedTasks;
    });
  };

  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-nowrap space-x-4 overflow-x-auto px-4">
          {columns.map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-80 min-w-[300px] p-4 bg-white rounded-lg shadow-md flex flex-col"
                >
                  <h2 className="text-lg font-bold text-gray-700 mb-4">
                    {status}
                  </h2>
                  <BoardColumn
                    status={status}
                    tasks={tasks.filter((task) => task.status === status)}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
