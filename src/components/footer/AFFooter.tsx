import { Application32, Globe32, LogoFacebook32, PersonFavorite32, TextLink32 } from "@carbon/icons-react";
import React from "react";
import { InfoCard, InfoSection } from "../infoComponent";

export const AFFooter = () => {
  return (
    <>
      <InfoSection  heading="" className="landing-page__r3">
        <InfoCard
          heading="Address"
          body="Address: # 164 de la Gondole, St-Eustache, QC. J7P 1N5"
          icon={<Globe32 />}
        />
        <InfoCard
          heading="Social Media"
          body="Contact"
          icon={<LogoFacebook32 />}
        />
        <InfoCard
          heading="Institution Links"
          body={
            <ul>
            <li>
              <a target="blank" href="http://www.revenuquebec.ca">
                Revenu Quebec
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.canada.ca/en/revenue-agency.html"
              >
                Canada Revenue Agency
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.emploiquebec.gouv.qc.ca/"
              >
                Emploi Quebec
              </a>
            </li>
          </ul>
          }
          icon={<TextLink32 />}
        />
      </InfoSection>
    </>
  );
};
