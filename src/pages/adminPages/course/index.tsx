import React, { useState } from 'react';
import { Col, Row, Card, Statistic, Table,Button, Modal} from "antd";
import SelectYear from '../../../components/select/selectyear';
import SelectTerm from '../../../components/select/selectterm';
import {
    SearchOutlined,
    PlusOutlined,
    DeleteOutlined,
    FormOutlined
} from '@ant-design/icons'
import SearchButton from '../../../components/button/searchbutton';
const Course :React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return(
        <>
        <div>
            
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style ={{background:"#baedce",height:"100px", fontSize:"18px",}}>
                รายวิชาทั้งหมด ปีการศึกษา <SelectYear/> ภาคการศึกษาที่ <SelectTerm/> 
                
                <div style ={{textAlign:'right',marginRight:"10px", marginTop:"-28px",}}> 
                    <Button
                    icon={<SearchOutlined/>}
                    type='text'
                    onClick={showModal}
                    style = {{background:"#f0f7ff",marginRight:"10px"}}
                    
                    >
                        ค้นหา
                    </Button>
                    <Button 
                    icon={<PlusOutlined/>}
                    type = 'primary'
                    style={{marginRight:"10px"}}
                    >
                    เพิ่ม

                    </Button>
                    <Button
                    icon = {<DeleteOutlined/>}
                    type = 'primary'
                    style = {{background:"#ff1818",marginRight:"10px"}}>
                        ลบ
                    </Button>
                    <Button
                    icon = {<FormOutlined/>}
                    type = 'primary'
                    style = {{background:"#ffca00"}}>
                        แก้ไข
                    </Button>
                </div> 
                
            </Col>
            <Col style = {{background:"#bab9e1",height:"100px"}}>
                
            </Col>
        </div>
        </>
    )
}; 
export default Course