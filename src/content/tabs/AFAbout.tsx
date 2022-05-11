import { InfoSection, InfoCard } from "../../components/infoComponent";
import { IAFAboutUsProp } from "./../../interfaces/ICompoents";

export const AFAbout = ({
  ABOUT_ONE_EN,
  ABOUT_ONE_FR,
  ABOUT_TWO_EN,
  ABOUT_TWO_FR,
  isFrenchProps,
}: IAFAboutUsProp) => {
  return (
    <>
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
        <div className="bx--row landing-page__tab-content">
          <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
            <h2 className="landing-page__subheading">AF-Consultants</h2>
            <p className="landing-page__p">
              {isFrenchProps ? ABOUT_ONE_FR : ABOUT_ONE_EN}
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
            {isFrenchProps ? ABOUT_TWO_FR : ABOUT_TWO_EN}
          </p>
          <div>
            <InfoSection heading={isFrenchProps? "Qui sommes-nous?":"Who we are?"} className="landing-page__r3">
              <InfoCard
                heading="Margarita Flores"
                body={isFrenchProps ? "Comptabilité" : "Accounting"}
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
                body={
                  isFrenchProps
                    ? "French Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly "
                    : "Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
                }
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
