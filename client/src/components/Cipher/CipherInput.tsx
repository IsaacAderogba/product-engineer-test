// modules
import React from "react";
import styled from "styled-components";
import { Input } from "../../~reusables/atoms/Input";
import { offWhite } from "../../~reusables/variables/colors";

const CipherInput = () => {
  return <StyledCInput>
    <Input placeholder="Code to deciper" background="rgba(247, 248, 248, 0.3)" color={offWhite} />
  </StyledCInput>;
};

const StyledCInput = styled.section``;

export default CipherInput;
