import React, { FunctionComponent as FC } from 'react';
import './index.scss';

import { Row, Col } from 'antd';
import MyPanel from '../MyPanel';

import { textContent } from '../../types/data.global';
import researchQuestionImgUrl from '../../assets/2-background-page/background-page-1.png';
import analysisGoalImgUrl from '../../assets/2-background-page/background-page-2.png';

interface BackgroundPageProps {
}

const BackgroundPage: FC<BackgroundPageProps> = (props) => {
  const {
  } = props

  return (
    <>
      <MyPanel viewTitle="Dual Frontier of Science and Technology" width={''} height={'auto'} panelHeaderHeight={60} id='backgroundPage'>
      </MyPanel>
      <Row justify="space-between" style={{width: '100%'}} className='background-page'>
        <Col xs={24} sm={24} md={24} lg={24} className='left-div'>
          <div className='abstract-text-div'>
            {textContent.backgroudPage.abstract}
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} className='right-div'>
          <div className='img-div research-question-div'>
            <img className='img' src={researchQuestionImgUrl} alt='researchQuestionImgUrl' />
          </div>
          <div className='img-div analysis-goal-div'>
            <img className='img' src={analysisGoalImgUrl} alt='analysisGoalImgUrl' />
          </div>
        </Col>
        {/* <Col xs={24} sm={24} md={8} lg={8} className='left-div'>
          <div className='analysis-goal-div'></div>
        </Col> */}
      </Row>
    </>
  )
}

export default BackgroundPage;