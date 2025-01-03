import {useDebugValue, useEffect, useState} from "react";

export function useAPI(URL, Request){

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`${URL}`, Request)
            .then(res => res.json())
            .then(data => {setData(data)})
            .catch(err => console.log(err));
    }, [URL, Request]);


    useDebugValue(data)

    return data;
}