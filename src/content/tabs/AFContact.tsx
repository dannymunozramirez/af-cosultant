import { UnorderedList, ListItem } from "carbon-components-react";
import React from "react";
import { FormComp } from "../../components/formComponent/FormComp";
import { InfoSection, InfoCard } from "../../components/infoComponent";
import { AFMap } from "../../components/map/AFMap";
import { AFMapSM } from "../../components/map/AFMapSM";

export const AFContact = () => {
  return (
    <>
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width about-alternative-background">
        <div className="bx--row landing-page__tab-content">
          <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
            <h2 className="landing-page__subheading">AF-Consultants Contact</h2>
            <p>
              AF-Consultants - Services Tax software cannot guarantee this. In
              the event of a different or a new notice of assessment during the
              year, you must contact us to determine the cause. Sometimes a
              simple phone call to the ministry fixes the situation. Otherwise a
              notice of objection must be filed to settle the dispute within the
              prescribed time limits
            </p>
          </div>
        </div>

        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width ">
          <div className="bx--row landing-page__tab-content">
            <div
              style={{ marginBottom: 70 , marginRight:90}}
              className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen"
            >
              <h2 className="landing-page__subheading">
                AF-Consultants Contact
              </h2>
              <FormComp />
            </div>
            <div id="iframe-map-container-bigSc" className=" shadow-container">
              <AFMap />
            </div>
            <div id="iframe-map-container-bigSM" className=" shadow-container">
              <AFMapSM />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
