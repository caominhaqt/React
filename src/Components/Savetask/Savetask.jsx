import React, { useState } from 'react'
import './Savetask.css'
import GreenFlag from '../Icon/GreenFlag'
import X from '../Icon/X'
import { Select } from 'antd';
const Savetask = (props) => {

  const HandleCancel = () => {
    props.setFound(false)
  }

  const [title, settitle] = useState('') // lưu dữ liệu người dùng nhập title
  const [description, setdescription] = useState('')
  const [assignedName, setassignedName] = useState('')
  const [statusId, setstatusId] = useState('')
  const [endDate, setendDate] = useState('')
  //
  const handleSave = () => {

    const new_task = {
      taskId: Math.floor(Math.random() * 10000000),
      title: title,
      description: description,
      assignedName: assignedName,
      statusId: statusId,
      endDate: endDate,
      
      ///

    }

    props.addTask(new_task) // gọi hàm addTask từ props truyền vào và truyền dữ liệu công việc mới
    props.setFound(false) //

  }


  return (
    <>
      <div className='Savetask_Box'>
        <div className='Savetask_Box_print'></div>
        <div className='Savetask'>
          <div className='Savetask_Header'>
            <div className='Savetask_Header_GreenFlag'>
              <GreenFlag></GreenFlag>
            </div>
            <div className='Savetask_Header_X'>
              <X setFound={props.setFound}></X>
            </div>
            <div className='Savetask_Header_Text'>
              <p>Save Task</p>
            </div>
          </div>
          <div className='Savetask_Title'>
            <div className='Savetask_Title_Left'>
              <div className='Title_Left_Text'>Title<span style={{ color: 'red' }}>*</span></div>
              <div className='Title_Left_Input'>
                <input type="text" placeholder="Type Title of Task"
                  onChange={(e) => { settitle(e.target.value) }}
                />
              </div>
              <div className='Title_Left_Warn'>
                <span style={{ color: 'red' }}>Title is required</span>
              </div>
            </div>
            <div className='Savetask_Title_Right'>
              <div className='Title_Right_Text'>End Date</div>
              <div className='Title_Right_Date'>
                <input type="date"
                  value={endDate}
                  onChange={(e) => setendDate(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='Savetask_Description'>
            <div className='Savetask_Description_Left'>
              <div className='Description_Left_Text'>
                Description
              </div>
              <div className='Description_Left_Input'>
                <input type="text" placeholder='Type Description'
                  onChange={(e) => { setdescription(e.target.value) }} // trả event
                />
              </div>
            </div>
            <div className='Savetask_Description_Right'>
              <div className='Description_Right_Text'>Assign</div>
              <div className='Description_Right_Lists'>

                <Select
                  showSearch
                  placeholder="Select a person"
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) // tìm kiếm không phân biệt hoa thường
                  }
                  options={[
                    { value: 'Nguyễn Văn A', label: 'Nguyễn Văn A' },
                    { value: 'Lạc Khôi B', label: 'Lạc Khôi B' },
                    { value: 'Trịnh Hồng M', label: 'Trịnh Hồng M' },
                  ]}
                  onChange={(value) => { setassignedName(value) }} //select có value luôn nên trả thẳng value, không phải event
                />

              </div>
            </div>
          </div>
          <div className='Savetask_Status'>
            <div className='Status_Text'>Status</div>
            <div className='Status_List'>
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
                onChange={(value) => { setstatusId(value) }}
              />
            </div>
          </div>
          <div className='Savetask_Button'>
            <div className='Cancel'>
              <button onClick={HandleCancel} >Cancel</button>
            </div>
            <div className='Save'>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Savetask
