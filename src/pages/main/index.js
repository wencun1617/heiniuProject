
import React, { memo, Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from '@/router'

import Header from 'components/header/index'
import Sidebar from 'components/sidebar/index'
import {MainWrapper} from './style'

export default memo(function Main() {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Header />
        <div className="contain">
          <Sidebar />
          <Suspense fallback={<div>loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        </div>
      </BrowserRouter>
    </MainWrapper>
  )
})