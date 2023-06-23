import React, { FunctionComponent as FC, useState } from 'react';

import demoVideoUrl from '../../assets/5-example/case-study.mp4';
import MyPanel from '../MyPanel';

interface ExamplePageProps {
}

const ExamplePage: FC<ExamplePageProps> = (props) => {
  const {
  } = props

  return (
    <>
      <MyPanel viewTitle="Example" width={''} height={'auto'} panelHeaderHeight={60} id='examplePage'>
      </MyPanel>
      <video className='video-content' src={demoVideoUrl} muted={true} loop={true} autoPlay controls />
    </>
  )
}

export default ExamplePage;