import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// Regular import for fallback (important!)
import Loading from './pages/Loading'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy loaded pages
const Auth = lazy(() => import('./pages/Auth'))
const Home = lazy(() => import('./pages/Home'))
const Profile = lazy(() => import('./pages/Profile'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))


function App() {
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;
  const userId = user ? user._id : null;
  console.log(userId, 'userId');

  return (
    <div className='h-screen'>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProtectedRoute userId={userId} element={< Profile />} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
