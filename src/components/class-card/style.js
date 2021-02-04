import styled from 'styled-components'

import defaultClassPic from 'assets/images/my-class/default_class_pic.png'
import teachMark from 'assets/images/my-class/teach_mark.png'
import adminiMark from 'assets/images/my-class/admini_mark.png'
import setting from 'assets/images/my-class/setting.png'

export const ClassCardWrapper = styled.div`
  width: 4.25rem;
  height: 2rem;
  .card-box {
    position:relative;
    width: 100%;
    height:100%;
    padding-left: .375rem;
    display:flex;
    align-items: center;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    
    .bg {
      position: relative;
      width: 1.375rem;
      height: 1.375rem;
      background: url(${defaultClassPic}) no-repeat 50% 50%;
      background-size: 100%;
      .mark1 {
        position: absolute;
        top: 0;
        left: .125rem;
        width: .3125rem;
        height: .3125rem;
        background: url(${adminiMark}) no-repeat 50% 50%;
        background-size: 100%;  
      }
      .mark2 {
        position: absolute;
        top: 0;
        left: .125rem;
        width: .3125rem;
        height: .3125rem;
        background:  url(${teachMark}) no-repeat 50% 50%;
        background-size: 100%;  
      }
    }

    .setting {
      position:absolute;
      right:.1875rem;
      top: .1875rem;
      width: .2rem;
      height: .2rem;
      background:  url(${setting}) no-repeat 50% 50%;
      background-size: 100%; 
    }

    .class-info {
      margin: auto 0;
      margin-left: .1875rem;
      font-size: .175rem;
      & div {
        height: .225rem;
        margin-top: .125rem;
      }
      & div:nth-child(3) {
        font-weight: bold;
      }
      & span {
        font-weight: normal;
        font-size: .175rem;
        color: #d3d3d3;
      }
    }

    .tag {
      position:absolute;
      bottom: 0;
      right: 0;
      width: .6875rem;
      height: .25rem;
      font-size: .15rem;
      text-align:center;
      line-height: .25rem;
      color:#ffffff;
      background-color: #3ba8f0;
      
    }
  }
  .card-box:hover {
    border: 1px solid #3ca8f0;
  }
`

 