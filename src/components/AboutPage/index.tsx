import React, { FunctionComponent as FC, useState } from 'react';
import './index.scss';

import { textContent } from '../../types/data.global';
import { Row, Col } from 'antd';
import MyPanel from '../MyPanel';

interface AboutPageProps {
}

const AboutPage: FC<AboutPageProps> = (props) => {
  const {
  } = props

  const aboutElementList: JSX.Element[] = textContent.aboutPage.authorList.map((researcherInfo, researcherIdx) => (
    <div className='researcher-div' key={researcherIdx}>
      <div className='unit-div image-div'>
        <img className='image' src={researcherInfo.img} alt={researcherInfo.author} />
      </div>
      <div className='unit-div name-div'>
        <a href={researcherInfo.homepage}>{researcherInfo.author}</a>
      </div>
      <div className='unit-div affiliation-div'>{researcherInfo.affiliation}</div>
    </div>
  ))

  const orgElementList: JSX.Element[] = textContent.aboutPage.orgList.map((orgInfo, orgIdx) => (
    <div className='org-div' key={orgIdx}>
      <div className='unit-div image-div'>
        <img className='image' src={orgInfo.img} alt={orgInfo.img} />
      </div>
    </div>
  ))

  return (
    <>
      <MyPanel viewTitle="Authors" width={''} height={'auto'} panelHeaderHeight={60} id='aboutPage'>
      </MyPanel>
      <Row justify="space-between" style={{width: '100%'}} className='about-page' id='aboutPage'>
        <div className='about-div'>
          <div className='line line-one-div'>{aboutElementList.slice(0, 3)}</div>
          <div className='line line-two-div'>{aboutElementList.slice(3, 5)}</div>
          <div className='org'>{orgElementList}</div>
        </div>
      </Row>
    </>
  )
}

export default AboutPage;