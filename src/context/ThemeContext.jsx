import React, { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()

function ThemeProvider({children}) {

    const [theme, setTheme] = useState(null)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        localStorage.setItem("theme", savedTheme);
    }, []);

    const handleThemeChange = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme == "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
            return newTheme;
        });
    }; 
    return (
        <ThemeContext.Provider value={{theme,handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider