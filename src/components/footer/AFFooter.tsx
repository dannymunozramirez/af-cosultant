import { Application32, Globe32, LogoFacebook32, LogoLinkedin32, LogoTwitter32, PersonFavorite32, TextLink32 } from "@carbon/icons-react";
import React from "react";
import { InfoCard, InfoSection } from "../infoComponent";
import {IAFFooter} from '../../interfaces/ICompoents'


export const AFFooter = ({isFrenchToggled}:IAFFooter) => {
  return (
    <>
      <InfoSection  heading="" className="landing-page__r3">
        <InfoCard
          heading={isFrenchToggled? "Adresse":"Address" }
          body={`${isFrenchToggled? "Adresse":"Address"}: # 164 de la Gondole, St-Eustache, QC. J7P 1N5"`}
          icon={<Globe32 />}
        />
        <InfoCard
          heading={isFrenchToggled? "Des médias sociaux":"Social Media" }
          body={isFrenchToggled? "Vous pouvez nous trouver à":"You can find us at" }
          icon={<div><LogoFacebook32 /> <LogoLinkedin32/> <LogoTwitter32/></div>}
        />
        <InfoCard
          heading={isFrenchToggled? "Liens institutionnels":"Institution Links" }
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
