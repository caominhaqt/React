// Task.jsx
import React, { useState } from 'react';
import './Task.css';
import EditOutlined from '../Icon/EditOutlined';
import EditTask from '../EditTask/EditTask';

const Task = ({ task, formatDate, onUpdateTask }) => {
  const [openEditTask, setopenEditTask] = useState(false);

  const handleEdit = () => {
    setopenEditTask(true);
  };

  const handleClose = () => {
    setopenEditTask(false);
  };

  return (
    <div className="Task">
      <div className="Task_Edit_Icon" onClick={handleEdit}>
        <EditOutlined />
      </div>

      <div className="Task_Content">
        <div className="Task_Title">{task.title}</div>
        <div className="Task_Description">{task.description}</div>
        <div className="Task_Assignee">{task.assignedName}</div>
        <div className="Task_EndDate">{formatDate(task.endDate)}</div>
      </div>

      {openEditTask && (
        <EditTask
          task={task}
          onClose={handleClose}
          onSave={onUpdateTask}
        />
      )}
    </div>
  );
};

export default Task;
