import React from "react";
import { Tab } from "carbon-components-react";
import { PersonFavorite32, Application32, Globe32 } from "@carbon/icons-react";
import { InfoSection, InfoCard } from "../../components/infoComponent";

interface Prop {
  props: any;
}
export const AFAbout = ({ props }: Prop) => {
  return (
    <>
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
        <div className="bx--row landing-page__tab-content">
          <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
            <h2 className="landing-page__subheading">AF-Consultants</h2>
            <p className="landing-page__p">
              Whether you are an employee or a self-employed and you need an
              accountant to take the worry out , your are in the right place.
              AF-Consultants offers a wide range of services: Taxation for
              individuals and corporations, Accounting and fiscal planning,
              Financial statements and forecasts, Computerized bookkeeping and
              Payroll Systems, Services for startups and Incorporations.
              AF-Consultants also offers services such as: GST-QST statements,
              payroll remittances and employer contributions, budgets, drafting
              of contracts, internal and external control systems.
            </p>
          </div>
          <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
            <img
              alt="neu"
              style={{
                width: "100%",
                borderRadius: 2,
                marginTop: 25,
              }}
              src="https://wallpaperaccess.com/full/1453924.jpg"
            />
          </div>
        </div>
      </div>
      <div
        // id="about-alternative-background"
        className="bx--grid bx--grid--no-gutter bx--grid--full-width about-alternative-background"
      >
        <div
          style={{ margin: 10 }}
          className="bx--row landing-page__tab-content"
        >
          <h2 className="landing-page__subheading">AF-Consultants</h2>
          <p style={{ marginBottom: 150 }} className="landing-page__p">
            Whether you are an employee or a self-employed and you need an
            accountant to take the worry out , your are in the right place.
            AF-Consultants offers a wide range of services: Taxation for
            individuals and corporations, Accounting and fiscal planning,
            Financial statements and forecasts, Computerized bookkeeping and
            Payroll Systems, Services for startups and Incorporations.
            AF-Consultants also offers services such as: GST-QST statements,
            payroll remittances and employer contributions, budgets, drafting of
            contracts, internal and external control systems.
          </p>
          <div>
            <InfoSection heading="Who we are?" className="landing-page__r3">
              <InfoCard
                heading="Margarita Flores"
                body="Accounting"
                icon={
                  <img
                    alt="neu"
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      marginTop: 25,
                    }}
                    src="https://wallpaperaccess.com/full/1453924.jpg"
                  />
                }
              />
              <InfoCard
                heading="Name"
                body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
                icon={
                  <img
                    alt="neu"
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      marginTop: 25,
                    }}
                    src="https://wallpaperaccess.com/full/1453924.jpg"
                  />
                }
              />
            </InfoSection>
          </div>
        </div>
      </div>
    </>
  );
};
