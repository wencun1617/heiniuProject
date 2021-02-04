import React, { memo,useEffect} from 'react';

import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getClassDetailsAction} from './store/action'
import {Input} from 'antd';

import NavBar from './nav-bar'
import { ClassDetailsWrapper } from './style'


export default memo(function ClassDetails(props) {
  let history = useHistory()

  // 跳转到我的班级页面
  const handleBtnClick = () => {
    history.push('/myclass')
  }

  const { classDetails } = useSelector(state => ({
    classDetails: state.classDetails
  }), shallowEqual)

  const dispatch = useDispatch();
  const id = props.match.params.id

  //获取对应的班级详情页面
  useEffect(() => {
    dispatch(getClassDetailsAction({id}))
  }, [id,dispatch]);
  
  return (
    <ClassDetailsWrapper>
      <div className="top-part">
        <div className="title">我的班级</div>
        <div className="operate">
          <button className="btn" onClick={handleBtnClick}>返回上一级</button>
        </div>
      </div>
      <div className="head-box">
        <div className="class-name">折纸兴趣班</div>
        <div className="search-box">
          <Input placeholder="快速查找" className="search-input"  />
          <div className="search-icon"></div>
        </div>
      </div>
      <div className="contain">
        <NavBar classDetails={classDetails}></NavBar>
      </div>

    </ClassDetailsWrapper>
  )
})