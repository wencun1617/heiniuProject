import styled from 'styled-components'

import defaultPhoto from "assets/images/class-details/default_photo.png"

export const MemberShowWrapper = styled.div`
display:flex;
.show-item {
  width: 1.675rem;
  height: 1.875rem;
  margin-top: .25rem;
  margin-right: .25rem;
  border: 1px solid #dddddd;
  .photo {
    width:100%;
    height: 1.4125rem;
    background: url(${defaultPhoto}) no-repeat 50% 50%;
    background-size: 100%;
    .show-tag {
      width:100%;
      height:100%;
      display:flex;
      justify-content: flex-end;
      align-content: flex-end;
      flex-wrap: wrap;
      color: #ffffff;
      z-index: 22;
      .tag {
        display: inline-block;
        padding-left: .0625rem;
        padding-right: .0625rem;  
        margin-top: .075rem;
        margin-left: .075rem;
        font-size: .15rem;
        background-color: ${props => props.tagColor};
      }
      .position {
        display: inline-block;
        padding-left: .0625rem;
        padding-right: .0625rem;
        margin-top: .075rem;
        margin-left: .075rem;
        font-size: .15rem;
        background-color: ${props => props.positionColor};
      }
    }
    
  }
  .name {
    height: .4625rem;
    line-height: .4625rem;
    text-align: center;
    font-size: .2rem;
    font-weight: bold;
  }
}
`