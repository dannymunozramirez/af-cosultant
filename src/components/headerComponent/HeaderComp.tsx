import {
  Header,
  HeaderName,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  HeaderContainer,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
} from "carbon-components-react/lib/components/UIShell";

import { useHeader } from "../../customHooks/useHeader";
import { useContent } from "../../customHooks/useContent";

const HeaderComp = () => {
  const {
    smallDevTabSelectionHandler,
    switcherInitalState,
    leftMenuVisibilitySmallDevices,
  } = useHeader();
  const { toggleFrenchHook, isSwitchedToFrench } = useContent();

  const tabSelectionHandler = (sectionNumber: string) => {
    smallDevTabSelectionHandler(sectionNumber);
    switcherInitalState();
  };

  const visibilityHandler = () => {
    switcherInitalState();
  };

  const onChangeLanguage = () => {
    toggleFrenchHook();
  };

  return (
    <HeaderContainer
      render={() => (
        <>
          <Header aria-label="Ulogic">
            <SkipToContent />

            <div id="smallScreenMenu">
              <HeaderMenuButton
                aria-label="Open menu"
                isCollapsible
                onClick={visibilityHandler}
                isActive={leftMenuVisibilitySmallDevices}
              />
            </div>

            <HeaderName href="#" prefix="AF-">
              Consultants
            </HeaderName>

            <HeaderGlobalBar id="contact-info-header">
              <HeaderMenuItem  href="tel:14505982338">
                <span >
                  {isSwitchedToFrench ? "Téléphone" : "Phone"}: +1 450 598 23 38
                </span>
              </HeaderMenuItem>

              <HeaderMenuItem onClick={onChangeLanguage} href="#">
                {isSwitchedToFrench ? "EN" : "FR"}
              </HeaderMenuItem>
            </HeaderGlobalBar>

            {leftMenuVisibilitySmallDevices && (
              <SideNav
                aria-label="Side navigation"
                isPersistent={true}
                expanded={leftMenuVisibilitySmallDevices}
              >
                <SideNavItems>
                  <SideNavMenuItem
                    onClick={() => tabSelectionHandler("0")}
                    href="#"
                  >
                    {isSwitchedToFrench ? "À propos" : "About"}
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    onClick={() => tabSelectionHandler("1")}
                    href="#"
                  >
                    Services
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    onClick={() => tabSelectionHandler("2")}
                    href="#"
                  >
                    {isSwitchedToFrench ? "Nous joindre" : "Contact"}
                  </SideNavMenuItem>
                  <SideNavMenuItem onClick={onChangeLanguage} href="#">
                    {isSwitchedToFrench ? "ANG" : "FR"}
                  </SideNavMenuItem>
                </SideNavItems>
              </SideNav>
            )}
          </Header>
        </>
      )}
    />
  );
};

export default HeaderComp;
