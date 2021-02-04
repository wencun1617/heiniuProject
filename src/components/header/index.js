import React, { memo } from 'react';
import {
  HeaderWrapper
} from "./style";

export default memo(function Header() {

  const navList = ["首页","教学管理","学习","资源超市","教育应用","新闻","名师名校"]

  return (
    <HeaderWrapper>
        <div className="logo-box">
          <a href="###" title="福建省教育信息化统一平台(网教通)"> </a>
        </div>

        <ul className="nav-list">
          {navList.map((item, index) => {
            return (
              <li key={index} >
                <a href="###">{item}</a>
              </li>
            )
          })}
        </ul>
        <div className="tag-box"></div>

        <div className="search-icon"></div>

        <div className="avatar-box">
          <div className="avatar"></div>
          <div className="username">Coco</div>
        </div>
    </HeaderWrapper>
  )
})