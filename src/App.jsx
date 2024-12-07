import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Profile from './pages/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <Header />
            <div className="app-layout">
                <Sidebar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team/:id" element={<Team />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
