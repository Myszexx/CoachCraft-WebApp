import {Header} from "../components/Dashboard/Header.jsx";
import {Sidebar} from "../components/Dashboard/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile.jsx";
import {Team} from "./Team.jsx";
import styles from './Dashboard.module.css';

export function Dashboard() {
    return (
        <>

            <div className={styles.app_layout}>
                <Sidebar />
                <main>
                    <Header />
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/team/:id" element={<Team />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}
