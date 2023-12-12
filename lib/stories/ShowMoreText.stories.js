"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Example = void 0;
var _react = _interopRequireDefault(require("react"));
var _ShowMoreText = _interopRequireDefault(require("../ShowMoreText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = exports.default = {
  title: "Example/ShowMoreText",
  component: _ShowMoreText.default,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => /*#__PURE__*/_react.default.createElement(_ShowMoreText.default, args, "Lorem ipsum dolor sit amet, consectetur", " ", /*#__PURE__*/_react.default.createElement("a", {
  href: "https://www.yahoo.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "yahoo.com"), " ", "adipiscing elit, sed do eiusmod tempor incididunt", /*#__PURE__*/_react.default.createElement("a", {
  href: "https://www.google.bg/",
  title: "Google",
  target: "_blank",
  rel: "noopener noreferrer"
}, "www.google.bg"), " ", "ut labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
const Example = exports.Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  lines: 3,
  more: "Show more",
  less: "Show less",
  className: "content-css",
  anchorClass: "show-more-less-clickable",
  onClick: () => {
    console.log("Executed on click");
  },
  expanded: false,
  width: 280,
  truncatedEndingComponent: "... "
};