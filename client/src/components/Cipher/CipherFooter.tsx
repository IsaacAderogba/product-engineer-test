// modules
import React from "react";
import styled from "styled-components";

// components
import { P2 } from "../../~reusables/atoms/Text";
import FooterItem from "../../~reusables/elements/FooterItem";

// styles
import { offWhite } from "../../~reusables/variables/colors";

const CipherFooter = () => {
  return (
    <StyledCFooter>
      <P2 color={offWhite}>
        Made with{" "}
        <span role="img" aria-label="cup of coffee">
          ☕️{" "}
        </span>
        and{" "}
        <span role="img" aria-label="rockstar sign">
          🤘🏼️
        </span>
        by Isaac. I also made:
      </P2>
      <FooterItem
        title="Conduit"
        link="https://www.getconduit.co"
        text="Product management system"
      />
      <FooterItem
        title="Pluto"
        link="https://getpluto.netlify.com"
        text="Quiz management platform"
      />
    </StyledCFooter>
  );
};

const StyledCFooter = styled.footer`
  max-width: 364px;
  margin: 0 auto;
`;

export default CipherFooter;
