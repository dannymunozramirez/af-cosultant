import { Tab, Tabs } from "carbon-components-react";
import { useHeader } from "../../customHooks/useHeader";
import { AFAbout } from "../tabs/AFAbout";
import { AFServices } from "../tabs/AFServices";
import { AFContact } from "../tabs/AFContact";
import { AFFooter } from "../../components/footer/AFFooter";
import { useContent } from "../../customHooks/useContent";
import { useContentText } from "../../customHooks/useContentText";

const props = {
  tabs: {
    selected: 0,
    triggerHref: "#",
    role: "navigation",
  },
  tab: {
    href: "#",
    role: "presentation",
    tabIndex: 0,
  },
};

const LandingPage = () => {
  const { tabSelectedNumber } = useHeader();
  const { isSwitchedToFrench } = useContent();
  const {
    ABOUT_ONE_EN,
    ABOUT_ONE_FR,
    ABOUT_TWO_EN,
    ABOUT_TWO_FR,
    CONTACT_ONE_EN,
    CONTACT_ONE_FR,
    CONTACT_TWO_EN,
    CONTACT_TWO_FR,
    SERVICE_ONE_EN,
    SERVICE_ONE_FR,
    SERVICE_TWO_EN,
    SERVICE_TWO_FR,
    SERVICE_THREE_EN,
    SERVICE_THREE_FR,
  } = useContentText();

  return (
    <>
      <div
        style={{ background: "grey" }}
        className="bx--grid bx--grid--full-width landing-page"
      >
        <div
          style={{
            backgroundImage: `url("https://cutewallpaper.org/23/accounting-desktop-wallpaper/30841797.jpg")`,
          }}
          className="bx--row landing-page__banner"
        >
          <div className="bx--col-lg-16">
            <strong>
              <h1 style={{ color: "white" }} className="landing-page__heading">
                AF-Consultants
              </h1>
            </strong>
            <h3 style={{ color: "white" }}>
              {isSwitchedToFrench
                ? "Services de comptabilité"
                : "Accounting Services"}
            </h3>
          </div>
        </div>

        <div className="bx--row landing-page__r3">
          <div className="bx--col bx--no-gutter">
            <Tabs
              id="smallScreenMenuLanding"
              {...props.tabs}
              aria-label="Tab navigation"
              selected={Number(tabSelectedNumber)}
            >
              <Tab
                {...props.tab}
                label={isSwitchedToFrench ? "À propos" : "About"}
              >
                <AFAbout
                  isFrenchProps={isSwitchedToFrench}
                  ABOUT_ONE_EN={ABOUT_ONE_EN}
                  ABOUT_ONE_FR={ABOUT_ONE_FR}
                  ABOUT_TWO_EN={ABOUT_TWO_EN}
                  ABOUT_TWO_FR={ABOUT_TWO_FR}
                />
              </Tab>

              <Tab {...props.tab} label="Services">
                <AFServices
                  isFrenchProps={isSwitchedToFrench}
                  SERVICES_ONE_EN={SERVICE_ONE_EN}
                  SERVICES_ONE_FR={SERVICE_ONE_FR}
                  SERVICES_TWO_EN={SERVICE_TWO_EN}
                  SERVICES_TWO_FR={SERVICE_TWO_FR}
                  SERVICES_THREE_EN={SERVICE_THREE_EN}
                  SERVICES_THREE_FR={SERVICE_THREE_FR}
                />
              </Tab>
              <Tab
                {...props.tab}
                label={isSwitchedToFrench ? "Nous joindre" : "Contact"}
              >
                <AFContact
                  isFrenchProps={isSwitchedToFrench}
                  CONTACT_ONE_EN={CONTACT_ONE_EN}
                  CONTACT_ONE_FR={CONTACT_ONE_FR}
                  CONTACT_TWO_EN={CONTACT_TWO_EN}
                  CONTACT_TWO_FR={CONTACT_TWO_FR}
                />
              </Tab>
            </Tabs>
          </div>
        </div>

        <AFFooter isFrenchToggled={isSwitchedToFrench} />
        <br />
      </div>

      <div style={{ background: "grey" }}>
        <p style={{ textAlign: "center", color: "white" }}>
          &copy; 2022 <a href="http://www.ulogicapp.com">ulogicapp </a>
        </p>
      </div>
    </>
  );
};

export default LandingPage;
