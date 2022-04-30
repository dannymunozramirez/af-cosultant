import { UnorderedList, ListItem } from "carbon-components-react";
import React from "react";
import { FormComp } from "../../components/formComponent/FormComp";
import { InfoSection, InfoCard } from "../../components/infoComponent";

export const AFContact = () => {
  return (
    <>
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width"></div>
      <div
        id="about-alternative-background"
        className="bx--grid bx--grid--no-gutter bx--grid--full-width"
      >
        <div
          style={{ margin: 10 }}
          className="bx--row landing-page__tab-content"
        >
          <h2 className="landing-page__subheading">
            AF-Consultants - Services
          </h2>
          <p style={{ marginBottom: 150 }} className="landing-page__p">
            Tax software cannot guarantee this. In the event of a different or a
            new notice of assessment during the year, you must contact us to
            determine the cause. Sometimes a simple phone call to the ministry
            fixes the situation. Otherwise a notice of objection must be filed
            to settle the dispute within the prescribed time limits.
          </p>

          <InfoSection className="landing-page__r3">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                  <h2 className="landing-page__subheading">Get in Touch</h2>
                  <p className="landing-page__p">
                    <FormComp />
                  </p>
                </div>
                <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                    
                  
                </div>
              </div>
            </div>
          </InfoSection>
        </div>
      </div>
    </>
  );
};
