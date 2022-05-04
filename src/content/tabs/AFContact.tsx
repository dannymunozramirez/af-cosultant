import React from "react";
import { FormComp } from "../../components/formComponent/FormComp";
import { AFMap } from "../../components/map/AFMap";
import { AFMapSM } from "../../components/map/AFMapSM";
import { useContent } from "../../customHooks/useContent";
import { IAFContactProp } from "../../interfaces/ICompoents";

export const AFContact = ({
  CONTACT_ONE_EN,
  CONTACT_ONE_FR,
  CONTACT_TWO_EN,
  CONTACT_TWO_FR,
  isFrenchProps,
}: IAFContactProp) => {
  return (
    <>
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width about-alternative-background">
        <div className="bx--row landing-page__tab-content">
          <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
            <h2 className="landing-page__subheading">
              AF-Consultants {isFrenchProps ? "Nous joindre" : "Contact"}
            </h2>
            <p>{isFrenchProps ? CONTACT_ONE_FR : CONTACT_ONE_EN}</p>
          </div>
        </div>

        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width ">
          <div className="bx--row landing-page__tab-content">
            <div
              style={{ marginBottom: 70, marginRight: 90 }}
              className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen"
            >
              <h2 className="landing-page__subheading">
                AF-Consultants {isFrenchProps ? "nous Contacter" : "Contact"}
              </h2>
              <FormComp isFrenchToggled={isFrenchProps} />
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
