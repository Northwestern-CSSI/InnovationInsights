import React from 'react';
import './App.scss';
import 'antd/dist/reset.css';

import MyHeader from './components/MyHeader';
import TeaserPage from './components/TeaserPage';
import BackgroundPage from './components/BackgroundPage';
import InnovationInsightsPage from './components/InnovationInsightsPage';
import FrameworkPage from './components/FrameworkPage';
import ExamplePage from './components/ExamplePage';
import AboutPage from './components/AboutPage';
import MaterialPage from './components/MaterialPage';

import cssiImgUrl from './assets/7-footer/cssi-horiz.png';
import innovationinsightsImgUrl from './assets/7-footer/logo-horiz.png';

import { ConfigProvider } from 'antd';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'white', // https://ant.design/docs/react/customize-theme
          colorSplit: 'rgba(5, 5, 5, 0.06)',
          colorText: '#4e4e4e',
          colorBgLayout: 'white', // '#f5f5f5', // backgournd
        },
      }}
    >
      <Layout>
        <div className="overlay"></div>
        <Header style={{ display: 'flex', alignItems: 'center' }} className='header-div'>
          <MyHeader />
        </Header>
        <Content className='content-div'>
          <TeaserPage />
          <div className='content'>
            <BackgroundPage />
            <InnovationInsightsPage />
            <FrameworkPage />
            <ExamplePage />
            <AboutPage />
            <MaterialPage />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} className='footer'>
          <div className='footer-div'>
            <div className='left'>
              <div className='logo-group'>
                <div className='image-div'>
                  <img className='image' src={cssiImgUrl} alt={'cssi-logo'} />
                </div>
                <div className='image-div'>
                  <img className='image' src={innovationinsightsImgUrl} alt={'innovationinsights-logo'} />
                </div>
              </div>
            </div>
            <div className='center'>
              Copyright © 2023 Yifang Wang
            </div>
            <div className='right'>
              <div className='org-info'>
                <div className='text-div'>The Center for Science of Science & Innovation</div>
                <div className='text-div'>Northwestern University</div>
                <div className='text-div'>2211 Campus Drive</div>
                <div className='text-div'>Evanston, IL 60208</div>
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
