// Home.jsx
import React, { useState } from 'react';
import './Home.css';
import SearchOut from '../Icon/SearchOut';
import Task from '../Task/Task';
import { Input } from 'antd';
import Savetask from '../Savetask/Savetask';

const Home = () => {
  // Dữ liệu người dùng (tạm để đó nếu sau dùng)
  const users = [
    { userId: 1, name: 'Nguyễn Văn A' },
    { userId: 2, name: 'Trịnh Hồng M' },
    { userId: 3, name: 'Lạc Khôi B' },
  ];

  // Dữ liệu trạng thái công việc
  const taskStatus = [
    { statusId: 1, name: 'To Do' },
    { statusId: 2, name: 'In Progress' },
    { statusId: 3, name: 'In Review' },
    { statusId: 4, name: 'Done' },
  ];

  // Dữ liệu công việc
  const [tasks, setTasks] = useState([
    {
      taskId: 3,
      title: 'Client Call',
      description: 'Cuộc họp trực tuyến với khách hàng để thảo luận về dự án.',
      statusId: 1,
      flagId: 1,
      assignedName: 'Lạc Khôi B',
      endDate: new Date('2024-04-02'),
    },
    {
      taskId: 4,
      title: 'Annual Presentation',
      description: 'Chuẩn bị bài thuyết trình hàng năm với số liệu và biểu đồ.',
      statusId: 3,
      flagId: 2,
      assignedName: 'Nguyễn Văn A',
      endDate: new Date('2024-03-15'),
    },
    {
      taskId: 5,
      title: 'Onboarding Screens',
      description: 'Thiết kế các màn hình hướng dẫn ban đầu cho ứng dụng.',
      statusId: 4,
      flagId: 1,
      assignedName: 'Trịnh Hồng M',
      endDate: new Date('2024-03-17'),
    },
    {
      taskId: 6,
      title: 'Landing Page Design',
      description: 'Thiết kế giao diện cho trang Landing Page mới.',
      statusId: 2,
      flagId: 2,
      assignedName: 'Lạc Khôi B',
      endDate: new Date('2024-04-05'),
    },
    {
      taskId: 7,
      title: 'Marketing Strategy',
      description: 'Lập kế hoạch chiến lược tiếp thị cho sản phẩm mới.',
      statusId: 1,
      flagId: 3,
      assignedName: 'Nguyễn Văn A',
      endDate: new Date('2024-04-20'),
    },
    {
      taskId: 8,
      title: 'Bug Fixing',
      description: 'Sửa các lỗi phát hiện trong phiên bản beta.',
      statusId: 3,
      flagId: 3,
      assignedName: 'Trịnh Hồng M',
      endDate: new Date('2024-03-25'),
    },
    {
      taskId: 9,
      title: 'Content Writing',
      description: 'Viết nội dung cho blog công ty và bài đăng mạng xã hội.',
      statusId: 2,
      flagId: 1,
      assignedName: 'Lạc Khôi B',
      endDate: new Date('2024-04-10'),
    },
    {
      taskId: 10,
      title: 'Team Meeting',
      description: 'Họp nhóm để thảo luận tiến độ và các vấn đề phát sinh.',
      statusId: 4,
      flagId: 2,
      assignedName: 'Nguyễn Văn A',
      endDate: new Date('2024-03-18'),
    },
  ]);

  const [found, setFound] = useState(false); // modal tạo task mới

  const handlenewitem = () => {
    setFound(!found);
  };

  // Hàm format ngày chỉ để hiển thị trong card
  const formatDate = (date) => {
    if (!date) return '';
    let d = date;
    if (!(d instanceof Date)) d = new Date(d);
    if (isNaN(d)) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  // Filter theo status
  const task_todo = tasks.filter((task) => task.statusId === 1);
  const task_inprogress = tasks.filter((task) => task.statusId === 2);
  const task_inreview = tasks.filter((task) => task.statusId === 3);
  const task_done = tasks.filter((task) => task.statusId === 4);

  // Thêm task mới từ Savetask
  const addTask = (data) => {
    setTasks((prev) => [...prev, data]);
  };

  // Nhận task đã chỉnh sửa từ EditTask
  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.taskId === updatedTask.taskId ? { ...t, ...updatedTask } : t))
    );
  };

  return (
    <div className="Home">
      <div className="HomeHeader">
        <div className="HomeHeaderSearch">
          <Input size="large" placeholder="Search Item" prefix={<SearchOut />} />
        </div>
        <div className="HomeHeaderNewItem">
          <button className="NewItem" onClick={handlenewitem}>
            New Item
          </button>
        </div>
      </div>

      <div className="HomeContent">
        {/* To Do */}
        <div className="ToDo">
          <div className="ToDo_Header">
            <div className="ToDo_Header_Left">
              <div className="ToDo_Header_Left_Text">To do</div>
              <div className="ToDo_Header_Left_Posts">{task_todo.length}</div>
            </div>
            <div className="ToDo_Header_Right">
              <div className="ToDo_Header_Right_Plus">+</div>
              <div className="ToDo_Header_Right_Ai">...</div>
            </div>
          </div>
          <div className="ToDo_Content">
            {task_todo.map((task) => (
              <Task
                key={task.taskId}
                task={task}
                formatDate={formatDate}
                onUpdateTask={handleUpdateTask}
              />
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div className="InProgress">
          <div className="InProgress_Header">
            <div className="InProgress_Header_Left">
              <div className="InProgress_Header_Left_Text">In Progress</div>
              <div className="InProgress_Header_Left_Posts">{task_inprogress.length}</div>
            </div>
            <div className="InProgress_Header_Right">
              <div className="InProgress_Header_Right_Plus">+</div>
              <div className="InProgress_Header_Right_Ai">...</div>
            </div>
          </div>
          <div className="InProgress_Content">
            {task_inprogress.map((task) => (
              <Task
                key={task.taskId}
                task={task}
                formatDate={formatDate}
                onUpdateTask={handleUpdateTask}
              />
            ))}
          </div>
        </div>

        {/* In Review */}
        <div className="InReview">
          <div className="InReview_Header">
            <div className="InReview_Header_Left">
              <div className="InReview_Header_Left_Text">In Review</div>
              <div className="InReview_Header_Left_Posts">{task_inreview.length}</div>
            </div>
            <div className="InReview_Header_Right">
              <div className="InReview_Header_Right_Plus">+</div>
              <div className="InReview_Header_Right_Ai">...</div>
            </div>
          </div>
          <div className="InReview_Content">
            {task_inreview.map((task) => (
              <Task
                key={task.taskId}
                task={task}
                formatDate={formatDate}
                onUpdateTask={handleUpdateTask}
              />
            ))}
          </div>
        </div>

        {/* Done */}
        <div className="Done">
          <div className="Done_Header">
            <div className="Done_Header_Left">
              <div className="Done_Header_Left_Text">Done</div>
              <div className="Done_Header_Left_Posts">{task_done.length}</div>
            </div>
            <div className="Done_Header_Right">
              <div className="Done_Header_Right_Plus">+</div>
              <div className="Done_Header_Right_Ai">...</div>
            </div>
          </div>
          <div className="Done_Content">
            {task_done.map((task) => (
              <Task
                key={task.taskId}
                task={task}
                formatDate={formatDate}
                onUpdateTask={handleUpdateTask}
              />
            ))}
          </div>
        </div>
      </div>

      {found === true && (
        <Savetask setFound={setFound} addTask={addTask} tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  );
};

export default Home;
