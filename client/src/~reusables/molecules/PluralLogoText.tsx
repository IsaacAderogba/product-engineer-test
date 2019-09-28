// modules
import React from "react";
import styled from "styled-components";

// components
import PluralAILogo from "../elements/PluralAILogo";
import { H1 } from "../atoms/Text";

// styles
import { heading_2 } from "../variables/font-sizes";
import { xs_space } from "../variables/spacing";
import { offWhite } from "../variables/colors";
import { tablet } from "../variables/media-queries";

const PluralLogoText = () => {
  return (
    <StyledPLogo>
      <PluralAILogo />
      <H1 mb="0" color={offWhite}>
        Plural AI Decoder
      </H1>
    </StyledPLogo>
  );
};

const StyledPLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin-left: ${xs_space};
  }

  @media only screen and (max-width: ${tablet}) {
    h1 {
      font-size: ${heading_2};
    }
  }
`;

export default PluralLogoText;
