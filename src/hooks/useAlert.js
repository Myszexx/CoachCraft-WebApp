import {useState} from "react";

export function useAlert() {
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "",
    });

    const showAlert = (message, severity) => {
        setAlert({
            open: true,
            message,
            severity,
        });
    };

    const hideAlert = () => {
        setAlert({
            open: false,
            message: "",
            severity: "",
        });
    };

    return { alert, showAlert, hideAlert };
}