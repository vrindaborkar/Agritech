import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/Styles.css'
import ProtectedRoute from "./utils/ProtectedRoutes";
import AuthService from "./services/auth.service";
import Spinner from './components/Spinner';
import './fonts/stylesheet.css'
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useTranslation } from "react-i18next";
import { initReactI18next } from "react-i18next";
const Main = lazy(() => import('./Routes/Main'))
const Profile = lazy(() => import('./Routes/Profile'))
const NotFound = lazy(() => import('./Routes/NotFound'))
const Terms = lazy(() => import('./Routes/Terms'))
const Home = lazy(() => import('./Routes/Home'))
const Customer = lazy(() => import('./Routes/Customer/Customer'))
const Register = lazy(() => import('./Routes/Register'))
const Login = lazy(() => import('./Routes/Login'))
const Farmer = lazy(() => import('./Routes/Farmer/Farmer'))
const Admin = lazy(() => import('./Routes/Admin/Admin'))
const user = AuthService.getCurrentUser();
const Forgot = lazy(() => import("./Routes/Forgot"))
const NewPassword = lazy(() => import("./Routes/NewPassword"))
const ResetPasswordSuccessful = lazy(() => import("./Routes/ResetPasswordSuccessful"))
const RegisterSucces = lazy(() => import("./Routes/RegisterSucces"))


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['en', 'hi', 'mr'],
    fallbackLng: "en",

    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  });

const languages = [
  {
    code: 'mr',
    name: 'मराठी',
  },
  {
    code: 'hi',
    name: 'हिंदी'
  },
  {
    code: 'en',
    name: 'English'
  },
]


const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home 
               t={t}
               languages={languages}
            />} />

            <Route
              path="customers/*"
              element={
                <ProtectedRoute isAllowed={!!user && user.role === "customer"}>
                  <Customer
                   t={t} 
                    languages={languages}
                   />
                </ProtectedRoute>
              }>
            </Route>


          <Route 
            path="/customers/*" 
            element={
            <ProtectedRoute isAllowed={!!user && user.role === "customer"}>
              <Customer
                 t={t}
                  languages={languages}
              />
              </ProtectedRoute>
            }>
          </Route>

          <Route 
            path='/farmers/*'
            element={
            <ProtectedRoute isAllowed={!!user && user.role === "farmer"}>
              <Farmer
                 t={t}
                  languages={languages}
              />
              </ProtectedRoute>
            }>
          </Route>

          <Route 
            path="/admin/*" 
            element={
            <ProtectedRoute isAllowed={!!user && user.role === "admin"}>
              <Admin
                 t={t}
                  languages={languages}
              />
              </ProtectedRoute>
            }>
          </Route>

            

            

            <Route
              path="profile"
              element={
                <ProtectedRoute isAllowed={!!user}>
                  <Profile 
                     t={t}
                    languages={languages}
                  />
                </ProtectedRoute>
              }>
            </Route>


            <Route path='/login' element={<Login t={t} languages={languages} />} />
            <Route path='/register' element={<Register  t={t} />} />
            <Route path='/registeration-successfull' element={<RegisterSucces  t={t} />} />
            <Route path='/Forgot' element={<Forgot  t={t} />} />
            <Route path='/newpassword' element={<NewPassword  t={t} />} />
            <Route path='/ResetPasswordSuccessful' element={<ResetPasswordSuccessful  t={t} />} />
            <Route path='/terms' element={<Terms  t={t} />} />
          </Route>
          <Route path="*" element={<NotFound  t={t} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;