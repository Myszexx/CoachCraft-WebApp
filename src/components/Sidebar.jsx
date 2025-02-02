import {Fragment, useState} from "react";
import {MenuButton} from "./Common/MenuButton.jsx";
import {useAppContext} from "../context/AppContext.jsx";

export function Sidebar(){
    const [menusList,addMenu] = useState([
        {id:1, name:"Home", href:"/"},
        {id:2, name:"Teams", href:"/team/"},
        {id:3, name:"Profile", href:"/profile"},
    ]);


    const { user } = useAppContext();
    if (!user) {
        return <aside>Please log in to see the menu</aside>;
    }


    return (
        <aside>

            {menusList.map(item => {return <Fragment key={item.id} ><MenuButton name={item.name} value={item.name} url={item.href} ></MenuButton></Fragment>})}
        </aside>
    )
}