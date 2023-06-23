import React, { FunctionComponent as FC } from 'react';
import './index.scss';

import { Row, Col } from 'antd';
import MyPanel from '../MyPanel';

interface MaterialPageProps {
}

const MaterialPage: FC<MaterialPageProps> = (props) => {
  const {
  } = props

  return (
    <>
      <MyPanel viewTitle="Materials" width={''} height={'auto'} panelHeaderHeight={60} id='contactPage'>
      </MyPanel>
      <Row justify="space-between" style={{width: '100%'}} className='material-page' id='materialPage'>
        <div className='material-div'>
          Paper: to appear soon.
        </div>
      </Row>
    </>
  )
}

export default MaterialPage;