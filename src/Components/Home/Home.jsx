import React from 'react'
import './Home.css'
import SearchOut from '../Icon/SearchOut'
import Task from '../Task/Task'
import { Input } from 'antd';
import { useState } from 'react';
import Savetask from '../Savetask/Savetask';

const Home = () => {
    // Dữ liệu người dùng
    const users = [
        { userId: 1, name: "Nguyễn Văn A" },
        { userId: 2, name: "Trịnh Hồng M" },
        { userId: 3, name: "Lạc Khôi B" }
    ];

    // Dữ liệu trạng thái công việc
    const taskStatus = [
        { statusId: 1, name: "To Do" },
        { statusId: 2, name: "In Progress" },
        { statusId: 3, name: "In Review" },
        { statusId: 4, name: "Done" }
    ];

    // Dữ liệu cờ mức độ quan trọng (flag)
    const flags = [
        { flagId: 1, name: "Low", color: "#00FF00" },   // Xanh - Mức thấp
        { flagId: 2, name: "Medium", color: "#FFA500" }, // Cam - Mức trung bình
        { flagId: 3, name: "High", color: "#FF0000" }   // Đỏ - Mức cao
    ];

    // Dữ liệu công việc
    const [tasks, setTasks] = useState(
        [
            {
                taskId: 1,
                title: "Mobile Wireframes",
                description: "Lên bố cục ứng dụng thích nghi cho Mobile.",
                statusId: 1, // To Do
                flagId: 2, // Medium
                assignedName: "Nguyễn Văn A", // userId
                endDate: new Date("2024-04-12")
            },
            {
                taskId: 2,
                title: "User Research",
                description: "Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu.",
                statusId: 2, // In Progress
                flagId: 3, // High
                assignedName: "Trịnh Hồng M", // userId
                endDate: new Date("2024-03-04")
            },
            {
                taskId: 3,
                title: "Client Call",
                description: "Cuộc họp trực tuyến với khách hàng để thảo luận về dự án.",
                statusId: 1, // To Do
                flagId: 1, // Low
                assignedName: "Lạc Khôi B", // userId
                endDate: new Date("2024-04-02")
            },
            {
                taskId: 4,
                title: "Annual Presentation",
                description: "Chuẩn bị bài thuyết trình hàng năm với số liệu và biểu đồ.",
                statusId: 3, // In Review
                flagId: 2, // Medium
                assignedName: "Nguyễn Văn A", // userId
                endDate: new Date("2024-03-15")
            },
            {
                taskId: 5,
                title: "Onboarding Screens",
                description: "Thiết kế các màn hình hướng dẫn ban đầu cho ứng dụng.",
                statusId: 4, // Done
                flagId: 1, // Low
                assignedName: "Trịnh Hồng M", // userId
                endDate: new Date("2024-03-17")
            },
            {
                taskId: 6,
                title: "Landing Page Design",
                description: "Thiết kế giao diện cho trang Landing Page mới.",
                statusId: 2, // In Progress
                flagId: 2, // Medium
                assignedName: "Lạc Khôi B", // userId
                endDate: new Date("2024-04-05")
            },
            {
                taskId: 7,
                title: "Marketing Strategy",
                description: "Lập kế hoạch chiến lược tiếp thị cho sản phẩm mới.",
                statusId: 1, // To Do
                flagId: 3, // High
                assignedName: "Nguyễn Văn A", // userId
                endDate: new Date("2024-04-20")
            },
            {
                taskId: 8,
                title: "Bug Fixing",
                description: "Sửa các lỗi phát hiện trong phiên bản beta.",
                statusId: 3, // In Review
                flagId: 3, // High
                assignedName: "Trịnh Hồng M", // userId
                endDate: new Date("2024-03-25")
            },
            {
                taskId: 9,
                title: "Content Writing",
                description: "Viết nội dung cho blog công ty và bài đăng mạng xã hội.",
                statusId: 2, // In Progress
                flagId: 1, // Low
                assignedName: "Lạc Khôi B", // userId
                endDate: new Date("2024-04-10")
            },
            {
                taskId: 10,
                title: "Team Meeting",
                description: "Họp nhóm để thảo luận tiến độ và các vấn đề phát sinh.",
                statusId: 4, // Done
                flagId: 2, // Medium
                assignedName: "Nguyễn Văn A", // userId
                endDate: new Date("2024-03-18")
            }

        ]
    )
    const [found, setFound] = useState(false)
    const handlenewitem = () => {
        setFound(!found)
    }

    let task_todo = tasks.filter(task => task.statusId === 1)
    let task_inprogress = tasks.filter(task => task.statusId === 2)
    let task_inreview = tasks.filter(task => task.statusId === 3)
    let task_done = tasks.filter(task => task.statusId === 4)

    //

    const addTask = (data) => {
        const new_tasks = [...tasks, data]
        setTasks(new_tasks)
        // console.log(new_tasks)
    }
    return (
        <div className='Home'>
            <div className='HomeHeader'>
                <div className='HomeHeaderSearch'>
                    <Input size="large" placeholder="Search Item" prefix={<SearchOut />} />
                </div>
                <div className='HomeHeaderNewItem'>
                    <button className='NewItem' onClick={handlenewitem}>New Item</button>
                </div>
            </div>
            <div className='HomeContent'>
                <div className='ToDo'>
                    <div className='ToDo_Header'>
                        <div className='ToDo_Header_Left'>
                            <div className='ToDo_Header_Left_Text'>To do</div>
                            <div className='ToDo_Header_Left_Posts'>{task_todo.length}</div>
                        </div>
                        <div className='ToDo_Header_Right'>
                            <div className='ToDo_Header_Right_Plus'>+</div>
                            <div className='ToDo_Header_Right_Ai'>...</div>
                        </div>
                    </div>
                    <div className='ToDo_Content'>
                        {

                            task_todo.map(task => (
                                <Task
                                    key={task.taskId}
                                    title={task.title}
                                    description={task.description}
                                    deadline={task.deadline}
                                    // flag={flags.find(f => f.flagId === task.flagId)}
                                    user={task.assignedName}
                                    endDate={task.endDate}
                                    setFound={setFound}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='InProgress'>
                    <div className='InProgress_Header'>
                        <div className='InProgress_Header_Left'>
                            <div className='InProgress_Header_Left_Text'>In Progress</div>
                            <div className='InProgress_Header_Left_Posts'>{task_inprogress.length}</div>
                        </div>
                        <div className='InProgress_Header_Right'>
                            <div className='InProgress_Header_Right_Plus'>+</div>
                            <div className='InProgress_Header_Right_Ai'>...</div>
                        </div>
                    </div>
                    <div className='InProgress_Content'>
                        {
                            // lọc các task có trạng thái To Do
                            task_inprogress.map(task => (
                                <Task
                                    key={task.taskId}
                                    title={task.title}
                                    description={task.description}
                                    deadline={task.deadline}
                                    // flag={flags.find(f => f.flagId === task.flagId)}
                                    user={task.assignedName}
                                    endDate={task.endDate}
                                    setFound={setFound}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='InReview'>
                    <div className='InReview_Header'>
                        <div className='InReview_Header_Left'>
                            <div className='InReview_Header_Left_Text'>In Review</div>
                            <div className='InReview_Header_Left_Posts'>{task_inreview.length}</div>
                        </div>
                        <div className='InReview_Header_Right'>
                            <div className='InReview_Header_Right_Plus'>+</div>
                            <div className='InReview_Header_Right_Ai'>...</div>
                        </div>
                    </div>
                    <div className='InReview_Content'>
                        {
                            task_inreview.map(task => (
                                <Task
                                    key={task.taskId}
                                    title={task.title}
                                    description={task.description}
                                    deadline={task.deadline}
                                    // flag={flags.find(f => f.flagId === task.flagId)}
                                    user={task.assignedName}
                                    endDate={task.endDate}
                                    setFound={setFound}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='Done'>
                    <div className='Done_Header'>
                        <div className='Done_Header_Left'>
                            <div className='Done_Header_Left_Text'>Done</div>
                            <div className='Done_Header_Left_Posts'>{task_done.length}</div>
                        </div>
                        <div className='Done_Header_Right'>
                            <div className='Done_Header_Right_Plus'>+</div>
                            <div className='Done_Header_Right_Ai'>...</div>
                        </div>
                    </div>
                    <div className='Done_Content'>
                        {

                            task_done.map(task => (
                                <Task
                                    setFound={setFound}
                                    key={task.taskId}
                                    title={task.title}
                                    description={task.description}
                                    deadline={task.deadline}
                                    // flag={flags.find(f => f.flagId === task.flagId)}
                                    user={task.assignedName}
                                    endDate={task.endDate}

                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {found === true && <Savetask setFound={setFound} addTask={addTask} ></Savetask>}
        </div>
    )
}

export default Home
