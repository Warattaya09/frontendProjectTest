import React, { useState } from 'react';
import '../../App.css';
import './้hover-sider.css';

import {Routes, Route, Link} from "react-router-dom";
import Home from '../../pages/adminPages/home';
import Announcements from '../../pages/adminPages/announcements';
import Course from '../../pages/adminPages/course'
import {
  SolutionOutlined,
  ReadOutlined,
  MenuOutlined,
  WalletOutlined,
  UserOutlined,
  TableOutlined ,
  HomeOutlined,
  NotificationOutlined,
  IdcardOutlined 

} from '@ant-design/icons';



import { Breadcrumb, Layout, Menu, theme,Button, message } from 'antd';   

const { Header, Sider, Content } = Layout;


const FullLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const setCurrentPage = (val: string) => {

  localStorage.setItem("page", val);

  };
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}  
      onCollapse={(value) => setCollapsed(value)}
      width={180}
      
      style={{
            background:"#b3e0ff",
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            paddingLeft:0,
            position: 'fixed',
            // left:0,
            // top:0,
            // bottom:0,
            minHeight:'100vh',
            zIndex: 1000,

            
           
        }}>
      
        <div style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: collapsed? 'center' :'flex-end',
                
            }}>
            <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
                
                fontSize: '16px',
                height: 64,
            }}
          />
        </div>

        <div className="demo-logo-vertical" />
           
        <Menu

            style={{
                background:"#b3e0ff",
                fontSize: '16px',
                
            }}
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            
        >
          <Menu.Item
            key = "1"
            onClick={() => setCurrentPage("1")}
            
          >
            <Link to= "/">

            <HomeOutlined/>
            <span>หน้าหลัก</span>

            </Link>
          </Menu.Item>

          <Menu.Item
            key = '2'
            onClick = {() => setCurrentPage('2')}
          >
            <Link to = "/announcements">
            <NotificationOutlined/>
            <span>ประกาศ</span>
            
            </Link>

          </Menu.Item>
          <Menu.Item 
          key = '3'
          onClick={() => setCurrentPage('3')}>
            <Link to = "/annouce2">
            <UserOutlined/>
            <span>ข้อมูลนักเรียน</span>
            </Link>

          </Menu.Item>
          <Menu.Item
          key = '4'
          onClick={() => setCurrentPage('4')}>
            <Link to = "">
            <IdcardOutlined/>
            <span>ข้อมูลครู</span>
            </Link>
          </Menu.Item>
          <Menu.Item
          key = '5'
          onClick={() => setCurrentPage('5')}>
            <Link to = "/course">
            <ReadOutlined/>
            <span>ข้อมูลรายวิชา</span>
            </Link>
            
          </Menu.Item>
          
        </Menu>
        
      </Sider>
      <Layout style={{
        marginLeft: collapsed? 80:180, // ให้ content ขยับตาม
      }}>
        <Header style={{ 
            paddingTop: 0, 
            background: "linear-gradient(to right ,#8accf6,#d4edff)",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            marginLeft: 8,
            zIndex:999,
            // height:64,
            position: 'fixed',
            // top:0,
            left: collapsed ? 80:180, //ขยับตามเมื่อเปิด sider
            right:0 // เต็มขอบด้านขวา
        
            }}>
        
        </Header>
        <Content
          style={{
            margin: '72px 16px 0px 16px', //ขนาดของกล่องเนื้อหา
            padding: 24,
            //minHeight: 1280, //ขนาดหน้าจอมั้ง
            background: "#ffffff",//"#ff9cb5",//colorBgContainer,
            borderRadius: borderRadiusLG,
            flex:1,
            overflow: 'auto',
            zIndex: 998,
            overflowY: 'auto',
            //marginTop: 72,
            //marginLeft: 100,
            //height: 'auto',
            
            
            
          }}
        >
          <Breadcrumb style={{ margin: "0px 16px" }} />
          
          
            <Routes>
              <Route path="/" element= {<Home/>}/>
              <Route path="/announcements" element={<Announcements/>}/>
              <Route path="/course" element={<Course/>}/>
            </Routes>
          
        
        </Content>
      </Layout>
    </Layout>
  );
};

export default FullLayout;