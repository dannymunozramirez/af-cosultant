import { ListItem, UnorderedList } from "carbon-components-react";
import React from "react";
import { InfoSection, InfoCard } from "../../components/infoComponent";

export const AFServices = () => {
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
          <div>
            <InfoSection
              heading={
                <>
                  <h2>Our Services</h2>
                  <img
                    alt="neu"
                    style={{
                      width: "100%",
                      borderRadius: 2,
                      marginTop: 25,
                    }}
                    src="https://i1.wp.com/media.globalnews.ca/videostatic/354/991/final-cra.jpg?w=1040&quality=70&strip=all"
                  />
                </>
              }
              className="landing-page__r3"
            >
              <InfoCard
                heading="Accounting / Taxes"
                body="Entrust it to our experts! When filing your returns, there is always a second check to ensure the reliability of your reports. In addition, AF-Consultants policy is to guarantee that your notices of contributions will be identical to your declarations."
                icon={
                  <img
                    alt="neu"
                    style={{
                      height: 200,
                      width: "100%",
                      borderRadius: 2,
                      marginTop: 25,
                    }}
                    src="https://www.advisor.ca/wp-content/uploads/sites/5/2020/02/800x600_tax-time_iStock-915633582.jpg"
                  />
                }
              />
              <InfoCard
                heading="Management / Tool"
                body="Accounting is the main tool for sound business management

                It is mandatory for all commercial activity according to the tax laws in force in the country. Accounting is based on bookkeeping and supporting documents. All transactions must be recorded."
                icon={
                  <img
                    alt="neu"
                    style={{
                      height: 200,
                      width: "100%",
                      borderRadius: 2,
                      marginTop: 25,
                    }}
                    src="https://trafft.com/wp-content/uploads/2019/12/accounting-softwares.jpg"
                  />
                }
              />
              <InfoCard
                heading="Accounting / Payroll production"
                body={
                  <UnorderedList>
                    <ListItem>15-day or weekly pay statement</ListItem>
                    <ListItem>Report of monthly withholding taxes</ListItem>
                    <ListItem>
                      Delivery of T4 and Relevé 1 to employees
                    </ListItem>
                  </UnorderedList>
                }
                icon={
                  <img
                    alt="neu"
                    style={{
                      height: 200,
                      width: "100%",
                      borderRadius: 2,
                      marginTop: 25,
                    }}
                    src="https://financesonline.com/uploads/2017/12/payroll-feature-image.jpg"
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
