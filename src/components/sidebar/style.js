import styled from 'styled-components'

import leftArrow from "assets/images/common/sidebar/left_arrow.png"
import leftArrowActive from "assets/images/common/sidebar/left_arrow_active.png"
import category from "assets/images/common/sidebar/category.png"
import home from "assets/images/common/sidebar/personal_home.png"
import assign from "assets/images/common/sidebar/personal_assign.png"
import task from "assets/images/common/sidebar/personal_task.png"
import statistics from "assets/images/common/sidebar/personal_statistics.png"


export const SidebarWrapper = styled.div`
width: 6.175rem;
height: calc(100vh - 0.725rem);
padding-left: 3.175rem;

.users-center {
  position: relative;
  display: flex;
  align-items: center;
  width: 3rem;
  height: .9375rem;
  font-size: .25rem;

  // 返回箭头
  .back-arrow {
    width: .375rem;
    height: .375rem;

    &>a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(${leftArrow}) no-repeat 50% 50%;
      background-size: 100%;
    }

    &>a :hover {
      background: url(${leftArrow}) no-repeat 50% 50%;
      background-size: 100%;
    }

    &>a :active {
      background: url(${leftArrowActive}) no-repeat 50% 50%;
      background-size: 100%;
    }
  }

  .title {
    margin:auto 0;
    margin-left: .1875rem;
    color: #b0b0b0;
    font-size: .25rem;
  }

  .category-button {
    position: absolute;
    width: .25rem;
    height: .25rem;
    right: .1875rem;

    &>a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(${category}) no-repeat 50% 50%;
      background-size: 100%;
    }
  }
}

// 个人中心操作列表
.personal-operate {
  margin-top: .1875rem;
  height: calc(100vh - 0.725rem - .9375rem);
  border-right: 1px solid #999999;
  font-size: .175rem;
  color: #333333;

  .personal-operate__item {
    display: flex;
    align-items: center;
    height: .75rem;
    padding-left: .2875rem;

    & .icon {
      width: .2rem;
      height: .2rem;
      margin-right: .25rem;
      
    }

    &:nth-child(3) > .text {
      color: #b5d9f8;
    }

    &:nth-child(1)>.icon {
      background: url(${home}) no-repeat 50% 50%;
      background-size: 100%;
    }

    &:nth-child(2)>.icon {
      background: url(${assign}) no-repeat 50% 50%;  
      background-size: 100%;
    }

    &:nth-child(3)>.icon {
      background: url(${task}) no-repeat 50% 50%;
      background-size: 100%;
    }

    &:nth-child(4)>.icon {
      background: url(${statistics}) no-repeat 50% 50%;
      background-size: 100%;
    }

    &:nth-child(3) {
      background-color: #f4f5f5;
      border-left: 3px solid #3ba8f0;
      padding-left: .25rem;
    }

    &:hover {
      background-color: #f4f5f5;
      border-left: 3px solid #3ba8f0;
      padding-left: .25rem;
    }  
  }

`