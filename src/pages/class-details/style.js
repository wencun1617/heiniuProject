import styled from 'styled-components'
import searchIcon from "assets/images/class-details/search-icon.png"

export const ClassDetailsWrapper = styled.div`
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

.head-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 14.1875rem;
  height: 1.1875rem;

  .class-name {
    display: inline-block;
    font-size: .25rem;
    font-weight: bold;
    margin-right: 2.75rem;
  }

  .search-box {
    width: 3.75rem;
    height: .4375rem;
    display: flex;
    align-items: center;
    font-size: .175rem;
    border: 1px solid #dddddd;
    .search-input {
      width: 3.125rem;
      height: 100%;
    }
    .search-icon {
      display: inline-block;
      width: .625rem;
      height: 100%;
      background-color: #3ca8f0; 
      background: url(${searchIcon}) no-repeat 50% 50%;
      background-size: 100%;
    }
  }
  .search-box:hover {
    border: 1px solid #3ba8f0;
    .search-icon {
      background-color: #3ca8f0;  
      opacity: .8;
    }
  }
}

.contain {
  width: 14.1875rem;
  height: 8.6875rem;
  border: 1px solid #dddddd;
}

`