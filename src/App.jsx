import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home.jsx';
// import {Team} from './pages/Team.jsx';
// import {Profile} from "./pages/Profile.jsx";
// import {Header} from "./components/Header.jsx";
// import {Sidebar} from './components/Sidebar';
import {AppProvider} from "./context/AppContext.jsx";
import {ProtectedRoute} from "./components/ProtectedRoute.jsx";
import {Registration} from "./pages/Registration.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />}/>
                    <Route path='/dashboard/*'
                           element= {
                               <ProtectedRoute>
                                   <Dashboard/>
                                   </ProtectedRoute>
                                   }
                                   />
                </Routes>
            </Router>
        </AppProvider>
    );
}

export default App;
