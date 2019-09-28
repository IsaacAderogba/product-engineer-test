// modules
import React from "react";
import styled from "styled-components";

// components
import pluralAILogo from "../../~reusables/assets/pluralai-logo.png";
import { H1, P1 } from "../../~reusables/atoms/Text";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { xs_space, small_space } from "../../~reusables/variables/spacing";
import { tablet } from "../../~reusables/variables/media-queries";
import { heading_3, heading_2 } from "../../~reusables/variables/font-sizes";

const CipherHeader = () => {
  return (
    <StyledCHeader>
      <div className="title">
        <div>
          <img src={pluralAILogo} alt="Plural AI logo" />
        </div>
        <H1 mb="0" color={offWhite}>
          Plural AI Decoder
        </H1>
      </div>
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

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > div {
      height: 32px;
      width: 32px;
      margin-right: ${xs_space};

      img {
        height: 100%;
        width: 100%;
      }
    }

    h1 {
      margin-left: ${xs_space};
    }
  }

  @media only screen and (max-width: ${tablet}) {
    padding: ${small_space};

    h1 {
      font-size: ${heading_2};
    }
  }
`;

export default CipherHeader;
