// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
        </td>
        <td onClick={handleExpandToggle} className="task-title">{task.title}</td>
        <td>{task.completed ? 'Completed' : 'Pending'}</td>
        <td>
          <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </td>
      </tr>
      {isExpanded && (
        <tr className="task-details">
          <td colSpan="4">
            <div className="task-details-box">
              <p>{task.description}</p>
              <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TaskItem;
