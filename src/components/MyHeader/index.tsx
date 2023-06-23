import React, { FunctionComponent as FC, useState } from 'react';
import './index.scss';

import innovationinsightsLogo from '../../assets/1-media/innovationinsights-logo-2.png';
import innovationinsightsText from '../../assets/1-media/innovationinsights-text.png';
import cssiLogo from '../../assets/1-media/cssi-logo-white.png';


import { Row, Col, Anchor } from 'antd';
import { Collapse, Divider } from 'antd';
import MyPanel from '../MyPanel';
import {
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

interface MyHeaderProps {
}

const MyHeader: FC<MyHeaderProps> = (props) => {
  const {
  } = props

  const [isFolded, setIsFolded] = useState('none')
  const [menuCollapseClassname, setMenuCollapseClassname] = useState('collapse-menu-div')
  const handleFoldingNav = () => {
    if (isFolded === 'none') {
      setIsFolded('block')
      setMenuCollapseClassname('collapse-menu-div active')
    } else {
      setIsFolded('none')
      setMenuCollapseClassname('collapse-menu-div')
    }
  }

  const handleCloseNav = () => {
    if (isFolded === 'none') {
      setIsFolded('block')
      setMenuCollapseClassname('collapse-menu-div active')
    } else {
      setIsFolded('none')
      setMenuCollapseClassname('collapse-menu-div')
    }
  }


  return (
    <Row justify="space-between" style={{width: '100%'}}>
      <Col xs={8} sm={8} md={8} lg={8}>
        <div className='header-left-div'>
          <div className='logo'><img src={cssiLogo} alt='logo' height={72} /></div>
          <div className='logo'><img src={innovationinsightsLogo} alt='logo' height={72} /></div>
          {/* <div className='logo'><img src={innovationinsightsText} alt='logo' height={28}/></div> */}
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={16} id='header-right-div' className='header-right-div'>
        <div className='right-div-inside'>
          <Anchor
            direction="horizontal"
            items={[
              {
                key: 'backgroundPage',
                href: '#backgroundPage',
                title: 'BACKGROUND',
              },
              {
                key: 'innovationinsightsPage',
                href: '#innovationinsightsPage',
                title: 'INNOVATIONINSIGHTS',
              },
              {
                key: 'frameworkPage',
                href: '#frameworkPage',
                title: 'FRAMEWORK',
              },
              {
                key: 'examplePage',
                href: '#examplePage',
                title: 'EXAMPLE',
              },
              {
                key: 'aboutPage',
                href: '#aboutPage',
                title: 'TEAM',
              },
              {
                key: 'materialPage',
                href: '#materialPage',
                title: 'MATERIAL',
              },
            ]}
          />
        </div>
      </Col>
      <Col xs={4} sm={4} md={4} lg={0} id='header-right-div-collapse' className='header-right-div-collapse' onClick={handleFoldingNav}>
        <div className='menu'>
          <MenuOutlined />
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} className='header-right-div-collapse-div'>
      {/* style={{display: isFolded}} */}
        <div className={menuCollapseClassname}>
          <div className='close-div collapse-menu-div-unit'>
            <div className='menu' onClick={handleCloseNav}>
              <CloseOutlined />
            </div>
          </div>
          <Divider className='collapse-menu-div-unit' plain><a href="#backgroundPage">BACKGROUND</a></Divider>
          <Divider className='collapse-menu-div-unit' plain><a href="#innovationinsightsPage">INNOVATIONINSIGHTS</a></Divider>
          <Divider className='collapse-menu-div-unit' plain><a href="#frameworkPage">FRAMEWORK</a></Divider>
          <Divider className='collapse-menu-div-unit' plain><a href="#examplePage">EXAMPLE</a></Divider>
          <Divider className='collapse-menu-div-unit' plain><a href="#aboutPage">TEAM</a></Divider>
          <Divider className='collapse-menu-div-unit' plain><a href="#contactPage">MATERIAL</a></Divider>
        </div>
        {/* <hr className="hidden-md-up"></hr> */}
      </Col>
    </Row>
  )
}

export default MyHeader;