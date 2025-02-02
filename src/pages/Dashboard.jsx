import {Header} from "../components/Header.jsx";
import {Sidebar} from "../components/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home.jsx";
import {ProtectedRoute} from "../components/ProtectedRoute.jsx";
import {Profile} from "./Profile.jsx";
import {Team} from "./Team.jsx";

export function Dashboard() {
    return (
        <>
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
        </>
    );
}
