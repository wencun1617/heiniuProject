import styled from 'styled-components'

export const CreateClassWrapper = styled.div`
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
        font-size: .175rem;
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

  .describe {
    width: 100%;
    height: .6875rem;
    line-height: .6875rem;
    font-size: .175rem;
  
    &>span {
      color:  #3ba8f0;
    }
  }
  
  .fill-in {
    width: 100%;
    & .row {
      width:100%;
      height: .4375rem;
      line-height:.4375rem;
      margin: auto 0;
      margin-bottom: .25rem;
      font-size: .175rem;
    }
    .row .field {
      width: 1.5rem;
      display: inline-block;
      position: relative;
      height: .4375rem;
      line-height:.4375rem;
      font-size: .175rem;
      & > p {
        position :absolute;
        display: inline-block;
        height: .4375rem;
        right: 0;
        top: 35%;
        line-height:.4375rem;
      }
      .symbol {
        height: .4375rem;
        line-height: .4375rem;
        color:red;
        margin-right: .0625rem;
      }
    }

    .school,.period_box,.grade_box,.name{
      display: inline-block;
      margin-left: .375rem;
      width: 5rem;
      height: .4375rem;
      font-size: .175rem;
    }

    // 学段
    .period_box {
      border: 1px solid #dddddd;
      &:hover {
        border:1px solid #3ba8f0;
      }
      .period{
        width: 100%;
        height: .4375rem;
        line-height: .4375rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-left: .125rem;
        padding-right: .125rem;
        font-size: .175rem;
        & p {
          display: inline-block;
          height: .4375rem;
          line-height: .4375rem;
          margin:auto 0;
        }  
      }  
    }

    // 年级
    .grade_box {
      border: 1px solid #dddddd;
      &:hover {
        border:1px solid #3ba8f0;
      }
      .grade{
        width: 100%;
        height: .4375rem;
        line-height: .4375rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-left: .125rem;
        padding-right: .125rem;
        font-size: .175rem;
        & p {
          display: inline-block;
          height: .4375rem;
          line-height: .4375rem;
          margin:auto 0;
        }  
      }  
    }

    
    .radio {
      margin:auto 0;
      margin-left: .375rem;
      font-size: .175rem;
      display: inline-block;
      height: .4375rem;
    }

    .save {
      width: 1.25rem;
      height: .4375rem;
      margin-left: 2.25rem;
      border: none;
      outline: none;
      font-size: .175rem;
      color: #ffffff;
      background-color: #3ba8f0;
    }

    .save:hover {
      background-color: #3086c0;
    }
  }
`