// modules
import React from "react";
import styled from "styled-components";

// components
import { Input } from "../../~reusables/atoms/Input";
import { offWhite } from "../../~reusables/variables/colors";
import { medium_space_1 } from "../../~reusables/variables/spacing";

const DecodedCipher = () => {
  return (
    <StyledDCipher>
      <Input
        placeholder="Decoded output"
        background="rgba(247, 248, 248, 0.3)"
        color={offWhite}
      />
    </StyledDCipher>
  );
};

const StyledDCipher = styled.section`
  margin-bottom: ${medium_space_1};
`;

export default DecodedCipher;
