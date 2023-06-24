import React, { FunctionComponent as FC } from 'react';
import './index.scss';

import posterPDFUrl from '../../assets/7-material/innnovationinsights-poster-icssi2023.pdf';

import { Row, Col } from 'antd';
import MyPanel from '../MyPanel';

import {
  FilePdfFilled,
  FilePptFilled,
  FileTextFilled,
  VideoCameraFilled,
  LayoutFilled,
  MenuOutlined,
} from '@ant-design/icons';

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
          <div className='supp-unit-div'>
            <FilePdfFilled />
            <a href={posterPDFUrl}>Poster (ICSSI2023)</a>
          </div>
          <div className='supp-unit-div'>
            <FileTextFilled />
            <a href='#'>Paper (to appear)</a>
          </div>
        </div>
      </Row>
    </>
  )
}

export default MaterialPage;