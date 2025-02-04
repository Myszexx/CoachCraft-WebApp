import {Fragment, useState} from "react";
import {MenuButton} from "../Common/MenuButton.jsx";
import {useAppContext} from "../../context/AppContext.jsx";
import styles from './Sidebar.module.css';

export function Sidebar(){
    const [menusList,addMenu] = useState([
        {id:1, name:"Home", href:"/", src:"https://cdn-icons-png.flaticon.com/512/25/25694.png"},
        {id:2, name:"Teams", href:"/team/", src:"https://cdn-icons-png.flaticon.com/512/25/25694.png"},
        {id:3, name:"Profile", href:"/profile", src:"https://cdn-icons-png.flaticon.com/512/25/25694.png"},
    ]);


    const { user } = useAppContext();
    if (!user) {
        return <aside>Please log in to see the menu</aside>;
    }


    return (
        <aside className={styles.main}>

            {menusList.map(item => {return <Fragment key={item.id} ><MenuButton name={item.name} url={item.href} src={item.src} ></MenuButton></Fragment>})}
        </aside>
    )
}