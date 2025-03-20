import {useEffect, useState} from "react";
import styles from './NinetyMinPicker.module.css';
import {useJWT} from "../../../hooks/useJWT.js";
import {useAlert} from "../../../hooks/useAlert.js";

export function NinetyMinPicker() {
    const [isFetching, setIsFetching] = useState(false);
    const {axiosInstance} = useJWT();
    const {showAlert} = useAlert();
    const [ZPNs, setZPNs] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [tables, setTables] = useState([]);
    const [selectedPos, setSelectedPos] = useState({ZPNs: null, leagues: null});
    const [lastChanged, setLastChanged] = useState(null);


    const normalizeTables = (data) => {
        let res = []
        for (let i = 0; i < data.length; i++) {
            let item = {...data[i]};
            item['name'] = item['team_name'];
            item['value'] = item['team_url'];
            delete item['team_name'];
            delete item['team_url'];
            res.push(item);
        }
        setTables(res);
    }
    const fetchZPN = async () => {
        setIsFetching(true);
        let response = await axiosInstance.get("integrations/90mins/zpn");
        console.log(response);
        if (response.status === 200) {
            setZPNs(response.data);
            console.log(response.data);
            setIsFetching(false);
        }
        else {
            showAlert("Players not found", "error");
        }
    }
    const fetchLeagues = async (ZPNValue) => {
        setIsFetching(true);
        let response = await axiosInstance.get("integrations/90mins/leagues",{params: {filter:ZPNValue}});
        console.log(response);
        if (response.status === 200) {
            setLeagues(response.data);
            console.log(response.data);
            setIsFetching(false);
        }
        else {
            showAlert("Players not found", "error");
        }
    }
    const fetchTeams = async (leagueValue) => {
        setIsFetching(true);
        let response = await axiosInstance.get("integrations/90mins/tables",{params: {filter:leagueValue}});
        console.log(response);
        if (response.status === 200) {
            normalizeTables(response.data);
            console.log(response.data);
            setIsFetching(false);
        }
        else {
            showAlert("Players not found", "error");
        }
    }

    const setSelected = (key, value) => {
        let changedSelect = selectedPos;
        changedSelect[key] = value;
        setSelectedPos(changedSelect);
        setLastChanged(key);
    }

    useEffect(() => {
        if (lastChanged == null) {
            fetchZPN();
        }
        else if (lastChanged === 'ZPNs'){
            fetchLeagues(selectedPos.ZPNs);
        }
        else if (lastChanged === 'leagues'){
            fetchTeams(selectedPos.leagues);
        }
    }, [lastChanged, selectedPos]);




    const generateSelect = (itemsList, key) => {
        return (
            <select  className={styles.selector} onChange={(e) => setSelected(key,e.target.value)}>
                {itemsList.map((item,index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
        )
    }


    if (isFetching) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>90min Picker</h1>
            <p>Choose team:</p>

            {generateSelect(ZPNs, 'ZPNs')}
            {/*{generateSelect(regions,)}*/}
            {generateSelect(leagues, 'leagues')}
            {generateSelect(tables, 'tables')}
            <button>Claim team</button>
        </div>
    )
}