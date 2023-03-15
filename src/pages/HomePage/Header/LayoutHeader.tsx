import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Space
} from 'antd'

import { UnorderedListOutlined, CloseOutlined } from '@ant-design/icons'



const LayoutHeader: React.FC = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header-container">
      <div className='header-logo-container'>
        <div className="header-frame-container">
            <div className="header-ellipse-1-1"></div>
            <div className="header-ellipse-2-1"></div>
        </div>
        <div className="header-text-container">
          <span className="header-span1-2">Client</span>
          <span className="header-span0-2">Rate</span>
        </div>
      </div>
      <div className="UnorderedListOutlined">
          <div className="header-UnorderedListOutlined">
            <UnorderedListOutlined type="primary" onClick={showDrawer} />
          </div>
          <Drawer
            placement={'top'}
            width={500}
            open={open}
            extra={
              <Space>
                <div className="header-drawer-cancel-btn">
                  <Button onClick={onClose} >
                    <CloseOutlined />
                  </Button>
                </div>
              </Space>
            }
          >
            <div className="header-btn-container">
              <div className="header-responsive-features-container">
                <Button><span className="header-features">Features</span> </Button>
                <Button><span className="header-features">Pricing</span></Button>
                <Button><span className="header-features">Demo</span></Button>
              </div>
              <div className='header-responsive-button-container'>
                <Button><span className="header-btn-txt">Login</span></Button>
              </div>
              <div className='header-responsive-down-button-container'>
                <Button><span className="header-btn-txt">Sign UP</span></Button>
              </div>
            </div>
          </Drawer>
      </div>
      <div className="header-singup-container">
        <div className="header-features-container">
          <Button><span className="header-features">Features</span> </Button>
          <Button><span className="header-features">Pricing</span></Button>
          <Button><span className="header-features">Demo</span></Button>
        </div>
        <div className='header-left-button-container'>
          <Button><span className="header-btn-txt">Sign UP</span></Button>
        </div>
        <div className='header-button-container'>
          <Button><span className="header-btn-txt">Login</span></Button>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;




