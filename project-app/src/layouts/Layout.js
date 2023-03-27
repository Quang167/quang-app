import React from 'react'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import { Outlet } from "react-router-dom";
import Search from './PageSearch';
import PageSearch from './PageSearch';
import PageTrending from './PageTrending';
import PagePopular from './PagePopular';
import PageLastest from './PageLastest';
const Layout = () => {
  return (
    <div>
        <PageHeader />
         <main>
          <PageSearch />
          <PageTrending />
          <PageLastest />
          <PagePopular />
         </main>
        <PageFooter />
    </div>
  )
}

export default Layout