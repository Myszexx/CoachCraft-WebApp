import {Fragment, useState} from "react";
import styles from './NinetyMinPicker.module.css';

export function NinetyMinPicker() {
    const [isFetching, setIsFetching] = useState(false);
    const fetchZPN = async () => {
        setIsFetching(true);
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsFetching(false);
    }
    const zpns = [
        {value:"ZPN 1",key:1},
        {value:"ZPN 2",key:2},
        {value:"ZPN 3",key:3},
        {value:"ZPN 4",key:4},
        {value:"ZPN 5",key:5}
    ];
    const regions = [
        {value:"Region 1",key:1},
        {value:"Region 2",key:2},
        {value:"Region 3",key:3},
        {value:"Region 4",key:4},
        {value:"Region 5",key:5}
    ];
    const leagues = [
        {value:"League 1",key:1},
        {value:"League 2",key:2},
        {value:"League 3",key:3},
        {value:"League 4",key:4},
        {value:"League 5",key:5}
    ];
    const selects = [
        {'fetchFunction':fetchZPN,'itemsList':zpns},
        {'fetchFunction':fetchZPN,'itemsList':regions},
        {'fetchFunction':fetchZPN,'itemsList':leagues}
    ];



    const generateSelect = (itemsList, fetchFunction = fetchZPN) => {
        return (
            <select  className={styles.selector} onChange={(e) => fetchFunction(e.target.value)}>
                {itemsList.map((item) => (
                    <option key={item.key} value={item.key}>{item.value}</option>
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
            {selects.map((select, index) => {
                console.log(select);
                return <Fragment key={index}> {generateSelect(select.itemsList, select.fetchFunction)}</Fragment>
            })}
            <button>Claim team</button>
        </div>
    )
}