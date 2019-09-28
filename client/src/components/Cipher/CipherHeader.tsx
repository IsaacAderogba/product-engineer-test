// modules
import React from "react";
import styled from "styled-components";

// components
import pluralAILogo from "../../~reusables/assets/pluralai-logo.png";
import { P1 } from "../../~reusables/atoms/Text";
import PluralLogoText from "../../~reusables/molecules/PluralLogoText";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { small_space } from "../../~reusables/variables/spacing";
import { tablet } from "../../~reusables/variables/media-queries";

const CipherHeader = () => {
  return (
    <StyledCHeader>
      <PluralLogoText />
      <P1 mt={small_space} align="center" color={offWhite}>
        Input your code and we'll handle the rest
      </P1>
    </StyledCHeader>
  );
};

const StyledCHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 ${small_space} 0;

  @media only screen and (max-width: ${tablet}) {
    padding: ${small_space};
  }
`;

export default CipherHeader;
