// modules
import React from "react";
import styled from "styled-components";

// components
import pluralAILogo from "../../~reusables/assets/pluralai-logo.png";
import { H1, P1 } from "../../~reusables/atoms/Text";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { xs_space, medium_space_2, small_space } from "../../~reusables/variables/spacing";

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
      <P1 mt={small_space} color={offWhite}>Input your code and we'll handle the rest</P1>
    </StyledCHeader>
  );
};

const StyledCHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 ${medium_space_2} 0;
  
  .title {
    display: flex;
    justify-content: center;
    align-items: center;

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
`;

export default CipherHeader;
