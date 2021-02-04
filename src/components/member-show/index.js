import React, { memo, useState } from 'react';

import { MemberShowWrapper } from './style'

export default memo(function MemberShow(props) {
  const { info, role } = props
  const [popup, setPopup] = useState(50) // 鼠标移动到具体成员项显示该成员的标签

  let inactive = { // 鼠标移动到具体成员项显示该成员的标签
    display: "none"
  }

  let tagColor = "#f99d43"
  let positionColor = "#f96543"

  // 标签颜色
  switch (role) {
    case "student":
      tagColor = "#4f92ff";
      positionColor = "#307efe";
      break;
    case "parent":
      tagColor = "#5ab76e";
      positionColor = "#5ab76e";
      break;
    default:
      break;
  }


  return (
    <MemberShowWrapper tagColor={tagColor} positionColor={positionColor}>
      {
        info.map((item, index) => {
          return (
            <div className="show-item" key={index} onMouseOver={() => setPopup(index)} onMouseOut={() => setPopup(50)}>
              <div className="photo">
                <div className="show-tag" style={index !== popup ? inactive : {}}>
                  {
                    item.tag.map((value, num) => {
                      return (
                        <div className="tag" key={num}>
                          {value}
                        </div>
                      )
                    })
                  }
                  {
                    item.position.map((value, num) => {
                      return (
                        <div className="position" key={num}>
                          {value}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="name">
                {item.name}
              </div>
            </div>
          )
        })
      }
    </MemberShowWrapper>
  )
})