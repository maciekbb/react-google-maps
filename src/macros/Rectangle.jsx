/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"
import MapContext from "../utils/MapContext"

import { MAP, RECTANGLE } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[RECTANGLE]"
}`

/**
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */
export class Rectangle extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static contextType = MapContext

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  constructor(props) {
    super(props)

    this.state = {
      [RECTANGLE]: null,
    }
  }

  componentDidMount() {
    const rectangle = new google.maps.Rectangle()
    construct(Rectangle.propTypes, updaterMap, this.props, rectangle)
    rectangle.setMap(this.context[MAP])
    componentDidMount(this, rectangle, eventMap)
    this.setState({ [RECTANGLE]: rectangle })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[RECTANGLE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const rectangle = this.state[RECTANGLE]
    if (rectangle) {
      rectangle.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default Rectangle

const eventMap = {}

const updaterMap = {}
