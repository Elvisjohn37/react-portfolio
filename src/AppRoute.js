import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingScreen from 'src/components/LoadingScreen'
import LoadingSpinner from 'src/components/LoadingSpinner'

const MainLayout = lazy(() => import('src/components/MainLayout'))

const Home = lazy(() => import('src/pages/Home'))
const About = lazy(() => import('src/pages/About'))
const Experience = lazy(() => import('src/pages/Experience'))
const Projects = lazy(() => import('src/pages/Projects'))

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense
                            fallback={<LoadingScreen key="mainLoadingScreen" />}
                        >
                            <MainLayout />
                        </Suspense>
                    }
                >
                    <Route
                        index
                        element={
                            <Suspense fallback={<LoadingSpinner />}>
                                <Home />
                                <About />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<LoadingSpinner />}>
                                <About />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/experience"
                        element={
                            <Suspense fallback={<LoadingSpinner />}>
                                <Experience />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <Suspense fallback={<LoadingSpinner />}>
                                <Projects />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
