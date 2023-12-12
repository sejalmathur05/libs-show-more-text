"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _Truncate = _interopRequireDefault(require("./Truncate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class ShowMoreText extends _react.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "_isMounted", false);
    _defineProperty(this, "handleTruncate", truncated => {
      if (this._isMounted && truncated !== this.state.truncated) {
        this.setState({
          truncated
        });
        if (truncated) {
          this.truncateRef.onResize();
        }
        this.props.onTruncate && this.props.onTruncate();
      }
    });
    _defineProperty(this, "toggleLines", event => {
      event.preventDefault();
      var _self = this;
      if (!_self.props.expandByClick) {
        if (_self.props.onClick) {
          _self.props.onClick(_self.state.expanded, event);
        }
        return;
      }
      if (this._isMounted) {
        this.setState({
          expanded: !this.state.expanded
        }, () => {
          if (_self.props.onClick) {
            _self.props.onClick(_self.state.expanded, event);
          }
        });
      }
    });
    this.state = {
      expanded: false,
      truncated: false
    };
  }
  componentDidMount() {
    this._isMounted = true;
    var _self = this;
    if (this._isMounted) {
      this.setState({
        expanded: _self.props.expanded
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const {
      children,
      more,
      less,
      lines,
      anchorClass,
      className,
      width,
      keepNewLines,
      truncatedEndingComponent,
      onTruncate
    } = this.props;
    const {
      expanded,
      truncated
    } = this.state;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, /*#__PURE__*/_react.default.createElement(_Truncate.default, {
      width: width,
      lines: !expanded && lines,
      ellipsis: /*#__PURE__*/_react.default.createElement("span", null, truncatedEndingComponent, /*#__PURE__*/_react.default.createElement("span", {
        className: anchorClass,
        onClick: this.toggleLines
      }, more)),
      onTruncate: this.handleTruncate,
      ref: ref => this.truncateRef = ref
    }, keepNewLines ? children.split("\n").map((line, i, arr) => {
      line = /*#__PURE__*/_react.default.createElement("span", {
        key: i
      }, line);
      if (i === arr.length - 1) {
        return line;
      } else {
        return [line, /*#__PURE__*/_react.default.createElement("br", {
          key: i + "br"
        })];
      }
    }) : children), !truncated && expanded && /*#__PURE__*/_react.default.createElement("span", null, " ", /*#__PURE__*/_react.default.createElement("span", {
      className: anchorClass,
      onClick: this.toggleLines
    }, less)));
  }
}
_defineProperty(ShowMoreText, "defaultProps", {
  lines: 3,
  more: "Show more",
  less: "Show less",
  anchorClass: "show-more-less-clickable",
  onClick: undefined,
  expanded: false,
  width: 0,
  keepNewLines: false,
  truncatedEndingComponent: "... ",
  expandByClick: true,
  onTruncate: undefined
});
_defineProperty(ShowMoreText, "propTypes", {
  children: _propTypes.PropTypes.node,
  lines: _propTypes.PropTypes.number,
  more: _propTypes.PropTypes.node,
  less: _propTypes.PropTypes.node,
  anchorClass: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  expanded: _propTypes.PropTypes.bool,
  width: _propTypes.PropTypes.number,
  keepNewLines: _propTypes.PropTypes.bool,
  truncatedEndingComponent: _propTypes.PropTypes.node,
  expandByClick: _propTypes.PropTypes.bool,
  onTruncate: _propTypes.PropTypes.func
});
var _default = exports.default = ShowMoreText;