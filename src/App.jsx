import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import {Team} from './pages/Team.jsx';
import {Profile} from "./pages/Profile.jsx";
import {Header} from "./components/Header.jsx";
import {Sidebar} from './components/Sidebar';
import {AppProvider} from "./context/AppContext.jsx";
import {ProtectedRoute} from "./components/ProtectedRoute.jsx";

function App() {
    return (
        <AppProvider>
            <Router>
                <Header />
                <div className="app-layout">
                    <Sidebar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            {/*<Route path="/team/:id" element={<Team />} />*/}
                            <Route element={<ProtectedRoute />}>
                                <Route path="/profile" element={<Profile />} />
                                <Route path={"/team/:id"} element={<Team/>} />
                            </Route>
                        </Routes>
                    </main>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
