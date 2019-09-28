// modules
import React from "react";
import styled from "styled-components";

// components
import { Input } from "../../~reusables/atoms/Input";
import { ButtonSecondary } from "../../~reusables/atoms/Button";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { medium_space_1 } from "../../~reusables/variables/spacing";

const CipherInput = () => {
  return (
    <StyledCInput>
      <Input
        placeholder="Code to deciper"
        background="rgba(247, 248, 248, 0.3)"
        color={offWhite}
      />
      <ButtonSecondary>Decode</ButtonSecondary>
    </StyledCInput>
  );
};

const StyledCInput = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: ${medium_space_1};
`;

export default CipherInput;
