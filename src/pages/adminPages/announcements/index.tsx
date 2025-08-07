import { Col, Row, Card, Statistic, Table } from "antd";
import{
    NotificationOutlined,
    UserOutlined,
    IdcardOutlined
}from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import Calendars from "../../../components/calendar";
import carosel from "../../../components/carosel";
import Carosel from "../../../components/carosel";
const Announcements = () => {
    return(
        <>
        <Col style = {{height: "400px",marginTop: "-16"}}>
            <Carosel/>
        </Col>
        
        <Row gutter={[16,32]}> 
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
            <Card >
                <div style = {{ display: 'flex', flexDirection: 'column'}}>
                    <div style = {{ textAlign: 'left', fontSize: 14, color: '#999'}}>
                        <NotificationOutlined style = {{marginRight: 8, fontSize:24}}/>
                            จำนวนประกาศ
                    </div>
                    <div style = {{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: 16}}>
                        30
                    </div>
                </div>
            </Card>
            
            
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
            <Card >
                <div style = {{ display: 'flex', flexDirection: 'column'}}>
                    <div style = {{ textAlign: 'left', fontSize: 14, color: '#999'}}>
                        <UserOutlined style = {{marginRight: 8, fontSize:24}}/>
                            จำนวนนักเรียน
                    </div>
                    <div style = {{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: 16}}>
                        3100
                    </div>
                </div>
            </Card>
            
            
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={8} style = {{border:30}}>
            <Card style = {{background:"#dedede"}}>
                <div style = {{ display: 'flex', flexDirection: 'column'}}>
                    <div style = {{ textAlign: 'left', fontSize: 14, color: '#999'}}>
                        <IdcardOutlined style = {{marginRight: 8, fontSize:24}}/>
                            จำนวนบุคลากร
                    </div>
                    <div style = {{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: 16}}>
                        200
                    </div>
                </div>
            </Card>
            
            
        </Col>
        <Col>
        
            
            <div>
            <h3 style = {{ marginBottom:64,marginTop: 0
                
            }}>ข่าวประกาศ</h3>
            
            </div>
        </Col>
        </Row>
        
        </>
       
        
            
        
    )
}
export default Announcements;