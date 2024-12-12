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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-6">
      <TaskFilter setFilteredTasks={setFilteredTasks} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-nowrap space-x-6 overflow-x-auto px-6">
          {["To Do", "In Progress", "Done"].map((status, index) => (
            <Droppable key={status} droppableId={status} isDropDisabled={false}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-80 min-w-[300px] p-4 bg-white rounded-3xl shadow-lg flex flex-col transition-transform hover:scale-105"
                >
                  {/* Column Header */}
                  <h2
                    className={`text-xl font-bold text-center py-2 mb-4 rounded-full ${
                      index === 0
                        ? "bg-blue-500 text-white"
                        : index === 1
                        ? "bg-yellow-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
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
