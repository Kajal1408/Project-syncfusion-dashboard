import { colorPickerChanged } from '@syncfusion/ej2-react-richtexteditor';
import React, {createContext, useContext ,useState } from 'react';

const StateContext =createContext();

const initialState ={
    chat :false,
    cart:false,
    userProfile :false,
    Notification:false,
}

export const ContextProvider =({children}) => {
    const [activeMenu ,setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize ,setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C907');
    const [currentMode , setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings]= useState(false);

    const setMode =(e) =>{
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode' , e.target.value);

        setThemeSettings(false);
    }

    const setColor =(color) =>{
        setCurrentColor(color);
        console.log(e.target);

        localStorage.setItem('colorMode' , colorPickerChanged);

        setThemeSettings(false);
    }

    const handleClick =(clicked) => {
        setIsClicked({...initialState, [clicked] : true});
    }

    return (
        <StateContext.Provider
        value={{
            activeMenu, 
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor, 
            currentMode,
            setColor,
            setMode,
            themeSettings,
            setThemeSettings
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =() => useContext (StateContext);