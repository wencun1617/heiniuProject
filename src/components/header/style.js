import styled from 'styled-components'

import logo from 'assets/images/common/header/logo.png'
import newTag from 'assets/images/common/header/new_tag.png' 
import headerSearch from 'assets/images/common/header/header_search.png'
import avatar from 'assets/images/common/header/avatar.png'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: .725rem;
  padding-left: 3.2rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  
  .logo-box {
    width: 3.55rem;
    height: .525rem;

    a {
      display: block;
      height: 100%;
      width: 100%;
      background: url(${logo})  50% 50% no-repeat;
      background-size: 100%;
    }
  }

  .nav-list {
    display: flex;
    font-size: 0.2rem;
    margin: auto 0;
    margin-left: .5625rem;
    white-space:nowrap;

    & li>a {
      margin-right: .625rem;
      color: #333333;
    }

    & li>a:active {
      color: #3ba8f0;
    }

    & li>a:hover {
      color: #3ba8f0;
    }

    & :nth-child(2)>a {
      color: #3ba8f0;
    }
  }

  .tag-box {
    margin-right: .75rem;
    width: .6875rem;
    height: .25rem;
    background: url(${newTag}) no-repeat 50% 50%;
    background-size: 100%;
  }

  .search-icon {
    margin-right: 1rem;
    width: .25rem;
    height: .25rem;
    background: url(${headerSearch}) no-repeat 50% 50%;
    background-size: 100%;
  }

  .avatar-box {
    display: flex;
    align-items: center;

    .avatar {
      width: .4rem;
      height: .4rem;
      background: url(${avatar}) no-repeat 50% 50%;
      background-size: 100%;
    }

    .username {
      font-size: .15rem;
      margin-left: .1875rem;
    }

  }
`