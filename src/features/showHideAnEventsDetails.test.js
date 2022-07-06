import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("user's search resulted in event elements by chosen city", () => {});
    let EventWrapper;
    when("user sees event elements", () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    then("user should see the collapsed by default event element", () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    given("user did not expand an event element to see more details", () => {});
    let EventWrapper;
    when("user expands an event element", () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
      EventWrapper.setState({
        collapsed: true,
      });
      EventWrapper.find(".show-details").simulate("click");
    });

    then("user should see more details of an event element", () => {
      expect(EventWrapper.state("collapsed")).toBe(false);
    });
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("the user did not collapse an event element", () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    when("the user collapses an event element", () => {
      EventWrapper.setState({
        collapsed: false,
      });
      EventWrapper.find(".hide-details").simulate("click");
    });

    then("user should see less details of an event element", () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });
});
