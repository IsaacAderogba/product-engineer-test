// modules
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

// components
import CipherInput from "../CipherInput";
import DecodedCipher from "../DecodedCipher";
import Cipher from "../Cipher";
import CipherHeader from "../CipherHeader";
import CipherFooter from "../CipherFooter";

describe("about the Cipher component", () => {
  let wrapped: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapped = shallow(<Cipher />);
  });

  it("renders the CipherHeader component", () => {
    expect(wrapped.find(CipherHeader).length).toEqual(1);
  });

  it("renders the CipherInput component", () => {
    expect(wrapped.find(CipherInput).length).toEqual(1);
  });

  it("renders the DecodedCipher component", () => {
    expect(wrapped.find(DecodedCipher).length).toEqual(1);
  });

  it("renders the CipherFooter component", () => {
    expect(wrapped.find(CipherFooter).length).toEqual(1);
  });
});
