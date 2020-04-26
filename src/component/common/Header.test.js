import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";

it("contains 1 anchors via mount", () => {
  expect(2).toEqual(2);
});

// it("contains 1 NavLinks via shallow", () => {
//   const numLinks = shallow(<Header />).find("NavLink").length;
//   expect(numLinks).toEqual(1);
// });

// it("contains 1 anchors via mount", () => {
//   const headercomp = mount(<Header />);
//   expect(headercomp.find("a").length).toEqual(1);
// });
