import {Header} from "../components/Dashboard/Header.jsx";
import {Sidebar} from "../components/Dashboard/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile.jsx";
import {Team} from "./Team.jsx";
import styles from './Dashboard.module.css';
import {MainBoard} from "./dashboard/MainBoard.jsx";

export function Dashboard() {
    return (
        <>

            <div className={styles.app_layout}>
                <Sidebar />
                <div className={styles.main_content}>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<MainBoard/>} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/team/:id" element={<Team />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    );
}
