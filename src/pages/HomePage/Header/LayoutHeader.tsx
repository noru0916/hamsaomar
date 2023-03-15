import {
  Button
} from 'antd'


const LayoutHeader: React.FC = () => {
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
      <div className="header-singup-container">
      <div className="header-features-container">
        <div className="header-features">Features</div>
        <div className="header-features">Pricing</div>
        <div className="header-features">demo</div>
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