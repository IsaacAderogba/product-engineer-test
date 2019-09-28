// modules
import React from "react";
import styled from "styled-components";
import { ApolloError } from "apollo-boost";

// components
import { Input } from "../../~reusables/atoms/Input";
import { CipherType } from "../../queries/cipher";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { medium_space_1 } from "../../~reusables/variables/spacing";

interface OwnProps {
  data: CipherType | undefined,
  error: ApolloError | undefined,
  loading: boolean
}

const DecodedCipher = (props: OwnProps) => {
  const{ data, error, loading } = props;
  console.log(data, error, loading)
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
