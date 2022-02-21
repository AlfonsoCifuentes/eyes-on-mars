import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [blueTheme, setBlueTheme] = useState(false);

    const toggleTheme = () => {
        setBlueTheme(prevBlueTheme => !prevBlueTheme);
    }

    return (
        <ThemeContext.Provider value={blueTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}