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
const ErrorPage = lazy(() => import('./pages/ErrorPage'))


function App() {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
