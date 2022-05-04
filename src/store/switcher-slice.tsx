import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface AFAboutContentFr {
  tabService: string;
  tabServices: string;
  tabContact: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour: string;
  textFive: string;
}
interface AFServicesContentFr {
  tabService: string;
  tabServices: string;
  tabContact: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour: string;
  textFive: string;
}
interface AFContactContentFr {
  tabService: string;
  tabServices: string;
  tabContact: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour: string;
  textFive: string;
}

interface AFLandingFr {
  subTittleFr: string;
  tabServices: string;
  tabContact: string;
  textOne: string;
  textTwo: string;
  configuration_1: string;
  configuration_2: string;
  configuration_3: string;
}
interface AFFooterFr {
  subTittleFr: string;
  tabServices: string;
  tabContact: string;
  textOne: string;
  textTwo: string;
  configuration_1: string;
  configuration_2: string;
  configuration_3: string;
}

interface ObjectSelected {
  name: string;
  description: string;
  configuration_1: string;
  configuration_2: string;
  configuration_3: string;
}

// Define a type for the slice state
interface ToggleState {
  isVisibleLeftSideMenu: boolean;
  isVisibleLeftSideMenuAux: boolean;
  isFrench:boolean;

  newTabInfo: [
    {
      id: string;
      name: string;
      description: string;
    }
  ];
  selectedTabSideNavMenu: string;
}

// Define the initial state using that type
const initialState: ToggleState = {
  isVisibleLeftSideMenu: false,
  isVisibleLeftSideMenuAux: false,
  isFrench:false,
  newTabInfo: [
    {
      id: "",
      name: "",
      description: "",
    },
  ],
  selectedTabSideNavMenu: "",
};

const sliceLeftMenu = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleLeftSideMenu = !state.isVisibleLeftSideMenu;
    },
    toggleFrench(state) {
      state.isFrench = !state.isFrench;
    },

    toggleLeft(state) {
      state.isVisibleLeftSideMenuAux = !state.isVisibleLeftSideMenuAux;
    },

    newTabName(state, action) {
      console.log(action.payload + " element received in slice");
      state.newTabInfo.push(action.payload);
    },

    selectedTabSmallDev(state, action) {
      state.selectedTabSideNavMenu = action.payload;
    },
  },
});

export const { toggleFrench, toggle, toggleLeft, newTabName, selectedTabSmallDev } =
  sliceLeftMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceLeftMenu.reducer;
