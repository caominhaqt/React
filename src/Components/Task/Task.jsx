import React from 'react'
import './Task.css'
import EditOutlined from '../Icon/EditOutlined'
import PaperClip from '../Icon/PaperClip'
import RedFlag from '../Icon/RedFlag'
import Clock from '../Icon/Clock'
const Task = (props) => {
    
    const formatDate = (date) => { // hàm định dạng ngày tháng
        if (!date) return ""; // kiểm tra nếu date rỗng trả về chuỗi rỗng

        const d = new Date(date); // tạo đối tượng Date từ chuỗi date
        const month = d.toLocaleString("en-US", { month: "short" });  // lấy tháng dưới dạng chuỗi viết tắt
        const day = d.getDate(); // lấy ngày trong tháng

        return `${month} ${day}`; // trả về chuỗi định dạng "Mon DD" 
    };
    
    console.log(props.assignedName)
    return (

        <div className='ToDo_Content_MobileWireframes'>
            <div className='ToDo_MobileWireframes_Up'>
                <div className='ToDo_MobileWireframes_Up_Title'>
                    <p>{props.title}</p>
                    <EditOutlined  setFound = {props.setFound}></EditOutlined>
                </div>
                <div className='ToDo_MobileWireframes_Up_Description'>
                    <p>{props.description}</p>
                </div>
                <div className='ToDo_MobileWireframes_Up_MindX'>
                    <button>{props.user}</button>
                </div>

            </div>
            <div className='ToDo_MobileWireframes_Down'>
                <div className='ToDo_MobileWireframes_Down_Paperclip'>
                    <PaperClip></PaperClip>
                    <p>3</p>
                </div>
                <div className='ToDo_MobileWireframes_Down_RedFlag'>
                    <RedFlag></RedFlag>
                </div>
                <div className='ToDo_MobileWireframes_Down_Clock'>
                    <Clock></Clock>
                    <p>{formatDate(props.endDate)}</p> // định dạng ngày tháng cho endDate
                </div>
            </div>
        </div>
    )
}

export default Task
