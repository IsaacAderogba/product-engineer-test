// modules
import React, { Dispatch } from "react";
import styled from "styled-components";

// components
import { Input } from "../../~reusables/atoms/Input";
import { ButtonSecondary } from "../../~reusables/atoms/Button";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { medium_space_1 } from "../../~reusables/variables/spacing";

interface OwnProps {
  setCipherInput(input: string): Dispatch<React.SetStateAction<string>> | void;
  cipherInput: string;
}

const CipherInput = (props: OwnProps) => {
  const { cipherInput, setCipherInput } = props;

  return (
    <StyledCInput>
      <Input
        value={cipherInput}
        onChange={e => setCipherInput(e.target.value)}
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
