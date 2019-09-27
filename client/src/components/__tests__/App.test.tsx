import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import Cipher from "../Cipher/Cipher";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the Cipher component", () => {
  let wrapped = shallow(<App />);
  expect(wrapped.find(Cipher).length).toEqual(1);
});
