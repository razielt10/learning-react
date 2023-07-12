import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage, AboutPage, LoginPage, NavBar, Error404 } from './index'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <hr />

            <NavBar />

            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="login" element={ <LoginPage />} />
                <Route path="about" element={ <AboutPage />} />


                <Route path="/*" element={ <Error404 /> } />
                {/* <Route path="/*" element={ <Navigate to="/dashboard"/>} /> */}
            </Routes>

            <h5>Dev by @jcgljuancarlos</h5>
        </UserProvider>
    )
}
