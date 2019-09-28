import { gql } from "apollo-boost";

export interface CipherType {
  decodedCipher: string;
}

export const decodeCipherQuery = gql`
  query($cipher: String!) {
    cipher(cipher: $cipher) {
      decodedCipher
    }
  }
`;
