import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// Regular import for fallback (important!)
import Loading from './pages/Loading'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loaded pages
const Auth = lazy(() => import('./pages/Auth'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Profile = lazy(() => import('./pages/Profile'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))


function App() {
  return (
    <div className='h-screen'>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
