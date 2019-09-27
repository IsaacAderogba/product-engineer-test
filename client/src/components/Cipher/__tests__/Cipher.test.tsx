import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CipherInput from "../CipherInput";
import DecodedCipher from "../DecodedCipher";
import Cipher from "../Cipher";

describe("about the Cipher component", () => {
  let wrapped: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapped = shallow(<Cipher />);
  });

  it("renders the CipherInput component", () => {
    expect(wrapped.find(CipherInput).length).toEqual(1);
  });

  it("renders the DecodedCipher component", () => {
    expect(wrapped.find(DecodedCipher).length).toEqual(1);
  });
});
