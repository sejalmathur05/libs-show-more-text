"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));
var _ShowMoreText = _interopRequireDefault(require("../lib/ShowMoreText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*eslint no-trailing-spaces: 2*/

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* global expect */

const testMessage = "Test Message Lorem ipsum dolor sit amet, <a href='https://www.google.com/'>Google link</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <a href='https://www.devzonetech.com/'>Devzone Tech</a> quis nostrud exercitation.Test Message Lorem ipsum dolor sit amet, <a href='https://www.google.com/'>Google link</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <a href='https://www.devzonetech.com/'>Devzone Tech</a> quis nostrud exercitation.";
describe("Component ShowMoreText", () => {
  test("check default props", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, null, testMessage));
    expect(wrapper.find("ShowMoreText").get(0).props).toEqual({
      lines: 3,
      more: "Show more",
      less: "Show less",
      children: testMessage,
      anchorClass: "show-more-less-clickable",
      onClick: undefined,
      expandByClick: true,
      expanded: false,
      width: 0,
      keepNewLines: false,
      truncatedEndingComponent: "... ",
      expandByClick: true
    });
  });
  test("click on Show more", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      lines: 2,
      keepNewLines: false
    }, testMessage));
    expect(wrapper.find(".show-more-less-clickable").text()).toEqual("Show more");
    wrapper.find(".show-more-less-clickable").simulate("click");
    expect(wrapper.find(".show-more-less-clickable")).toHaveLength(2);
    expect(wrapper.state()).toEqual({
      expanded: true,
      truncated: false
    });
  });
  test("check default state", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      lines: 2,
      keepNewLines: false
    }, testMessage));
    const state = wrapper.state();
    expect(state).toEqual({
      expanded: false,
      truncated: false
    });
  });
  test("check keepNewLines functionality", () => {
    // eslint-disable-next-line
    var msg = "Test Message \n Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, \n test new lines.";
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      lines: 2,
      keepNewLines: false
    }, msg));
    expect(wrapper.find("br").length).toEqual(0);
    const wrapper1 = (0, _enzyme.mount)(
    /*#__PURE__*/
    // eslint-disable-next-line
    _react.default.createElement(_ShowMoreText.default, {
      lines: 2,
      keepNewLines: true
    }, msg));
    expect(wrapper1.find("br").length).toEqual(3);
  });
  test("test width prop", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      width: 150
    }, testMessage));
    expect(wrapper.find("ShowMoreText").get(0).props.width).toEqual(150);
  });
  test("test onClick Show more / expand method", () => {
    let checkValue = 5;
    const onclickMethod = () => {
      checkValue += 10;
    };
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      onClick: onclickMethod,
      width: 150
    }, testMessage));
    wrapper.find(".show-more-less-clickable").at(0).simulate("click");
    expect(checkValue).toEqual(15);
  });
  test("test anchorClass prop", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      anchorClass: "testClass1"
    }, testMessage));
    expect(wrapper.find(".testClass1").length).toEqual(1);
  });
  test("check expanded prop true", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      lines: 2,
      expanded: true
    }, testMessage));
    const state = wrapper.state();
    expect(state).toEqual({
      expanded: true,
      truncated: false
    });
  });
  test("check expanded prop false", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      lines: 2,
      expanded: false
    }, testMessage));
    const state = wrapper.state();
    expect(state).toEqual({
      expanded: false,
      truncated: false
    });
  });
  test("test truncatedEndingComponent prop", () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, {
      expanded: false,
      truncatedEndingComponent: "000000"
    }, testMessage));
    expect(wrapper.text().indexOf("000000")).toEqual(1176);
  });
});