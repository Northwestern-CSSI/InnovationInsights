import React, { FunctionComponent as FC } from 'react';
import './index.scss';

import { Row, Col, Anchor } from 'antd';

import teaserImgUrl from '../../assets/1-media/kellogg.jpeg';
import teaserVideoUrl from '../../assets/1-media/nu.mp4';
import innovationinsightsTextUrl from '../../assets/1-media/innovationinsights-text.png';
import uiBackgroundUrl from '../../assets/1-media/ui-composed.png';

interface TeaserPageProps {
  // viewTitle: string;
  // width: string;
  // height: string;
  // panelHeaderHeight: number;
  // // x?: number;
  // // y?: number;
  // children: React.ReactNode; // 👈️ added type for children
}

const TeaserPage: FC<TeaserPageProps> = (props) => {

  // const {
  //   viewTitle,
  //   width,
  //   height,
  //   panelHeaderHeight,
  // } = props

  return (
    <div className='teaser'>
      <div className="background-img">
        {/* <img className='teaser-content' src={teaserImgUrl} /> */}
        <video className='teaser-content' src={teaserVideoUrl} muted={true} loop={true} autoPlay></video>
      </div>
      <div className='foreground-div'>
        <Row justify="space-between" style={{width: '100%', height: '100%'}} className='row-div'>
         <Col xs={24} sm={24} md={24} lg={24} style={{height: '100%'}}>
          {/* <Col xs={20} sm={20} md={14} lg={14} style={{height: '100%'}}> */}
            <div className='teaser-left-div'>
              <div className='system-name-div'>
                <img src={innovationinsightsTextUrl} alt='logo' className='logo-text-img'/>
              </div>
              <div className='div-unit system-slogan-div'>
                Bridge the ivory tower and the real world technology.
              </div>
              <div className='div-unit system-demo-button-div'>
                <div className='button'>{`Demo (To Appear)`}</div>
              </div>
            </div>
          </Col>
          {/* <Col xs={0} sm={0} md={10} lg={10} style={{height: '100%', width: '100%'}}>
            <div className='teaser-right-div'>
              <img className='ui-background-content' src={uiBackgroundUrl} alt={'system-ui'}/>
            </div>
          </Col> */}
          {/* <Col xs={20} sm={20} md={20} lg={0} id='right-div-collapse' className='teaser-right-div-collapse'>
            <div className='menu'>
              <MenuOutlined />
            </div>
          </Col> */}
        </Row>
        {/* <div className='left-div'>
          <div className='system-name-div'></div>
          <div className='system-slogan-div'></div>
          <div className='system-demo-button-div'></div>
        </div>
        <div className='right-div'></div> */}
      </div>
    </div>
  )
}

export default TeaserPage