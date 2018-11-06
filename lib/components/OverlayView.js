"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.OverlayView = undefined

var _extends2 = require("babel-runtime/helpers/extends")

var _extends3 = _interopRequireDefault(_extends2)

var _defineProperty2 = require("babel-runtime/helpers/defineProperty")

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _delay2 = require("lodash/delay")

var _delay3 = _interopRequireDefault(_delay2)

var _assign2 = require("lodash/assign")

var _assign3 = _interopRequireDefault(_assign2)

var _bind2 = require("lodash/bind")

var _bind3 = _interopRequireDefault(_bind2)

var _invariant = require("invariant")

var _invariant2 = _interopRequireDefault(_invariant)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _reactDom = require("react-dom")

var _reactDom2 = _interopRequireDefault(_reactDom)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = require("../utils/MapChildHelper")

var _MapContext = require("../utils/MapContext")

var _MapContext2 = _interopRequireDefault(_MapContext)

var _OverlayViewHelper = require("../utils/OverlayViewHelper")

var _constants = require("../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.OverlayView`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var OverlayView = (exports.OverlayView = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(OverlayView, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  function OverlayView(props) {
    ;(0, _classCallCheck3.default)(this, OverlayView)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        OverlayView.__proto__ || (0, _getPrototypeOf2.default)(OverlayView)
      ).call(this, props)
    )

    _this.onPositionElement = (0, _bind3.default)(
      _this.onPositionElement,
      _this
    )

    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.OVERLAY_VIEW,
      null
    )
    return _this
  }

  ;(0, _createClass3.default)(OverlayView, [
    {
      key: "onAdd",
      value: function onAdd() {
        this.containerElement = document.createElement("div")
        this.containerElement.style.position = "absolute"
      },
    },
    {
      key: "draw",
      value: function draw() {
        var mapPaneName = this.props.mapPaneName

        ;(0, _invariant2.default)(
          !!mapPaneName,
          "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s",
          mapPaneName
        )
        var overlayView = this.state[_constants.OVERLAY_VIEW]

        if (!overlayView) {
          return
        }

        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
        var mapPanes = overlayView.getPanes()

        mapPanes[mapPaneName].appendChild(this.containerElement)
        this.onPositionElement()
        this.forceUpdate()
      },
    },
    {
      key: "onPositionElement",
      value: function onPositionElement() {
        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapCanvasProjection
        var mapCanvasProjection = this.state[
          _constants.OVERLAY_VIEW
        ].getProjection()

        var offset = (0, _extends3.default)(
          {
            x: 0,
            y: 0,
          },
          (0, _OverlayViewHelper.getOffsetOverride)(
            this.containerElement,
            this.props
          )
        )
        var layoutStyles = (0, _OverlayViewHelper.getLayoutStyles)(
          mapCanvasProjection,
          offset,
          this.props
        )
        ;(0, _assign3.default)(this.containerElement.style, layoutStyles)
      },
    },
    {
      key: "onRemove",
      value: function onRemove() {
        if (this.containerElement) {
          this.containerElement.parentNode.removeChild(this.containerElement)
        }
        if (!_react2.default.version.match(/^16/)) {
          _reactDom2.default.unmountComponentAtNode(this.containerElement)
        }
        this.containerElement = null
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var overlayView = new google.maps.OverlayView()
        // You must implement three methods: onAdd(), draw(), and onRemove().
        overlayView.onAdd = (0, _bind3.default)(this.onAdd, this)
        overlayView.draw = (0, _bind3.default)(this.draw, this)
        overlayView.onRemove = (0, _bind3.default)(this.onRemove, this)
        // You must call setMap() with a valid Map object to trigger the call to
        // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
        overlayView.setMap(this.context[_constants.MAP])
        ;(0, _MapChildHelper.componentDidMount)(this, overlayView, eventMap)
        this.setState(
          (0, _defineProperty3.default)(
            {},
            _constants.OVERLAY_VIEW,
            overlayView
          )
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.OVERLAY_VIEW],
          eventMap,
          updaterMap,
          prevProps
        )

        if (!_react2.default.version.match(/^16/)) {
          ;(0, _delay3.default)(this.state[_constants.OVERLAY_VIEW].draw)
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var overlayView = this.state[_constants.OVERLAY_VIEW]
        if (overlayView) {
          overlayView.setMap(null)
          // You must implement three methods: onAdd(), draw(), and onRemove().
          overlayView.onAdd = null
          overlayView.draw = null
          overlayView.onRemove = null
        }
      },
    },
    {
      key: "render",
      value: function render() {
        if (_react2.default.version.match(/^16/) && this.containerElement) {
          return _reactDom2.default.createPortal(
            _react2.default.Children.only(this.props.children),
            this.containerElement
          )
        }
        return false
      },

      /**
       * Returns the panes in which this OverlayView can be rendered. The panes are not initialized until `onAdd` is called by the API.
       * @type MapPanesonAdd
       * @public
       */
    },
    {
      key: "getPanes",
      value: function getPanes() {
        return this.state[_constants.OVERLAY_VIEW].getPanes()
      },

      /**
       * Returns the `MapCanvasProjection` object associated with this `OverlayView`. The projection is not initialized until `onAdd` is called by the API.
       * @type MapCanvasProjectionMapCanvasProjectionOverlayViewonAdd
       * @public
       */
    },
    {
      key: "getProjection",
      value: function getProjection() {
        return this.state[_constants.OVERLAY_VIEW].getProjection()
      },
    },
  ])
  return OverlayView
})(_react2.default.PureComponent))

OverlayView.FLOAT_PANE = "floatPane"
OverlayView.MAP_PANE = "mapPane"
OverlayView.MARKER_LAYER = "markerLayer"
OverlayView.OVERLAY_LAYER = "overlayLayer"
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget"
OverlayView.propTypes = {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  mapPaneName: _propTypes2.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  position: _propTypes2.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  bounds: _propTypes2.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  children: _propTypes2.default.node.isRequired,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  getPixelPositionOffset: _propTypes2.default.func,
}
OverlayView.contextType = _MapContext2.default
exports.default = OverlayView

var eventMap = {}

var updaterMap = {}
