import React, { memo } from 'react';

import { ClassCardWrapper } from './style'
export default memo(function ClassCard(props) {

  const { data,cardClick } = props;

  return (
    <ClassCardWrapper>
      <div className="card-box" onClick={() => cardClick(data.id)}>
        <div className="bg">
          {/* 行政班/教学班的icon */}
          {data.type===1 && <div className="mark1" ></div>}
          {data.type===2 && <div className="mark2" ></div>}
        </div>

        <div className="setting"></div>

        <div className="class-info">
          <div>{data.grade}</div>
          <div> <span>班级 :</span> {data.class}</div>
          <div> <span>班主任 : </span> {data.headmaster}</div>
          <div> <span>学生 : </span> {data.students}</div>
        </div>

        {/* 行政班的标签 */}
        {data.type===1 && <div className="tag">行政班</div>}
      </div>
    </ClassCardWrapper>
  )
})