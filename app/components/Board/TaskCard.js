import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="bg-white p-4 rounded shadow mb-2"
      >
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
      </div>
    )}
  </Draggable>
);

export default TaskCard;
