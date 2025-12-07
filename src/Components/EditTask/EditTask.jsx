// EditTask.jsx
import React, { useState } from 'react';
import GreenFlag from '../Icon/GreenFlag';
import X from '../Icon/X';
import { Select } from 'antd';
import './EditTask.css';

const EditTask = ({ task, onClose, onSave }) => {
  // Local state cho form – KHÔNG dùng props.title trực tiếp
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [assignedName, setAssignedName] = useState(task.assignedName || '');
  const [statusId, setStatusId] = useState(task.statusId || 1);

  // Chuyển endDate thành string yyyy-mm-dd để nhập
  const initDate = (() => {
    if (!task.endDate) return '';
    let d = task.endDate;
    if (!(d instanceof Date)) d = new Date(d);
    if (isNaN(d)) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  })();

  const [endDate, setEndDate] = useState(initDate);

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      assignedName,
      statusId: Number(statusId),
      endDate: endDate ? new Date(endDate) : task.endDate,
    };

    onSave(updatedTask);
    onClose();
  };

  const handleOut = () => {
    onClose();
  };

  console.log(`đã bắt được id: ${task.taskId}`);

  return (
    <div>
      <div className="Savetask_Box">
        <div className="Savetask_Box_print"></div>
        <div className="Savetask">
          <div className="Savetask_Header">
            <div className="Savetask_Header_GreenFlag">
              <GreenFlag />
            </div>
            <div className="Savetask_Header_X" onClick={handleOut}>
              <X />
            </div>
            <div className="Savetask_Header_Text">
              <p>Edit Task</p>
            </div>
          </div>

          <div className="Savetask_Title">
            <div className="Savetask_Title_Left">
              <div className="Title_Left_Text">
                Title<span style={{ color: 'red' }}>*</span>
              </div>
              <div className="Title_Left_Input">
                <input
                  type="text"
                  placeholder="Type Title of Task"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* Bạn tự xử lý validate sau nếu muốn */}
            </div>

            <div className="Savetask_Title_Right">
              <div className="Title_Right_Text">End Date</div>
              <div className="Title_Right_Date">
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="Savetask_Description">
            <div className="Savetask_Description_Left">
              <div className="Description_Left_Text">Description</div>
              <div className="Description_Left_Input">
                <input
                  type="text"
                  placeholder="Type Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="Savetask_Description_Right">
              <div className="Description_Right_Text">Assign</div>
              <div className="Description_Right_Lists">
                <Select
                  showSearch
                  placeholder="Select a person"
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    { value: 'Nguyễn Văn A', label: 'Nguyễn Văn A' },
                    { value: 'Lạc Khôi B', label: 'Lạc Khôi B' },
                    { value: 'Trịnh Hồng M', label: 'Trịnh Hồng M' },
                  ]}
                  value={assignedName}
                  onChange={(value) => setAssignedName(value)}
                />
              </div>
            </div>
          </div>

          <div className="Savetask_Status">
            <div className="Status_Text">Status</div>
            <div className="Status_List">
              <Select
                showSearch
                placeholder="Choose Status"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  { value: 1, label: '1(To Do)' },
                  { value: 2, label: '2(In Progress)' },
                  { value: 3, label: '3(In Review)' },
                  { value: 4, label: '4(Done)' },
                ]}
                value={statusId}
                onChange={(value) => setStatusId(value)}
              />
            </div>
          </div>

          <div className="Savetask_Button">
            <div className="Cancel">
              <button onClick={handleOut}>Cancel</button>
            </div>
            <div className="Save">
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
