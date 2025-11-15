import React from 'react'
import './Task.css'
import EditOutlined from '../Icon/EditOutlined'
import PaperClip from '../Icon/PaperClip'
import RedFlag from '../Icon/RedFlag'
import Clock from '../Icon/Clock'
const Task = (props) => {
    console.log(props.assignedName)
    return (
        
            <div className='ToDo_Content_MobileWireframes'>
                <div className='ToDo_MobileWireframes_Up'>
                    <div className='ToDo_MobileWireframes_Up_Title'>
                        <p>{props.title}</p>
                        <EditOutlined></EditOutlined>
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
                        <p>Apr 12</p>
                    </div>
                </div>
            </div>
    )
}

export default Task
