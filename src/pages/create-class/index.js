import React, { memo,useState } from 'react';

import { useHistory } from 'react-router-dom'
import { CreateClassWrapper } from './style'
import { Input,Menu, Dropdown,Radio } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import verifyCreateClass from '@/utils/verify-create-class'
import {postClass} from '@/utils/post-class'

const periodList = ["小学","初中","高中","大学"]

const gradeList = ["一年级","二年级","三年级"]



export default memo(function CreateClass() {

  const periodMenu = (
    <Menu>
      {periodList.map((item,index) => {
        return (
          <Menu.Item key={index} onClick={() => setPeriod(item)}>
            {item}
          </Menu.Item>
        )
      })}
    </Menu>
  );

  const gradeMenu = (
    <Menu>
      {gradeList.map((item,index) => {
        return (
          <Menu.Item key={index} onClick={() => setGrade(item)}>
            {item}
          </Menu.Item>
        )
      })}
    </Menu>
  );
  
  let history = useHistory()

  // 跳转到我的班级页面
  const handleBtnClick = () => {
    history.push('/myclass')
  }

  const [school, setSchool] = useState()  // 学校
  const [period, setPeriod] = useState()  // 学段
  const [grade, setGrade] = useState()  // 年级
  const [className, setClassName] = useState() // 班级名
  const [type, setType] = useState(1) // 类型
  const [quit, setQuit] = useState(1) // 退出权限

  const onChangeSchool = e => {
    console.log(e.target.value);
    setSchool(e.target.value)
  }
  const onChangeClassName = e => {
    setClassName(e.target.value)
  }

  const onChangeType = e => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  
  const onChangeQuit = e => {
    console.log(e.target.value);
    setQuit(e.target.value);
  };

  // 判断输入内容，发送请求保存数据,跳转页面
  const Save = async () => {
    let result = verifyCreateClass(period,grade,className)
    if(result) {
      await postClass(period,grade,type)
      history.push('/myclass')
    }
  }
 

  return (
    <CreateClassWrapper>
      <div className="top-part">
        <div className="title">我的班级</div>
        <div className="operate">
          <button className="btn" onClick={handleBtnClick}>返回上一级</button>
        </div>
      </div>

      <div className="describe">
        尊敬的<span>老师  (刘老师) </span> , 请填写班级信息:
      </div>


      {/* 填写部分 */}
      <div className="fill-in">
        <div className="row">
          <div className="field"><p>学校</p></div>
          <Input placeholder="请选择学校" className="school" value={school} onChange={onChangeSchool} />
        </div>

        <div className="row">
          <div className="field"><p><span className="symbol">*</span>学段</p></div>
          <div className="period_box">
            <Dropdown overlay={periodMenu} className="period">
              <div><p>{period ? period:"请选择学段"}</p><p><CaretDownOutlined /></p></div>
            </Dropdown>
          </div>
        </div>

        <div className="row">
          <div className="field"> <p><span className="symbol">*</span>年级</p></div>
          <div className="grade_box">
            <Dropdown overlay={gradeMenu} className="grade">
              <div><p>{grade ? grade : "请选择年级"}</p><p><CaretDownOutlined /></p></div>
            </Dropdown>
          </div>
        </div>
        
        <div className="row">
          <div className="field"> <p><span className="symbol">*</span> 班级名</p></div>
          <Input placeholder="请输入班级名称，限20个字符，不支持输入_和%" className="name" value={className} onChange={onChangeClassName}/>
        </div>

        <div className="row">
          <div className="field"><p>类型</p></div>
          <Radio.Group onChange={onChangeType} value={type} className="radio">
            <Radio value={1}>行政班</Radio>
            <Radio value={2}>教学班</Radio>
          </Radio.Group>
        </div>
        
        <div className="row">
          <div className="field"><p>退出权限设置</p></div>
          <Radio.Group onChange={onChangeQuit} value={quit} className="radio">
            <Radio value={1}>允许退出</Radio>
            <Radio value={2}>通过班级管理员审核后退出</Radio>
            <Radio value={3}>禁止退出</Radio>
          </Radio.Group>
        </div>
        <button className="save" onClick={Save}>
          保存
        </button>
      </div>


    </CreateClassWrapper>
  )
})