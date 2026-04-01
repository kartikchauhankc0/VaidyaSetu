import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router'
import './index.css'

// import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import Profile from './components/Profile.jsx'
import DarkLoginPage from './components/LoginPage.jsx'
import DoctorProfile from './components/Doctor_profile.jsx'
import Appointment from './components/Appointment.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AuthenticationContextProvider from './context/AuthenticationContextProvider.jsx'
import SignUpPage from './components/SignUp.jsx'
// import User from './components/User.jsx'
// import Github from './components/Github.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={
              <PrivateRoute>
              <Home />
              </PrivateRoute>
              } />
            <Route path="search" element={
              <PrivateRoute>
                <Search />
              </PrivateRoute>
              } />
            <Route path="profile" element={
              <PrivateRoute>
              <Profile />
              </PrivateRoute>
              } />
            <Route path="login" element={
              <DarkLoginPage />
              } />
              <Route path="signup" element={
              <SignUpPage />
              } />
            <Route path="doctor" element={
              <PrivateRoute>
                <DoctorProfile />
              </PrivateRoute>
            } />
            {/* <Route path="notification" element= {<Notification/>}/> */}
            <Route path="appointment" element= {
              <PrivateRoute>
              <Appointment/>
              </PrivateRoute>
              }/>
          </Route>
      </Routes>
    </BrowserRouter>
    </AuthenticationContextProvider>
  </StrictMode>,
)
