import React, { useState } from 'react';
import { Col, Row, Card, Statistic, Table } from "antd";
import{
    NotificationOutlined,
    UserOutlined,
    IdcardOutlined
}from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import Calendars from "../../../components/calendar";
import GoogleCalendar from '../../../components/googleCalendar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
//import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Calendar1_ from '../../../components/calendar2';
const Home = () => {
    const [date, setDate] = useState(new Date());
    return(
        <>
        <div style={{}}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style ={{padding: "0px"}}>
        {/* <Card style ={{background: "#ffdee2",height: "180px"}}> */}
            <Row gutter={[12,4]}>
            
            <Col xs={24} sm={24} md={24} lg={12} xl={8} style = {{padding: "0px",border:30}}>
                <Card style = {{background: "#1976d2",height: "150px",marginTop:"0px",boxShadow:"1px 2px 3px grey"}}>
                    <div style = {{ display: 'flex', flexDirection: 'column',}}>
                        {/* <div style={{textAlign: 'center',fontSize:24}}>
                            จำนวนประกาศ
                        </div> */}
                        <div style = {{ textAlign: 'left', fontSize: 18, color: '#ffffff', }}>
                            <NotificationOutlined style = {{marginRight: 16, fontSize:24, }}/>
                            จำนวนประกาศ
                        </div>
                        
                        <div style = {{ textAlign: 'center', fontSize: 36, fontWeight: 'bold', marginTop: 0,color:"#FFF"}}>
                            30
                        </div>
                    </div>
                </Card>
                
                
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} style = {{border:30}}>
                <Card style = {{marginTop: "0px",height:"150px",background:"#0d47a1"}}>
                    <div style = {{ display: 'flex', flexDirection: 'column'}}>
                        <div style = {{ textAlign: 'left', fontSize: 18, color: '#fff'}}>
                            <UserOutlined style = {{marginRight: 16, fontSize:24}}/>
                                จำนวนนักเรียน
                        </div>
                        <div style = {{ textAlign: 'center', fontSize: 36, fontWeight: 'bold', marginTop: 0,color:"#fff"}}>
                            3100
                        </div>
                    </div>
                </Card>
                
                
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} style = {{border:30}}>
                <Card style = {{background:"#2979ff",height: '150px'}}>
                    <div style = {{ display: 'flex', flexDirection: 'column'}}>
                        <div style = {{ textAlign: 'left', fontSize: 18, color: '#ffffff'}}>
                            <IdcardOutlined style = {{marginRight: 16, fontSize:24,}}/>
                                จำนวนบุคลากร
                        </div>
                        <div style = {{ textAlign: 'center', fontSize: 36, fontWeight: 'bold', marginTop: 0,color:"#FFF"}}>
                            200
                        </div>
                    </div>
                </Card>
                
                
            </Col>
        
            </Row>
        {/* </Card> */}
        </Col>
         <Col>
            
            <div style = {{color:"#015c91",fontSize:32,marginTop: 32,textShadow: "0px 2px 3px grey"}}>ข่าวประกาศ</div>
            
            
        </Col>
            <Row gutter={[24,12]}>
                <Col>
            <Card style = {{background: "#d8efff",width: "850px",marginTop: "16px",height: "325px"}}>
                
                <Card style={{background:"#ffffff",height:"120px",marginBlock:"16px"}}>
                    <Statistic title = "เรื่อง วันเปิดเรียน ภาคเรียนที่ 1 ปีการศึกษา 2569">
                        
                    </Statistic>
                </Card>
                <Card style={{background:"#FFFFFF",height:"120px",}}>

                </Card>
                    
            </Card>
        </Col>
        <Col>
            <div style={{marginTop: "16px"}}> 
                
            <Calendars/>
            {/* <Calendar onChange={setDate} value={date} />; */}
            {/* <GoogleCalendar /> */}
            {/* <Calendar1_/> */}
            </div>
        </Col>
            </Row>
            
        
        </div>
        </>
       
        
            
        
    )
}
export default Home;
