import { useEffect, useState } from 'react'
import { ObjectSelected, NewTabInfo } from '../customInterfaces/InterfacesHeader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { newTabName, toggle, toggleLeft, selectedTabSmallDev } from '../store/switcher-slice';


export const useHeader = () => {

    const dispatch = useAppDispatch();
    const newTabCreated = useAppSelector((state) => state.ui.newTabInfo);
    const switcherVisibility = useAppSelector(
        (state) => state.ui.isVisibleLeftSideMenu
    );

    const leftMenuVisibilitySmallDevices = useAppSelector((state) => state.ui.isVisibleLeftSideMenuAux)

    const [objectName, setObject] = useState([
        {
            name: "",
            description: "",
            configuration_1: "",
            configuration_2: "",
            configuration_3: "",
        },
    ]);

    

    const tabSelectedNumber = useAppSelector((state) => state.ui.selectedTabSideNavMenu)


    const toggleSwitcher = () => {
        dispatch(toggle());
    };

    const switcherInitalState = () => {
        dispatch(toggleLeft())
    }

   
    const newTabInfoHandler = (infoToCreateNewTab: NewTabInfo) => {
        dispatch(newTabName(infoToCreateNewTab))
        console.log(infoToCreateNewTab + " OBJECT DISTPACHED")
    }

    const smallDevTabSelectionHandler = (selectedSection: string) => {
        dispatch(selectedTabSmallDev(selectedSection))
    }

    return {
        objectName,
        switcherVisibility,
        dispatch,
        toggleSwitcher,
        switcherInitalState,
        newTabInfoHandler,
        newTabCreated,
        tabSelectedNumber,
        smallDevTabSelectionHandler,
        leftMenuVisibilitySmallDevices
    }
}
