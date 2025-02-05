import {useEffect, useState} from "react";

export function useThemes() {
    const defaultTheme = {
        margin: "0.8rem",
        borderRadius: "20px",
        backgroundColor: "#2765a3",

    };
    const [themeName, setThemeName] = useState(localStorage.getItem('themeName') ? localStorage.getItem('themeName'): localStorage.setItem('themeName', 'default'));
    const [themeContent, setThemeContent] = useState(defaultTheme);

    const setTheme = (themeName) => {
        setThemeName(themeName);
        if (themeName === 'light') {
            setThemeContent(Object.assign({}, defaultTheme, {
                backgroundColor: 'white',
                color: 'black',
            }));
        }
        else {
            setThemeContent(defaultTheme);
        }
    };

    useEffect(() => {
        localStorage.setItem('themeName', themeName);
    }, [themeName]);

    return { themeName, setTheme, themeContent };
}