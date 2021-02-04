import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  width: 14.1875rem;
  height: 8.6875rem;
  .nav-list {
    width:100%;
    height: .4375rem;
    display: flex;
    background-color: #f5f5f5;
    font-size: .175rem;
    .nav-item {
      width: 2.25rem;
      height:.4375rem;
      line-height:.4375rem;
      text-align: center;
    }
    .nav-item:hover {
      background-color: #ffffff;
      color: #3ca8f0;
      border: 1px solid #dddddd;
    }
  }

  .contain-box {
    padding-left: .375rem;
    padding-right: .375rem;
  }
`