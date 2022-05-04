import { useEffect, useState } from 'react'
import { ObjectSelected, NewTabInfo } from '../customInterfaces/InterfacesHeader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { newTabName, toggleFrench, toggleLeft, selectedTabSmallDev } from '../store/switcher-slice';


export const useContent = () => {

    const dispatch = useAppDispatch();
    
    // const leftMenuVisibilitySmallDevices = useAppSelector((state) => state.ui.isVisibleLeftSideMenuAux)

    
    const isSwitchedToFrench = useAppSelector((state) => state.ui.isFrench)
    console.log(isSwitchedToFrench)

    const toggleFrenchHook = () => {
        dispatch(toggleFrench());
    };
    // const switcherInitalState = () => {
    //     dispatch(toggleLeft())
    // }

   
    // const newTabInfoHandler = (infoToCreateNewTab: NewTabInfo) => {
    //     dispatch(newTabName(infoToCreateNewTab))
    //     console.log(infoToCreateNewTab + " OBJECT DISTPACHED")
    // }

    // const smallDevTabSelectionHandler = (selectedSection: string) => {
    //     dispatch(selectedTabSmallDev(selectedSection))
    // }

    return {
        // objectName,
        // switcherVisibility,
        dispatch,
        toggleFrenchHook,
        isSwitchedToFrench
        // toggleSwitcher,
        // switcherInitalState,
        // newTabInfoHandler,
        // newTabCreated,
        // tabSelectedNumber,
        // smallDevTabSelectionHandler,
        // leftMenuVisibilitySmallDevices
    }
}
