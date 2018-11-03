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

import { MAP, CIRCLE } from "../constants"

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
  "getInstanceFromComponent": "this.state[CIRCLE]"
}`

/**
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */
export class Circle extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static contextType = MapContext

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  constructor(props) {
    super(props)
    this.state = {
      [CIRCLE]: null,
    }
  }

  componentDidMount() {
    const circle = new google.maps.Circle()
    construct(Circle.propTypes, updaterMap, this.props, circle)
    circle.setMap(this.context[MAP])
    componentDidMount(this, circle, eventMap)
    this.setState({ [CIRCLE]: circle })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[CIRCLE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const circle = this.state[CIRCLE]
    if (circle) {
      circle.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default Circle

const eventMap = {}

const updaterMap = {}
