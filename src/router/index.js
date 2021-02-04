import React from 'react';
import { Redirect } from 'react-router-dom';
// import MyClass from 'pages/my-class'
// import CreateClass from 'pages/create-class'
// import ClassDetails from 'pages/class-details'

const MyClass = React.lazy(_ => import("pages/my-class"));
const CreateClass = React.lazy(_ => import("pages/create-class"));
const ClassDetails = React.lazy(_ => import("pages/class-details"));


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/myclass"/>
    )
  },
  {
    path: "/myclass",
    component:MyClass
  },
  {
    path: "/createclass",
    component: CreateClass
  },
  {
    path: "/classdetails/:id",
    component: ClassDetails
  },

]

export default routes;