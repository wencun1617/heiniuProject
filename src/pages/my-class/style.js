import styled from 'styled-components'

import noneClass from 'assets/images/my-class/none_class.png'

export const MyClassWrapper = styled.div`
  width: calc(100vw - 6.175rem);
  height: calc(100vh - .725rem);
  padding-left: .4375rem;
  padding-right: 3.1875rem;

  .top-part {
    width: 14.1875rem;
    height: .9375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e7e7;
    
    .title {
      font-size: .175rem;
    }

    .operate {
      font-size: .175rem;
      .btn {
        height: .4375rem;
        width: 1.25rem;
        margin-left: .25rem;
        color:#ffffff;
        border: none;
        outline: none;
        background-color: #3ca8f0;
      }

      .btn:hover {
        background-color: #3ca8f0;  
        opacity: .7;
      }
    }
  }
  
  .admini-class,.teach-class {
    width: 13.6rem;
      
    .describe {
      height: .75rem;
      display: flex;
      align-items: center;
      font-size: .175rem;
      color: #b3b3b3;
    }

    .card-list {
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      .card-item  {
        display: inline-block;
        margin-right: .25rem;
        margin-bottom:.25rem;
      }
    }
  }

  .nono-class {
    width:100%;
    margin-top: 2rem;
    height: 50px;
    .bg {
      width: 2.125rem;
      height: 1.4375rem;
      margin: 0 auto;
      background: url(${noneClass}) no-repeat 50% 50%;
      background-size: 100%;
    }
    .text {
      height: .5rem;
      line-height: .5rem;
      font-size: .175rem;
      text-align: center;
    }
    .join_btn {
      width: 1.25rem;
      height: .4375rem;
      line-height: .4375rem;
      margin: 0 auto;
      text-align: center;
      font-size: .175rem;
      color:#ffffff;
      border: none;
      outline: none;
      background-color: #3ca8f0;
    }

    .join_btn:hover {
      background-color: #3086c0;  
    }
  }

`