import {
  AccordingItem,
  Accordion,
  AccordionItem,
  Tab,
  Tabs,
} from "carbon-components-react";
import { InfoSection, InfoCard } from "../../components/infoComponent";
import Globe32 from "@carbon/icons-react/lib/globe/32";
import PersonFavorite32 from "@carbon/icons-react/lib/person--favorite/32";
import Application32 from "@carbon/icons-react/lib/application/32";
import { FormComp } from "../../components/formComponent/FormComp";
import { useHeader } from "../../customHooks/useHeader";
import { AFAbout } from "../tabs/AFAbout";
import { AFServices } from "../tabs/AFServices";
import { AFContact } from "../tabs/AFContact";
import { AFFooter } from "../../components/footer/AFFooter";
// import { Accordion, AccordionItem } from '@carbon/react';

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

  return (
    <>
      <div
        style={{ background: "black" }}
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
            <h3 style={{ color: "white" }}>Accounting Services</h3>
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
              <Tab {...props.tab} label="About">
                <AFAbout props={{ ...props.tabs }} />
              </Tab>

              <Tab {...props.tab} label="Services">
                <AFServices/>
              </Tab>
              <Tab {...props.tab} label="Contact">
                <AFContact />
              </Tab>
            </Tabs>
          </div>
        </div>
        
        <AFFooter />
        <br />
      </div>

      <div style={{ background: "black" }}>
        <p style={{ textAlign: "center", color: "white" }}>
          &copy; 2022 <a href="http://www.ulogicapp.com">ulogicapp.com </a>
        </p>
      </div>
    </>
  );
};

export default LandingPage;
