import React from 'react'
import './Savetask.css'
import GreenFlag from '../Icon/GreenFlag'
import X from '../Icon/X'
import { Select } from 'antd';
const Savetask = (props) => {

  const HandleCancel = () => {
   props.setFound(false)
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
              <X setFound = {props.setFound}></X>
            </div>
            <div className='Savetask_Header_Text'>
              <p>Save Task</p>
            </div>
          </div>
          <div className='Savetask_Title'>
            <div className='Savetask_Title_Left'>
              <div className='Title_Left_Text'>Title<span style={{ color: 'red' }}>*</span></div>
              <div className='Title_Left_Input'>
                <input type="text" placeholder="Type Title of Task" />
              </div>
              <div className='Title_Left_Warn'>
                <span style={{ color: 'red' }}>Title is required</span>
              </div>
            </div>
            <div className='Savetask_Title_Right'>
              <div className='Title_Right_Text'>End Date</div>
              <div className='Title_Right_Date'>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className='Savetask_Description'>
            <div className='Savetask_Description_Left'>
              <div className='Description_Left_Text'>
                Description
              </div>
              <div className='Description_Left_Input'>
                <input type="text" placeholder='Type Description' />
              </div>
            </div>
            <div className='Savetask_Description_Right'>
              <div className='Description_Right_Text'>Assign</div>
              <div className='Description_Right_Lists'>

                <Select
                  showSearch
                  placeholder="Select a person"
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    { value: '1', label: 'Jack' },
                    { value: '2', label: 'Lucy' },
                    { value: '3', label: 'Tom' },
                  ]}
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
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                ]}
              />
            </div>
          </div>
          <div className='Savetask_Button'>
            <div className='Cancel'>
              <button onClick={HandleCancel}>Cancel</button>
            </div>
            <div className='Save'>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Savetask
