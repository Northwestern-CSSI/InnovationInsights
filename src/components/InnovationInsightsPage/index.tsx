import React, { FunctionComponent as FC, useState } from 'react';
import './index.scss';
import demoVideoUrl from '../../assets/3-innovationinsights-page/demo-video.mp4';
import MyPanel from '../MyPanel';

interface InnovationInsightsPageProps {
}

const InnovationInsightsPage: FC<InnovationInsightsPageProps> = (props) => {
  const {
  } = props


  return (
    <>
      <MyPanel viewTitle="What is InnovationInsights?" width={''} height={'auto'} panelHeaderHeight={60} id={'innovationinsightsPage'}>
      </MyPanel>
      <video className='video-content' src={demoVideoUrl} muted={true} loop={true} autoPlay controls />
    </>
  )
}

export default InnovationInsightsPage;