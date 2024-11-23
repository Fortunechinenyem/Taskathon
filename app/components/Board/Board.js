import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BoardColumn from "./BoardColumn";
import { useTasks } from "@/context/TaskProvider";

const Board = () => {
  const { state, dispatch } = useTasks();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    dispatch({
      type: "MOVE_TASK",
      payload: {
        id: draggableId,
        status: destination.droppableId,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        {["To Do", "In Progress", "Done"].map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 p-4"
              >
                <BoardColumn status={status} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
