import {
  Button 
} from 'antd';
// import { url } from 'inspector';
// import Image from 'next/image'
// //image
// import streamPic from "../../../../public/img/stream.png"
// import ClientFirstPic from "../../../../public/img/money-3.png";
// import ClientSecondPic from "../../../../public/img/message-edit.png";
// import ClientThirdPic from "../../../../public/img/flash.png";
// import VectorPic from "../../../../public/img/Vector.png";
// import StarPic from "../../../../public/img/Star.png";
// import HamsaPic from "../../../../public/img/hamsa.png";

import * as context from  "../../../Common/asset/const";
 
const LayoutLanding: React.FC = () => {
    return (
      <div className="landing-container">
        <div className="landing-stream-container">
          <div className="landing-stream-left-container">
            <span className="landing-stream-txt">{context.landingStreamTxt}</span>
            <span className="landing-stream-detail-txt">{context.landingStreamDetailTxt}</span>
            <div className="landing-stream-btn-container">
              <Button><span className="landing-stream-btn-txt">Get Started</span></Button>
            </div>
          </div>
          <div className="landing-stream-right-container">
            <img src='/img/stream.png'/>
          </div>
        </div>
        <div className="landing-WhyChooseUS-container">
          <span className="landing-WhyChooseUS-title-container">{context.landingWhyChooseUSTitleTxt}</span>
          <span className="landing-WhyChooseUS-text-container">{context.landingWhyChooseUSTextTxt}</span>
        </div>
        <div className="landing-ClientRate-container">
          <div className="landing-ClientRate-element">
            <img src='/img/money-3.png' style={{width: '100px', height: '100px'}}/>
            <span className="landing-ClientRate-title ">{context.landingClientFirstTitleTxt}</span>
            <span className="landing-ClientRate-text">{context.landingClientFirstTextTxt}</span>
          </div>
          <div className="landing-ClientRate-element">
            <img src='/img/message-edit.png' style={{width: '100px', height: '100px'}}/>
            <span className="landing-ClientRate-title ">{context.landingClientSecondTitleTxt}</span>
            <span className="landing-ClientRate-text">{context.landingClientSecondTextTxt}</span>
          </div>
          <div className="landing-ClientRate-element">
            <img src='/img/flash.png' style={{width: '100px', height: '100px'}}/>
            <span className="landing-ClientRate-title ">{context.landingClientThirdTitleTxt}</span>
            <span className="landing-ClientRate-text">{context.landingClientThirdTextTxt}</span>
          </div>

        </div>
        <div className="landing-Pricing-container">
          <span className="landing-Pricing-title">{context.landingPrcingTitleTxt}</span>
          <div className="landing-pricing-div-container">
            <div className="landing-pricing-first-dev-container">
              <span className="landing-pricing-first-div-txt">{context.landingPricingFirstDivTxt}</span>
              <div className="landing-pricing-second-div-container">
                <span className="landing-pricing-second-div-txt">{context.landingPricingSecondDivTxt}</span>
                <span className="landing-pricing-third-div-txt">{context.landingPricingThirdDivTxt}</span>
              </div>
            </div>
            <div className="landing-pricing-vector-container">
              <div className="landing-pricing-Vector-element-container">
                <img src='/img/vector.png' style={{width: '22px', height: '22px', marginRight: '8px'}}/>
                <span className="landing-pricing-Vector-element-txt ">{context.landingPrcintFirstTxt}</span>
              </div>
              <div className="landing-pricing-Vector-element-container">
              <img src='/img/vector.png' style={{width: '22px', height: '22px', marginRight: '8px'}}/>
                <span className="landing-pricing-Vector-element-txt ">{context.landingPrcingScecondTxt}</span>
              </div>
              <div className="landing-pricing-Vector-element-container">
              <img src='/img/vector.png' style={{width: '22px', height: '22px', marginRight: '8px'}}/>
                <span className="landing-pricing-Vector-element-txt ">{context.landingPrcingThirdTxt}</span>
              </div>
              <div className="landing-pricing-Vector-element-container">
              <img src='/img/vector.png' style={{width: '22px', height: '22px', marginRight: '8px'}}/>
                <span className="landing-pricing-Vector-element-txt ">{context.landingPrcingFourTxt}</span>
              </div>
            </div>
            <div className="landing-pricing-button-container">
              <Button><span className="landing-stream-btn-txt">Get Started</span></Button>
            </div>
          </div>
        </div>
          <div className="landing-aboutUS-contianer">
            <span className="landing-aboutUS-container-txt">{context.landingAboutUSTxt}</span>
            <div className="landing-aboutUS-profile-container">
                <div className="landing-aboutUS-element-container">
                  <div className="landing-aboutUS-element-profile-container">
                    <div className="landing-profile-container">
                      <img src='/img/hamsa.png' style={{borderRadius: "300px"}}/>
                      <span className="landing-aboutOmar-txt">{context.landingOmarTxt}</span>
                    </div>
                    <div className="landing-aboutUS-star-container">
                      <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                      <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                      <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                      <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                      <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                    </div>
                  </div>
                  <span className="landing-landingNameDetail-txt">{context.landingNameDetail}</span>
                </div>
                <div className="landing-aboutUS-element-container">
                <div className="landing-aboutUS-element-profile-container">
                  <div className="landing-profile-container">
                  <img src='/img/hamsa.png' style={{borderRadius: "300px"}}/>
                    <span className="landing-aboutOmar-txt">{context.landingOmarTxt}</span>
                  </div>
                  <div className="landing-aboutUS-star-container">
                    <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                    <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                    <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                    <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                    <img src='/img/star.png' style={{width: '18px', height: '18px'}}/>
                  </div>
                </div>
                <span className="landing-landingNameDetail-txt">{context.landingNameDetail}</span>
                </div>
            </div>
          </div>
        <div className="landing-money-back-container">
          <div className="landing-money-back-confirm-container">
            <span className="landing-money-back-confirm-title">{context.landingMondayBackTitleTxt}</span>
            <span className="landing-money-back-confirm-text">{context.landingMondayBackDetailTxt}</span>
            <Button><span className="landing-stream-btn-txt">Get Started</span></Button>
          </div>
        </div>
      </div>
    );
  };

export default LayoutLanding;
  