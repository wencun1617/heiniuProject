import React, { memo } from 'react';

import { SidebarWrapper } from './style'

export default memo(function Sidebar() {
  return (
    <SidebarWrapper>
      <>
          <div className="users-center">

            <div className="back-arrow">
              <a href="###"> </a>
            </div>

            <p className="title">个人中心</p>

            <div className="category-button">
              <a href="###"> </a>
            </div>
          </div>

          <div className="personal-operate">
            <div className="personal-operate__item">
              <div className="icon"></div>
              <div className="text">其他内容</div>
            </div>
            <div className="personal-operate__item">
              <div className="icon"></div>
              <div className="text">其他内容</div>
            </div>
            <div className="personal-operate__item">
              <div className="icon"></div>
              <div className="text">我的班级</div>
            </div>
            <div className="personal-operate__item">
              <div className="icon"></div>
              <div className="text">其他内容</div>
            </div>


          </div>
      </>
    </SidebarWrapper>
  )
})