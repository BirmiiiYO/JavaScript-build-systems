import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loader } from 'components/Loader'
import { EPagePaths } from 'constants/routes'

const HomePage = lazy(() => import('pages/Home'))
const FilmsPage = lazy(() => import('pages/Films'))
const PlanetsPage = lazy(() => import('pages/Planets'))
const StarshipsPage = lazy(() => import('pages/Starships'))


export const Routing = () => (
  <Suspense
    fallback={
        <Loader />
    }
  >
    <Routes>
      <Route path={EPagePaths.HOME} element={<HomePage />} />

      <Route path={EPagePaths.FILMS} element={<FilmsPage />} />
      <Route path={EPagePaths.PLANETS} element={<PlanetsPage />} />
      <Route path={EPagePaths.STARSHIPS} element={<StarshipsPage />} />
    </Routes>
  </Suspense>
)