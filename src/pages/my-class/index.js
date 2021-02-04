import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getAdminiClassAction, getTeachClassAction } from './store/action'


import { MyClassWrapper } from './style'
import ClassCard from 'components/class-card'

export default memo(function MyClass() {

  let history = useHistory()
  // 跳转到创建班级页面
  const handleBtnClick = () => {
    history.push('/createclass')
  }

  // 跳转到班级详情页
  const handleCardClick = (id) => {
    history.push(`/classdetails/${id}`)
  }

  const { adminiClass, teachClass } = useSelector(state => ({
    adminiClass: state.classInfo.adminiClass,
    teachClass: state.classInfo.teachClass
  }), shallowEqual)

  const dispatch = useDispatch();

  //获取行政班数据
  useEffect(() => {
    dispatch(getAdminiClassAction());
  }, [dispatch]);

  // 获取教学班数据
  useEffect(() => {
    dispatch(getTeachClassAction());
  }, [dispatch]);

  return (
    <MyClassWrapper>
      <div className="top-part">
        <div className="title">我的班级</div>
        <div className="operate">
          <button className="btn">加入班级</button>
          <button className="btn" onClick={handleBtnClick}>创建班级</button>
        </div>
      </div>

      {/* 行政班 */}
      {adminiClass &&
        <div className="admini-class">
          <div className="describe">
            行政班是为学生管理和教学管理而设置的班级
        </div>
          <div className="card-list">
            {
              adminiClass.map((item, index) => {
                return (
                  <div className="card-item" key={index}>
                    <ClassCard data={item}  cardClick={handleCardClick}  />
                  </div>
                )
              })
            }
          </div>
        </div>
      }

      {/* 教学班 */}
      {teachClass &&
        <div className="teach-class">
          <div className="describe">
            教学班是根据课程教学要求而设置的班级
      </div>
          <div className="card-list">
            {teachClass &&
              teachClass.map((item, index) => {
                return (
                  <div className="card-item" key={index}>
                    <ClassCard data={item} cardClick={handleCardClick}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      }

      { !adminiClass && !teachClass &&
        <div className="nono-class">
          <div className="bg"></div>
          <div className="text">你还没有加入班级,请立即</div>
          <div className="join_btn">加入班级</div>
        </div>
      }
    </MyClassWrapper>
  )
})