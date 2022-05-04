import { ListItem, UnorderedList } from "carbon-components-react";
import React from "react";
import { InfoSection, InfoCard } from "../../components/infoComponent";
import { IAFServicesProp } from "../../interfaces/ICompoents";

export const AFServices = ({
  isFrenchProps,
  SERVICES_ONE_EN,
  SERVICES_ONE_FR,
  SERVICES_TWO_EN,
  SERVICES_TWO_FR,
  SERVICES_THREE_EN,
  SERVICES_THREE_FR,
}: IAFServicesProp) => {
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
            {isFrenchProps ? SERVICES_THREE_FR : SERVICES_THREE_EN}
          </p>
          <div>
            <InfoSection
              heading={
                <>
                  <h2>{isFrenchProps ? "Nos services" : "Our Services"}</h2>
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
                heading={
                  isFrenchProps ? "Comptabilité / Taxes" : "Accounting / Taxes"
                }
                body={isFrenchProps ? SERVICES_TWO_FR : SERVICES_TWO_EN}
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
                heading={
                  isFrenchProps ? "Outil de gestion" : "Management / Tool"
                }
                body={isFrenchProps ? SERVICES_ONE_FR : SERVICES_ONE_EN}
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
                heading={
                  isFrenchProps
                    ? "Comptabilité / Production de la paie"
                    : "Accounting / Payroll production"
                }
                body={
                  <UnorderedList>
                    <ListItem>
                      {isFrenchProps
                        ? "Bulletin de paie sur 15 jours ou hebdomadaire"
                        : "15-day or weekly pay statement"}
                    </ListItem>
                    <ListItem>
                      {isFrenchProps
                        ? "Rapport des retenues à la source mensuelles"
                        : "Report of monthly withholding taxes"}
                    </ListItem>
                    <ListItem>
                      {isFrenchProps
                        ? "Remise du T4 et du Relevé 1 aux employés"
                        : "Delivery of T4 and Relevé 1 to employees"}
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
