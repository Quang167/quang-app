import React from 'react'
import PageSearch from './PageSearch';

import PagePopular from './PagePopular';
import PageTrending from './PageTrending';
import PageTrailer from './PageTrailer';
import PageJoinToday from './PageJoinToday';

const HomePage = () => {
  return (
    <div>
      <main>
          <PageSearch />
          <PageTrending />
          <PageTrailer />
          <PagePopular />
          <PageJoinToday />
         </main>
        
      </div>
  )
}

export default HomePage