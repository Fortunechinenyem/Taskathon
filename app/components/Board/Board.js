import { useState } from "react";
import TaskFilter from "./TaskFilter";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BoardColumn from "./BoardColumn";

const Board = () => {
  const [filteredTasks, setFilteredTasks] = useState(null);

  return (
    <>
      <TaskFilter setFilteredTasks={setFilteredTasks} />
      <DragDropContext>
        <div className="flex flex-wrap lg:flex-nowrap space-x-4">
          {["To Do", "In Progress", "Done"].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-1/3 p-4 bg-gray-200 rounded-lg shadow-lg"
                >
                  <BoardColumn status={status} tasks={filteredTasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default Board;
