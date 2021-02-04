import React, { memo, useState } from 'react';

import { NavBarWrapper } from './style'
import MemberShow from "components/member-show/index"

let activeStyle = {
  backgroundColor: "#ffffff",
  color: "#3ca8f0",
  border: "1px solid #dddddd"
}


export default memo(function NavBar(props) {

  const { classDetails } = props

  const navList = [`所有教师(${classDetails.teachers.length})`,`所有学生(${classDetails.students.length})`, `所有家长(${classDetails.parents.length})`]

  const [active, setActive] = useState(0); //当前显示的部分(老师/学生/家长)
  return (
    <NavBarWrapper>
      <div className="nav-list">
        {
          navList.map((item, index) => {
            return (
              <div className="nav-item" key={index}
                style={index === active ? activeStyle : {}}
                onClick={() => setActive(index)}
              >{item}</div>
            )
          })
        }
      </div>
      <div className="contain-box">
        {active === 0 && <MemberShow info={classDetails.teachers} role={"teacher"}></MemberShow>}
        {active === 1 && <MemberShow info={classDetails.students} role={"student"}></MemberShow>}
        {active === 2 && <MemberShow info={classDetails.parents} role={"parent"}></MemberShow>}
      </div>
    </NavBarWrapper>
  )
})