
import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import AiringTodayPage from './pages/AiringTodayPage';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import NowPlayingPage from './pages/NowPlayingPage';
import OnTvPage from './pages/OnTvPage';
import PopularPage from './pages/PopularPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComingPage from './pages/UpComingPage';
import Layout from './layouts/Layout';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route  index element={<HomePage />} />
                  <Route path='/popular' element={<PopularPage />} />
                  <Route path='/nowplaying'  element={<NowPlayingPage />} />
                  <Route path='/upcoming'  element={<UpComingPage />} />
                  <Route path='/toprated' element={<TopRatedPage />} />
                  <Route path='/airingtoday' element={<AiringTodayPage />} />
                  <Route path='/ontv' element={<OnTvPage />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;