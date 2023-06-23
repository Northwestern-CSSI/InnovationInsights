import React, { FunctionComponent as FC } from 'react';
import './index.scss';

interface MyPanelProps {
  viewTitle: string;
  width: string;
  height: string;
  panelHeaderHeight: number;
  id: string;
  // x?: number;
  // y?: number;
  children: React.ReactNode; // 👈️ added type for children
}

// const panelStyle = {
//   // titleDivWidth:
// }

const MyPanel: FC<MyPanelProps> = (props) => {

  const {
    viewTitle,
    width,
    height,
    panelHeaderHeight,
    id,
  } = props

  if (viewTitle === '') {
    return (
      <div className='panel' style={{width: width, height: height}}>
        <div className='panel-header' style={{height: panelHeaderHeight}}>
          <div className='left-align'>
            {/* <span className='line'>{viewTitle}</span> */}
          </div>
        </div>
        <div className='panel-body'>
          {props.children}
        </div>
      </div>
    )
  }
  return (
    <div className='panel' style={{width: width, height: height}} id={id}>
      <div className='panel-header' style={{height: panelHeaderHeight}}>
        <div className='left-align'>
          {/* <span className="panel-title">{viewTitle}</span> */}
          {/* <span className="dot">.</span> */}
          <span className='line'>{viewTitle}</span>
        </div>
        {/* <div className='line'></div> */}
      </div>
      <div className='panel-body'>
      {/* style={{height: height - panelHeaderHeight}} */}
        {props.children}
      </div>
    </div>
  )
}

export default MyPanel