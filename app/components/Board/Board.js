import { useState } from "react";
import TaskFilter from "./TaskFilter";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BoardColumn from "./BoardColumn";

const Board = () => {
  const [filteredTasks, setFilteredTasks] = useState(null);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    console.log("Task moved from", source, "to", destination);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <TaskFilter setFilteredTasks={setFilteredTasks} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-nowrap space-x-4 overflow-x-auto px-4">
          {["To Do", "In Progress", "Done"].map((status) => (
            <Droppable key={status} droppableId={status} isDropDisabled={false}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-80 min-w-[300px] p-4 bg-white rounded-lg shadow-md flex flex-col"
                >
                  <h2 className="text-lg font-bold text-gray-700 mb-4">
                    {status}
                  </h2>
                  <BoardColumn status={status} tasks={filteredTasks || []} />
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
